import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Manuela Bognar</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            bognarmanuela42@gmail.com
          </Text>
        </Box>
      )}
      <Avatar 
        size="md"
        name="Manuela Bognar"
        src="https://github.com/manuelabognar.png"
      />
    </Flex>   
  );
}