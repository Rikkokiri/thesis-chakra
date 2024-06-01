import { Button } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

interface IToggleButtonProps {
  isToggled: boolean;
  toggle: () => void;
  label: string;
  toggledIcon?: JSX.Element;
  untoggledIcon?: JSX.Element;
}

export const ToggleButton = ({
  isToggled,
  toggle,
  label,
  toggledIcon = <FiEyeOff />,
  untoggledIcon = <FiEye />,
}: IToggleButtonProps) => {
  return (
    <Button
      variant={isToggled ? "toggledGhost" : "ghost"}
      onClick={toggle}
      leftIcon={isToggled ? toggledIcon : untoggledIcon}
    >
      {label}
    </Button>
  );
};
