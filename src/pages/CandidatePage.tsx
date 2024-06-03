import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { getCandidateById } from "@data/api";
import { CandidateInfo, CandidateHeader } from "src/features/candidateInfo";
import { CandidateAnswers } from "src/features/candidateAnswers";
import { useEffect } from "react";

export const CandidatePage = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = id ? getCandidateById(id) : undefined;

  useEffect(() => window.scrollTo(0, 0), []);

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <>
      <CandidateHeader candidateId={candidate.id} />
      <Flex direction="column" gap="6" maxW="680px" mb="6">
        <CandidateInfo candidateId={candidate.id} />
        <CandidateAnswers candidate={candidate} />
      </Flex>
    </>
  );
};
