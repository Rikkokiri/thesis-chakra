import { ReactNode } from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export const SectionCard = (props: SectionCardProps) => {
  return (
    <Card variant="section">
      <CardHeader>
        <Heading size="xl" as="h2" fontWeight={900}>
          {props.title}
        </Heading>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  );
};
