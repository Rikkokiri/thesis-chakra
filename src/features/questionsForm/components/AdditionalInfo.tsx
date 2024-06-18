import { FiInfo } from "react-icons/fi";
import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { LocalizedString } from "@data/types";
import { TFunction } from "i18next";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useLocalizedString } from "@hooks/useLocalizedString";

interface IAdditionalInfoProps {
  t: TFunction;
  info: LocalizedString;
}

export const AdditionalInfo = (props: IAdditionalInfoProps) => {
  const { t, info } = props;
  const { localize } = useLocalizedString();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ToggleButton
        isToggled={isOpen}
        onClick={onOpen}
        untoggledIcon={<FiInfo size="1.25rem" />}
        toggledIcon={<FiInfo size="1.25rem" />}
        variant="ghost"
        toggledVariant="ghost"
        size="sm"
      >
        {t("question.whatAbout")}
      </ToggleButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Heading size="lg" pb={2}>
                {t("question.whatAbout")}
              </Heading>
              <Text textStyle="bodySm">{localize(info)}</Text>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
