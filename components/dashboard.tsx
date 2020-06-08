import { Heading, Icon, SimpleGrid, Spinner, Text, Tooltip } from '@chakra-ui/core'
import { useStoreState } from 'easy-peasy'
import moment from 'moment/moment'
import { Fragment, useEffect, useState } from 'react'
import GovtResponse from './govt-response'
import SEO from './SEO'
import { ParsedStatWithoutBorder } from './stat'
import AllTabs from './tabs/tabs'
import MobileNav from './ui/mobile-nav'



function Dashboard() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const currentPetition = useStoreState(state => state.petition.currentPetition)

  useEffect(() => {
    setLoading(true)
    setData(currentPetition?.data?.attributes)
    setLoading(false)
  }, [currentPetition])

  function parseLink(): string {
    return currentPetition?.links?.self.replace(/\.json/, '')
  }

  return (
    <>
      <SEO />
      {loading && <Spinner size='xl' color='green.100' />}
      {data &&
        <Fragment>
          <MobileNav />
          <Heading>
            {data.action}
            <Tooltip label="Visit original url" rounded='lg' bg='gray.600' aria-label='visit url'>
              <Icon name="external-link" color='green.500' size='25px' ml={5} cursor='pointer' onClick={() => open(parseLink())} />
            </Tooltip>
          </Heading>

          <GovtResponse data={data} />


          <Text fontSize='lg' color='gray.600'>{data.additional_details || data.background}</Text>

          <SimpleGrid px={2} my={50} columns={[1, 1, 3]} borderColor='gray.200' rounded='lg' bg='gray.50'>
            <ParsedStatWithoutBorder title="Signatures" number={parseInt(data?.signature_count, 0).toLocaleString()} />
            <ParsedStatWithoutBorder title="Created" number={moment(data?.created_at).format('LL')} />
            <ParsedStatWithoutBorder title="Deadline" number={moment(data?.opened_at).format('LL')} />
          </SimpleGrid>

          <AllTabs data={data} />

        </Fragment>
      }

    </>
  )

}

export default Dashboard
