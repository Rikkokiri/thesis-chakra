import { ReactNode } from "react";
import "./SectionCard.css";
import { Heading } from "@chakra-ui/react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export const SectionCard = (props: SectionCardProps) => {
  return (
    <section className="section-card">
      <div className="section-card__header">
        <Heading size="xl" as="h2" fontWeight={900}>
          {props.title}
        </Heading>
      </div>
      <div className="section-card__content">{props.children}</div>
    </section>
  );
};
