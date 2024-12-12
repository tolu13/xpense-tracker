import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function ExpenseView({ type, data = [] }) {
  return (
    <Box
      flex={1}
      w={"full"}
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Flex
            key={index} // Use a unique key for each mapped item
            bg={type === "expense" ? "red.50" : "blue.50"}
            mt={"4"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={type === "expense" ? "red.100" : "blue.100"}
            p={"4"}
            borderRadius={"8"}
          >
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Text ml={"4"} fontWeight={"bold"} color={"gray.600"}>
                {item.description}
              </Text>
              <Text color={"gray.400"} ml={"2"}>
                $ {item.amount}
              </Text>
            </Flex>
          </Flex>
        ))
      ) : (
        <Text mt={"4"} color={"gray.500"}>
          No {type === "income" ? "income" : "expenses"} to display.
        </Text>
      )}
    </Box>
  );
}
