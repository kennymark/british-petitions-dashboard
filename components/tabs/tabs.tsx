import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/core'
import TableView from './table-view'
import StatView from './stat-view'
import RegionChart from './regional-chart'
import MapChart from './map-view'



function AllTabs({ data }) {
  const focusProps = { outline: 0, fontWeight: 'bold' }
  return (
    <Tabs variantColor='green'>

      <TabList>
        <Tab _focus={focusProps}>Table View</Tab>
        <Tab _focus={focusProps}>Statistics</Tab>
        <Tab _focus={focusProps}>Regional Chart</Tab>
        {/* <Tab _focus={focusProps}>Constituency Map</Tab> */}
      </TabList>

      <TabPanels>
        <TabPanel ><TableView data={data} /></TabPanel>
        <TabPanel><StatView data={data} /></TabPanel>
        <TabPanel><RegionChart data={data.signatures_by_region} /></TabPanel>
        <TabPanel><MapChart data={data.signatures_by_constituency} /></TabPanel>
      </TabPanels>

    </Tabs>
  )
}

export default AllTabs
