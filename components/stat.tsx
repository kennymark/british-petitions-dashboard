import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/core'
import React from 'react'


interface ParsedStatProps {
  title: string;
  number: string | number;
  extra?: React.ReactNode;
  children?: any,
  flag?: any;

}


function ParsedStat({ title = '', number = '', extra, flag, children }: ParsedStatProps) {
  return (
    <Stat border='1px' borderColor='gray.200' minHeight={120} rounded='lg' display='flex'
      flexDirection='column' alignItems='center' justifyContent='space-evenly' m={2} >
      <StatLabel textAlign='center' color='gray.600'>{title}</StatLabel>
      <StatNumber fontWeight='bold' color='black' textAlign='center'>{number}</StatNumber>
      {extra && <StatHelpText textAlign='center' display='flex' alignItems='center'>{extra} <span style={{ paddingLeft: 20 }}>{flag}</span></StatHelpText>}
      {children}
    </Stat >
  )
}

export function ParsedStatWithoutBorder({ title = '', number = '', extra, flag, }: ParsedStatProps) {
  return (
    <Stat mb={20} minHeight={130} rounded='lg' display='flex' flexDirection='column' alignItems='center' justifyContent='center' m={2}>
      <StatLabel textAlign='center' color='gray.600'>{title}</StatLabel>
      <StatNumber fontWeight='bold' color='black' textAlign='center'>{number}</StatNumber>
      {extra && <StatHelpText textAlign='center'>{extra} {flag}</StatHelpText>}
    </Stat>
  )
}

export default ParsedStat
