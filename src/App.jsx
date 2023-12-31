import { Box, Container, Flex } from '@chakra-ui/react'

export const App = () => {
  return (
    <Box bg="brand.500" h="100vh">
      <Container maxW="container.lg" h="100%">
        <Flex direction="row" align="center" justify="center" h="100%">
          <h1>hello world</h1>
        </Flex>
      </Container>
    </Box>
  )
}
