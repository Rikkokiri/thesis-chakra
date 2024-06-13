import {
  Grid,
  GridItem,
  GridItemProps,
  GridProps,
  Stack,
  StackProps,
} from "@chakra-ui/react";

export const InfoGrid = ({ children, ...rest }: StackProps) => {
  return (
    <Stack as="ul" spacing={4} listStyleType="none" {...rest}>
      {children}
    </Stack>
  );
};

/*
TODO: Define breakpoint variables
@media (width <= 620px) {
  .info-grid__row {
    grid-template-columns: 1fr;
  }
}
*/
export const InfoGridRow = ({ children, ...rest }: GridProps) => {
  return (
    <Grid as="li" gridTemplateColumns="1fr 1fr" columnGap="1rem" {...rest}>
      {children}
    </Grid>
  );
};

export const InfoGridItem = ({ children, ...rest }: GridItemProps) => {
  return (
    <GridItem pb="5px" {...rest}>
      {children}
    </GridItem>
  );
};
