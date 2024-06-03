import "../styles/CandidatesMatchBar.css";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { MatchButton } from "./MatchButton";
import { useCandidatesMatch } from "../hooks/useCandidatesMatch";
import { MatchWithDetails } from "../types";
import {
  Box,
  BoxProps,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

export const CandidatesMatchBar = (
  props: ReturnType<typeof useCandidatesMatch>,
) => {
  const { topFourCandidates, topCount, displayMatches } = props;
  const [resultsHidden, setResultsHidden] = useState<boolean>(false);

  if (!displayMatches) {
    return null;
  }

  const bg = useColorModeValue("brand.white", "brand.blueBlack");

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      zIndex={99}
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="76px"
      backgroundColor={bg}
      boxShadow="rgba(0, 0, 0, 19%) 0 2px 4px 0"
    >
      <Flex maxW="520px" alignItems="center" w="100%">
        <Flex
          w="100%"
          justifyContent="space-evenly"
          alignItems="center"
          p={0}
          pt={1}
        >
          {resultsHidden || !topFourCandidates
            ? [...Array(topCount).keys()].map((index) => (
                <MatchPlaceholder key={index} />
              ))
            : topFourCandidates.map((candidate: MatchWithDetails) => (
                <MatchButton candidate={candidate} key={candidate.id} />
              ))}
        </Flex>
        <IconButton
          onClick={() => setResultsHidden(!resultsHidden)}
          icon={resultsHidden ? <FiEyeOff /> : <FiEye />}
          variant="ghost"
          fontSize="1.5rem"
          aria-label={resultsHidden ? "Show results" : "Hide results"} // TODO: Translate
        />
      </Flex>
    </Flex>
  );
};

const PlaceholderBox = (props: BoxProps) => {
  const bg = useColorModeValue("brand.gray10", "brand.gray80");
  return <Box w="100%" borderRadius="0.25rem" mb="0.5" {...props} bg={bg} />;
};

const MatchPlaceholder = () => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      w="8"
      h="100%"
    >
      <PlaceholderBox h="34px" />
      <PlaceholderBox h="18px" />
    </Flex>
  );
};
