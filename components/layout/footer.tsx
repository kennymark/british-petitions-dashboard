import { Flex, Text, PseudoBox } from '@chakra-ui/core'
import React from 'react'


function Footer() {
  return (
    <Flex background='black' minHeight={100} flexDirection='column' justifyContent='center' alignItems='center' w='100%'>
      <Text color='gray.500' fontWeight='bold' letterSpacing={1.3}>Built with ❤️ by <PseudoBox as='a' _hover={{ color: 'green.400' }}>
        <a href="https://kennymark.co.uk" target='_blank'>Kenny Mark</a>
      </PseudoBox>
      </Text>
      <Text color='gray.500'>Copyright © 2020</Text>
    </Flex>
  )
}

export default Footer

