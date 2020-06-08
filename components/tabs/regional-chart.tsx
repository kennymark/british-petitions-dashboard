import { Box, Text, Heading } from '@chakra-ui/core';
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Leyenda = () => <Heading size='md'> Total Votes Per Region</Heading>

const Tip = () => <Box rounded='lg' p={3}> </Box>

function RegionChart({ data }) {

  return (
    <Box my={10}>
      <ResponsiveContainer width='100%' height={550}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis name='hey' />
          <Tooltip cursor={false} />
          <Legend formatter={(name) => <Leyenda />} />
          <Bar dataKey="signature_count" fill="#38a169" />
        </BarChart>
      </ResponsiveContainer>

    </Box>
  )
}

export default RegionChart
