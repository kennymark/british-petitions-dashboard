import { SimpleGrid, Progress } from '@chakra-ui/core';
import _ from 'lodash';
import Flag from 'react-world-flags';
import { percent } from '../../utils/percent';
import ParsedStat from '../stat';


function StatView({ data }) {

  const { signature_count, signatures_by_country, signatures_by_constituency, } = data

  let ukVotes = 0
  signature_count ? ukVotes = _.find(signatures_by_country, { code: 'GB' }).signature_count : 0
  const maxByCountry = _.maxBy(signatures_by_country, 'signature_count')
  const maxByConstituency = _.maxBy(signatures_by_constituency, 'signature_count')
  const minByCountry = _.minBy(signatures_by_country, 'signature_count')
  const minByConstituency = _.minBy(signatures_by_constituency, 'signature_count')
  const percentage = parseInt(percent(ukVotes, signature_count).toFixed(1))


  return (
    <>
      <SimpleGrid columns={[1, 2, 2]} my={50}>

        <ParsedStat title='Total countries voting' number={_.size(signatures_by_country)} />

        <ParsedStat title='Total constituencies voting' number={_.size(signatures_by_constituency)} />

        <ParsedStat title='Total UK Votes' number={ukVotes.toLocaleString()} >
          <Progress value={percentage} rounded='full' />
        </ParsedStat>

        <ParsedStat title='Rest of the world' number={(signature_count - ukVotes).toLocaleString()}
          extra={<Progress value={Number((100 - percentage).toFixed(1))} />} />
      </SimpleGrid>


      <SimpleGrid columns={[1, 2, 2]} mt={50} >

        <ParsedStat title='Max Votes by Country' number={maxByCountry.signature_count.toLocaleString()}
          extra={maxByCountry.name}
          flag={<Flag code={maxByCountry.code} height='26' width='30' />} />

        <ParsedStat title='Least Votes by Country' number={maxByCountry.signature_count.toLocaleString()}
          extra={minByCountry.name}
          flag={<Flag code={minByCountry.code} height='26' width='30' />} />

        <ParsedStat title='Max Vote by Constituency' number={maxByConstituency.signature_count.toLocaleString()}
          extra={maxByConstituency.name} />

        <ParsedStat title='Least Votes by Constituency' number={minByConstituency.signature_count.toLocaleString()}
          extra={minByConstituency.name} />

      </SimpleGrid>


      <SimpleGrid columns={[1, 1, 2]} mt={50}>

        <ParsedStat title='Mean Vote by Country' number={_.meanBy(signatures_by_country, 'signature_count').toFixed(2).toLocaleString()} />
        <ParsedStat title='Mean Vote by Constituency' number={_.meanBy(signatures_by_constituency, 'signature_count').toFixed(2)} />

      </SimpleGrid>

    </>
  )
}

export default StatView
