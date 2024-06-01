import {
  Badge,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { t } from "i18next";
import { useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { ToggleButton } from "./ToggleButton";

interface ICardProps {
  title: string;
  category: string;
  number: number;
}

export const QuestionCard = (props: ICardProps) => {
  const [questionHidden, setQuestionHidden] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="section"
      textAlign="center"
      flexDir="column"
      alignItems="center"
      bg="white"
      // mb="1.5rem"
      py="5rem"
      px="1.5rem"
      borderRadius="4px" // TODO: Define as default?
      width="100%"
      maxW="680px"
    >
      <Flex alignItems="center">
        <Badge>{props.number} / ?</Badge>
        <Text textStyle="label" ml="1.5rem">
          Question category
        </Text>
      </Flex>
      <Heading maxW="343px" textStyle="h2">
        Question title will be placed here
      </Heading>
      <Flex mt="6px" mb="1.125rem">
        <Button variant="ghost" leftIcon={<FiInfo />} onClick={onOpen}>
          {t("question.whatAbout")}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Modal title</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>
            </ModalContent>
          </ModalOverlay>
        </Modal>
        <ToggleButton
          isToggled={questionHidden}
          toggle={() => setQuestionHidden((prev) => !prev)}
          label={t("question.hide")}
        />
      </Flex>
      <Flex gap="1.5rem" mt="2rem">
        <Button variant="outline" leftIcon={<FiThumbsUp />}>
          {t("question.yes")}
        </Button>
        <Button variant="outline" leftIcon={<FiThumbsDown />}>
          {t("question.no")}
        </Button>
      </Flex>
    </Flex>
  );
};
