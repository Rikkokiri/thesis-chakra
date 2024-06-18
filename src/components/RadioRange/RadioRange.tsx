import { Radio, RadioGroup } from "@chakra-ui/react";

interface RadioOption {
  value: number;
  label: string;
  optionVariant?: string;
}

interface RadioRangeProps {
  options: RadioOption[];
  value: string | undefined;
  onChange: (value: string) => void;
  isReadonly?: boolean;
}

export const RadioRange = (props: RadioRangeProps) => {
  return (
    <RadioGroup
      onChange={props.onChange}
      display="flex"
      w="100%"
      maxW="var(--radio-range-max-width)"
      position="relative"
      justifyContent="space-between"
      sx={{
        "::before": {
          content: '""',
          position: "absolute",
          top: "calc(2rem / 2 - 0.25rem / 2)",
          width: "calc(100% - 2rem)",
          height: "0.25rem",
          backgroundColor: "var(--radio-range-bg)",
          bg: "radioBg",
        },
      }}
    >
      {props.options.map((option) => (
        <Radio
          key={`radio-option-${option.value}`}
          type="radio"
          name="radio-option"
          value={option.value.toString()}
          variant={option.optionVariant}
        >
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
};
