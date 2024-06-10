import "../styles/CandidateHeader.css";
import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { Flex, Heading } from "@chakra-ui/react";

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <Flex
      // TODO: background-color: var(--card-bg);
      direction="column"
      p={6}
      mb={12}
      textAlign="center"
      gap={4}
    >
      <div>
        <p className="subtitle m-0">{t("electionName")}</p>
        <Heading size="4xl">{candidate.name}</Heading>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <p className="candidate-header__organization m-0">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </p>
        ))}
      <Flex
        justifyContent="center"
        alignItems="center"
        my={4}
        mx="auto"
        // TODO: Text style
        lineHeight={1.5}
        fontWeight={700}
        fontSize={"1.25rem"}
        borderRadius={"50%"}
        border="1px solid black" // TODO: Update color to primary
        h={"7.75rem"}
        w={"7.75rem"}
      >
        {t("candidate.number")} {candidate.number}
      </Flex>
    </Flex>
  );
};
