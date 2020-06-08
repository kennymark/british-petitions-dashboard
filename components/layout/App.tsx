import React, { useEffect } from 'react'
import { Flex, Box, useToast } from '@chakra-ui/core'
import Sidebar from '../sidebar'
import Dashboard from '../dashboard'
import Footer from './footer'
import { useIsOnline } from '../../shared/hooks/useIsOnline'
import ReactGA from 'react-ga'



function Layout() {
  const isOnline = useIsOnline()
  const toast = useToast()

  useEffect(() => {
    toggleOfflineMessage()
    ReactGA.initialize('UA-68267074-4');
    return () => { }

  }, [isOnline.isOnline])

  const toggleOfflineMessage = () => {
    if (isOnline.isOffline) {
      toast({
        title: "Application is offline.",
        description: "Please check your connection and try again.",
        status: "error",
        position: 'top-right',
        duration: 9000,
        isClosable: true,
        variant: 'subtle'
      })
    }
  }

  return (
    <>
      <Flex>
        <Box
          width={['100%', '100%', 450]}
          display={['none', 'none', 'none', 'block']}
          maxHeight='100vh'
          bg='white'
          zIndex={200}
          position={['relative', 'relative', 'fixed']}
          overflowY='auto'
          borderRight='1px'
          borderColor='gray.200'>
          <Sidebar />
        </Box>

        <Flex
          minH='100vh'
          py={[0, null, 5, 20]}
          pb={[20, null]}
          px={[2, 20, 20, 200]}
          justifySelf='center'
          position='relative'
          left={[0, 0, 0, 450]}
          flexDirection='column'
          maxWidth={['', '', '', 'calc(100% - 450px)']}
        >
          <Dashboard />
        </Flex>


      </Flex>
      <Footer />

    </>
  )
}

export default Layout
