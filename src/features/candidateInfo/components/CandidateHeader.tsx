import { ColumnCentered } from "@/layout";
import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { Flex, Heading, Text, chakra } from "@chakra-ui/react";

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <ColumnCentered bg="primaryBg" p={6} mb={12} textAlign="center" gap={4}>
      <div>
        <Text textStyle="subtitle">{t("electionName")}</Text>
        <Heading size="4xl">{candidate.name}</Heading>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <Text textStyle="label">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </Text>
        ))}
      <CandidateNumber>
        {t("candidate.number")} {candidate.number}
      </CandidateNumber>
    </ColumnCentered>
  );
};

const CandidateNumber = chakra(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    my: 4,
    mx: "auto",
    textStyle: "labelXL",
    borderRadius: "50%",
    border: "1px solid",
    borderColor: "text",
    h: "7.75rem",
    w: "7.75rem",
  },
});
