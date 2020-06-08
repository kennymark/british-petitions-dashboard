import { Button, Drawer, DrawerBody, DrawerContent, Flex } from '@chakra-ui/core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
import Sidebar from '../sidebar';


function MobileNav() {
  const isSideBarOpen = useStoreState(state => state.sidebar.isOn)
  const toggleSideBar = useStoreActions<any, any>(state => state.sidebar.toggleSideBar)

  return (
    <>
      <Flex display={['flex', null, 'flex', 'none']} borderBottom='1px' borderBottomColor='gray.200' mb={5} alignItems='center' p={3}>
        <Button bg="green.100" size="md" _focus={{ outline: 'none' }} onClick={toggleSideBar} variant='solid'>
          View Petitions
        </Button>
      </Flex>

      <Drawer isOpen={isSideBarOpen} placement="top" size='full' scrollBehavior='inside' isFullHeight >
        <DrawerContent>
          <DrawerBody><Sidebar /></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNav
