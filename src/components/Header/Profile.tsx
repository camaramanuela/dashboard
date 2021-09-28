import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Manuela Bognar</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          bognarmanuela42@gmail.com
        </Text>
      </Box>
      <Avatar 
        size="md"
        name="Manuela Bognar"
        src="https://github.com/manuelabognar.png"
      />
    </Flex>   
  );
}