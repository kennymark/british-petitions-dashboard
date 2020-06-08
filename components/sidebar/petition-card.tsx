import React from 'react'
import { PseudoBox, Heading, Flex, Text } from '@chakra-ui/core'
import moment from 'moment'

function PetitionCard({ petition, setCurrentPetition }) {
  return (
    <PseudoBox key={petition.id} p='3' my={3}
      rounded='lg'
      border='1px'
      borderColor='gray.100'

      _hover={{ bg: "green.50", color: 'green.800', cursor: 'pointer' }}
      onClick={() => setCurrentPetition(petition.id)}
    >
      <Heading fontSize='xl' color='gray.600'>{petition.attributes.action}</Heading>

      <Text color="gray.600" isTruncated fontSize='md' py={3}>
        {petition.attributes.background}
      </Text>

      <Flex justifyContent='space-between'>
        <Text fontSize='xs' color='green.500' fontWeight='bold'>{moment(petition.attributes.created_at).format('LL')}</Text>

        <Text color="gray.500" fontSize='xs' fontWeight='bold'>
          {petition.attributes.signature_count.toLocaleString()}
        </Text>
      </Flex>
    </PseudoBox>
  )
}

export default PetitionCard
