import { Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { CandidateModal } from "./CandidateModal";
import { MatchWithDetails } from "../types";

interface IMatchButtonProps {
  candidate: MatchWithDetails;
}

export const MatchButton = (props: IMatchButtonProps) => {
  const { name, rank, percentage, logoSrc } = props.candidate;
  const ariaLabel = `top ${rank} - ${name} - ${percentage}% match`;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        aria-label={ariaLabel}
        variant="matchResultButton"
        size="matchBtnSize"
        onClick={onOpen}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Flex direction="column" justifyContent="flex-start">
          <Image
            src={logoSrc}
            aria-hidden
            width="32px"
            p="3px"
            height="43px"
            bg="brand.gray10"
            borderRadius="4px"
          />
          <Text
            textStyle="bodySmBold"
            textAlign="center"
          >{`${percentage}%`}</Text>
        </Flex>
      </Button>
      <CandidateModal
        candidate={props.candidate}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
