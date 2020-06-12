import { Flex, Tag, TagIcon, TagLabel, Text } from '@chakra-ui/core'
import SimpleGrid from '@chakra-ui/core/dist/SimpleGrid'
import _ from 'lodash'
import moment from 'moment'
import React from 'react'
import GovtResponseModal from './ui/govt-response-modal'


function GovtResponse({ data }) {

  return (
    <>
      {data?.government_response &&
        <SimpleGrid columns={[1, 2, 3]} my={5} border='1px' borderColor='green.50' rounded='lg' alignItems='center' py={3} bg='green.50'>

          <Flex flexDirection='column' justifyContent='center' alignItems='center' my={[5, 2]}>
            <Text textAlign='center' mb={2} color='green.800'>State </Text>
            <Tag variantColor="green" w={data?.state !== 'open' ? '100' : '90'}>
              <TagLabel>{_.upperFirst(data?.state)}</TagLabel>
              <TagIcon icon={data?.state !== 'open' ? 'lock' : 'unlock'} color='green.900' />
            </Tag>
          </Flex>

          <Flex flexDirection='column' justifyContent='center' alignItems='center' my={[5, 2]}>
            <Text textAlign='center' mb={2} color='green.800'>Govt Responded On </Text>
            <Text ml='4px' color='green.500' fontWeight='bold' textAlign='center'>{moment(data?.government_response.responded_on).format("LL")}</Text>
            <GovtResponseModal body={data.government_response.details} />
          </Flex>

          <Flex flexDirection='column' my={[5, 2]}>
            <Text textAlign='center' mb={2} color='green.800'>Scheduled Debate Date </Text>
            <Text ml='4px' color='green.500' fontWeight='bold' textAlign='center'>
              {data?.scheduled_debate_date ? moment(data?.government_response.responded_on).format("LL") : 'Not debated'}
            </Text>
          </Flex>
        </SimpleGrid>

      }

    </>
  )
}

export default GovtResponse
