import { ReactNode } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
} from "@chakra-ui/react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  bodyPadding?: string;
}

export const SectionCard = ({
  title,
  children,
  bodyPadding = "6",
  ...rest
}: SectionCardProps & CardProps) => {
  return (
    <Card variant="section" {...rest}>
      <CardHeader>
        <Heading size="xl" as="h2" fontWeight={900}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody p={bodyPadding}>{children}</CardBody>
    </Card>
  );
};
