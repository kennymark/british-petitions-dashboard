import React from 'react'
import { Skeleton, Box } from '@chakra-ui/core'

function PetitionSkeleton({ count = 1 }) {
  const arr = Array.from({ length: count })
  return (
    <> {
      arr.map((item: any) =>
        <Box rounded='lg' border='1px' borderColor='gray.100' p={3} mb={5} key={item}>
          <Skeleton height="20px" my="5px" />
          <Skeleton height="15px" my="5px" mb={3} w={340} />
          <Skeleton height="10px" my="5px" w={360} />
          <Skeleton height="10px" my="5px" w={200} />
        </Box>)
    }

    </>
  )
}

export default PetitionSkeleton
