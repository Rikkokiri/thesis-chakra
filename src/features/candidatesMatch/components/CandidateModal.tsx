import {
  Heading,
  Image,
  Link as ChakraLink,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Flex,
  Box,
  ModalBody,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MatchWithDetails } from "../types";
import { ColumnCentered } from "@/layout";

interface ICandidateModalProps {
  candidate: MatchWithDetails;
  isOpen: boolean;
  onClose: () => void;
}

export const CandidateModal = ({
  candidate,
  isOpen,
  onClose,
}: ICandidateModalProps) => {
  const { t } = useTranslation();
  const { name, percentage, logoSrc, brandColor } = candidate;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalCloseButton />
          <Flex w="100%">
            <Flex
              direction="column"
              justifyContent="flex-start"
              w="fit-content"
            >
              <Image
                src={logoSrc}
                aria-hidden
                w="64px"
                height="85px"
                p={1}
                bg="brand.gray10"
                borderRadius="4px"
              />
              <Box
                h={1}
                borderRadius="19px"
                mt={1}
                bg={"brand.gray10"}
                mr="auto"
                aria-hidden
                style={{ width: `${percentage}%`, backgroundColor: brandColor }}
              />
              <Text
                textStyle="bodySmBold"
                mt={1}
                textAlign="center"
              >{`${percentage}%`}</Text>
            </Flex>
            <ModalBody pl="1.125rem">
              <Heading as="h3" size="lg" lineHeight="1.5rem" fontWeight={700}>
                {name}
              </Heading>
              <Text as="span" textStyle="bodySmBold">
                {t("candidate.number")} {candidate.number}
              </Text>
            </ModalBody>
          </Flex>
          <ColumnCentered pt={8}>
            <ChakraLink
              as={ReactRouterLink}
              to={`/candidates/${candidate.id}`}
              variant="outlineButtonLink"
              size="smButton"
            >
              {t("candidate.getToKnow")}
            </ChakraLink>
          </ColumnCentered>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
