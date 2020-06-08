import { Box, Heading, Input, SimpleGrid } from '@chakra-ui/core';
import { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import Flag from 'react-world-flags';



const FilterComponent = ({ filterText, onFilter, type = 'countries' }) => (
  <Input variant="filled" placeholder={`Search ${type}`}
    focusBorderColor="gray.100" rounded='lg' value={filterText} onChange={onFilter} />
);


function TableView({ data }) {

  const { signatures_by_country, signatures_by_constituency } = data

  const [countryText, setFilterText] = useState('');
  const [constituencyText, setConstituencyFilter] = useState('')

  const filterCountries = signatures_by_country.filter(item => item?.name.toLowerCase().includes(countryText.toLowerCase()));
  const filterConstituencies = signatures_by_constituency.filter(item => item?.name.toLowerCase().includes(constituencyText.toLowerCase()));


  const nameStyle = { color: '#202124', fontSize: '14px', fontWeight: 500 }
  const totalStyle = { color: 'rgba(0,0,0,.54)' }
  const paginationOptions = { rowsPerPageText: '' };
  const customStyles = {
    rows: { style: { minHeight: '62px', fontSize: 14 } },
    headCells: { style: { fontWeight: 'bold', fontSize: 14 }, },
  };


  const countryCols = [
    { name: 'Name', selector: 'name', sortable: true, style: nameStyle, },
    { name: 'Total', selector: 'signature_count', sortable: true, style: totalStyle, },
    {
      name: 'Flag',
      selector: 'code',
      cell: row => <Flag code={row.code} height='30' width='30' style={{ borderRadius: '300px', border: '1px solid #f7f7f7', opacity: 0.7 }} />
    }]

  const constituencyCols = [
    { name: 'Name', selector: 'name', sortable: true, style: nameStyle },
    { name: 'Total', selector: 'signature_count', sortable: true, style: totalStyle }
  ]



  const subHeaderComponentMemo = useMemo(() => {
    return <FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={countryText} />;
  }, [countryText]);


  const subHeaderCustituencyMemo = useMemo(() => {
    return <FilterComponent onFilter={e => setConstituencyFilter(e.target.value)}
      filterText={constituencyText} type='constituencies' />;
  }, [constituencyText]);

  return (
    <SimpleGrid spacing={30} columns={[1, 1, 1, 2]}>
      <Box mt={10}>
        <Heading size='md' textAlign='center' mb={5}>Countries</Heading>

        <DataTable columns={countryCols}
          data={filterCountries}
          pagination
          responsive
          noHeader
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          customStyles={customStyles}
          paginationComponentOptions={paginationOptions} />
      </Box>

      <Box mt={10}>
        <Heading size='md' textAlign='center' mb={5}>Constituencies</Heading>

        <DataTable
          columns={constituencyCols}
          data={filterConstituencies}
          pagination
          responsive
          noHeader
          subHeader
          subHeaderComponent={subHeaderCustituencyMemo}
          customStyles={customStyles}
          paginationComponentOptions={paginationOptions} />
      </Box>


    </SimpleGrid >
  )
}

export default TableView
