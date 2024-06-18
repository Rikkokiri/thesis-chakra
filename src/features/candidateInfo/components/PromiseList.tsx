import { Badge, Box, ListItem, OrderedList } from "@chakra-ui/react";

interface IPromiseListProps {
  items: string[];
}

export const PromiseList = (props: IPromiseListProps) => {
  const { items } = props;

  return (
    <OrderedList listStyleType="none" m={0} p={0}>
      {items.map((item: string, index: number) => (
        <ListItem key={index} display="flex" gap={6} pb={4}>
          <Badge variant="rounded">{index + 1}</Badge>
          <Box pb="5px" fontWeight="400">
            {item}
          </Box>
        </ListItem>
      ))}
    </OrderedList>
  );
};
