import React, { useState } from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Pagination from 'components/pagination';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { StyledTableCell, StyledTableRow, StyledNoResultsFound, StyledHeading } from 'components/globaStyle';

const Index = ({ data }) => {
    const [page, setPage] = useState(1)
    const noResultsFound = data.length === 0
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const startIndex = (page - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    const paginatedData = data.slice(startIndex, endIndex)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(1)
    }

    return (
        <React.Fragment>
            <TableContainer
                component={Paper}
                sx={{ borderRadius: '12px', border: '1px solid #E7E7E7', boxShadow: 'none' }}
            >
                <Table>
                    <TableHead sx={{ background: '#EFEFEF' }}>
                        <TableRow>
                            <StyledTableCell>Company name</StyledTableCell>
                            <StyledTableCell>Plan type</StyledTableCell>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell>Time</StyledTableCell>
                            <StyledTableCell>Transaction amount</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {noResultsFound ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center" sx={{ borderBottom: 'none' }}>
                                    <StyledNoResultsFound>
                                        <div className='container'>
                                            <img src='/images/search-not-found.svg' alt='not-found' />
                                            <StyledHeading>Company not found</StyledHeading>
                                        </div>
                                    </StyledNoResultsFound>
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginatedData.map((item, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell
                                        size="12px"
                                        weight="500"
                                        color="#2C2E3E"
                                    >
                                        {item.name}
                                    </StyledTableCell>
                                    <StyledTableCell>{item.planType}</StyledTableCell>
                                    <StyledTableCell>{item.date}</StyledTableCell>
                                    <StyledTableCell>{item.time}</StyledTableCell>
                                    <StyledTableCell>{item.amount}</StyledTableCell>
                                </StyledTableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {!noResultsFound && (
                <Pagination
                    page={page}
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </React.Fragment>
    )
}

export default Index