import { Box, Flex, Heading, Divider, HStack, VStack, SimpleGrid, Button} from "@chakra-ui/react"

import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";

export default function CreateList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Box 
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p="8"
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input 
                name="name" 
                label="Nome completo" 
              />
              <Input 
                name="email" 
                type="email" 
                label="E-mail" 
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="password" 
                type="password" 
                label="Senha" 
              />
              <Input
                name="password_confirmation" 
                type="password" 
                label="Confirmação da senha" 
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button 
                  type="submit" 
                  colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}