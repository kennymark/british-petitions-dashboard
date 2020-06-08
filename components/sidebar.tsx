import { Flex, Heading, Tab, TabList, Tabs, Icon } from "@chakra-ui/core";
import axios from 'axios';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect, useState } from 'react';
import useWindowSize from "../shared/hooks/useWindowSize";
import PetitionCard from "./sidebar/petition-card";
import PetitionSkeleton from "./skeletons/petition";



let renderCount = 0

function Sidebar(width) {
  const setAllPetitions = useStoreActions<any, any>(state => state.petition.setAllPetitions)
  const setPetition = useStoreActions<any, any>(state => state.petition.setCurrentPetition)
  const toggleSideBar = useStoreActions<any, any>(state => state.sidebar.toggleSideBar)
  const allPetitions = useStoreState(state => state.petition.allPetitions)
  const windowSize = useWindowSize()

  const [petitionState, setPetitionState] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAllPetitions()
  }, [setPetition])

  const fetchAllPetitions = async (state = 'open') => {
    if (state !== 'open') {
      setLoading(true)
      const { data: petitions } = await axios(`https://petition.parliament.uk/archived/petitions.json?state=${state}`)
      setAllPetitions(petitions.data)
      setLoading(false)
    }
    else {
      setLoading(true)
      const { data: petitions } = await axios(`https://petition.parliament.uk/petitions.json?state=${state}`)
      setAllPetitions(petitions.data)
      renderCount += 1
      if (renderCount == 1) {
        fetchPetitionById(petitions.data[0].id)
      }
      setLoading(false)
    }

  }

  const setCurrentPetition = async (id) => {
    if (windowSize.width < 800) {
      toggleSideBar(false)
    }
    await fetchPetitionById(id)
  }

  const fetchPetitionById = async (id: number) => {
    const { data } = await axios(`https://petition.parliament.uk/petitions/${id}.json`)
    setPetition(data)
  }

  const switchPetitionState = (index: number) => {
    if (index == 0) {
      fetchAllPetitions('open')
      setPetitionState(true)
    } else {
      fetchAllPetitions('published')
      setPetitionState(false)
    }
  }

  return (
    <Flex p={3} flexDirection='column' className='sidebar'>

      <Flex direction='row' justify={['space-around', 'center']} alignItems='center' mb={5}>
        <Heading fontSize='2xl' fontWeight='bold' color='green.500' >
          {petitionState ? 'Open ' : 'Archived '} Petitions
        </Heading>
        <Icon name="close" size="20px" color='green.400' display={['initial', 'none']} onClick={toggleSideBar} />
      </Flex>


      <Tabs variant="soft-rounded" variantColor="green" alignSelf='center' isFitted bg='gray.200' rounded='full' mb={5} onChange={switchPetitionState}>
        <TabList>
          <Tab minWidth={120} _selected={{ bg: 'white', border: '1px', borderColor: 'gray.100' }} _focus={{ outline: 'none' }}>OPENED</Tab>
          <Tab minWidth={120} _selected={{ bg: 'white', border: '1px', borderColor: 'gray.100' }} _focus={{ outline: 'none' }}>ARCHIVED</Tab>
        </TabList>
      </Tabs>

      {loading && <PetitionSkeleton count={8} />}

      {allPetitions && allPetitions.map(petition => (
        <PetitionCard key={petition.id} setCurrentPetition={setCurrentPetition} petition={petition} />
      ))}
    </Flex>
  )
}


export default Sidebar
