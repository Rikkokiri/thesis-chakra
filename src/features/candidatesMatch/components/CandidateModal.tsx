import {
  Heading,
  Link as ChakraLink,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import "../styles/CandidateModal.css";
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
          <div className="candidate-modal__body">
            <div className="candidate-modal__img-wrapper">
              <img src={logoSrc} aria-hidden className="candidate-modal__img" />
              <div
                className="candidate-modal__score-visual"
                aria-hidden
                style={{ width: `${percentage}%`, backgroundColor: brandColor }}
              />
              <span className="candidate-modal__score">{`${percentage}%`}</span>
            </div>
            <div className="candidate-modal__details-section">
              <Heading as="h3" size="lg" lineHeight="1.5rem" fontWeight={700}>
                {name}
              </Heading>
              <Text as="span" textStyle="bodySmBold">
                {t("candidate.number")} {candidate.number}
              </Text>
            </div>
          </div>
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
