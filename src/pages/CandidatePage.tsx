import { useParams } from "react-router-dom";
import { getCandidateById } from "@data/api";
import { CandidateInfo, CandidateHeader } from "src/features/candidateInfo";
import { CandidateAnswers } from "src/features/candidateAnswers";
import { useEffect } from "react";
import { PageSectionsCol } from "@/layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useTranslation } from "react-i18next";

export const CandidatePage = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = id ? getCandidateById(id) : undefined;
  const { t } = useTranslation();

  useEffect(() => window.scrollTo(0, 0), []);

  useDocumentTitle(
    candidate?.name
      ? t("pageTitle.candidatePage", { name: candidate.name })
      : t("pageTitle.default"),
  );

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <>
      <CandidateHeader candidateId={candidate.id} />
      <PageSectionsCol mb={6}>
        <CandidateInfo candidateId={candidate.id} />
        <CandidateAnswers candidate={candidate} />
      </PageSectionsCol>
    </>
  );
};
