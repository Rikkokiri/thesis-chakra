import { Text } from "@chakra-ui/react";
import "../styles/MatchButton.css";
import { useState } from "react";
import { CandidateModal } from "./CandidateModal";
import { MatchWithDetails } from "../types";

interface IMatchButtonProps {
  candidate: MatchWithDetails;
}

export const MatchButton = (props: IMatchButtonProps) => {
  const { name, rank, percentage, logoSrc } = props.candidate;
  const ariaLabel = `top ${rank} - ${name} - ${percentage}% match`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        aria-label={ariaLabel}
        className="match-result"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div className="match-result__img-wrapper">
          <img src={logoSrc} aria-hidden className="match-result__img" />
          <Text textStyle="bodySm" textAlign="center">{`${percentage}%`}</Text>
        </div>
      </button>
      <CandidateModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
        {...props}
      />
    </>
  );
};
