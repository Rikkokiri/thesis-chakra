import { Image } from "@chakra-ui/react";

interface ICandidateIndicatorProps {
  alt: string;
  imgSrc: string;
  boxSize?: number;
}

export const CandidateIndicator = ({
  alt,
  imgSrc,
  boxSize = 6,
}: ICandidateIndicatorProps) => {
  return (
    <Image
      boxSize={boxSize}
      borderRadius="50%"
      bg="primaryBg"
      src={imgSrc}
      alt={alt}
    />
  );
};
