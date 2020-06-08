import React from 'react'
import { Box, Text } from '@chakra-ui/core'


function Footer() {
  return (
    <Box background='black' minHeight={100} display='flex' justifyContent='center' alignItems='center' w='100%'>
      <Text color='gray.500'>Copyright © 2020 Kenny Mark</Text>
    </Box>
  )
}

export default Footer

