import { Button, ButtonProps } from "@chakra-ui/react";

interface IToggleButtonProps extends ButtonProps {
  isToggled: boolean;
  toggledVariant?: ButtonProps["variant"];
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
}

export const ToggleButton = ({
  children,
  isToggled,
  untoggledIcon,
  toggledIcon,
  variant = "outline",
  toggledVariant = "outlineToggled",
  ...buttonProps
}: IToggleButtonProps) => {
  return (
    <Button
      leftIcon={isToggled ? toggledIcon : untoggledIcon}
      variant={isToggled ? toggledVariant : variant}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
