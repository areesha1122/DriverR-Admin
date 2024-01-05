import React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import { StyledTableCell, StyledTableRow } from 'components/globaStyle';

function createData(company, jobTitle, jobType, date) {
    return { company, jobTitle, jobType, date };
}

const rows = [
    createData('Fedex', 'Fedex truck driver', 'Full time', '04/05/2022'),
    createData('Perma', 'Perma truck driver', 'Part time', '04/05/2022'),
    createData('Fedex', 'Fedex truck driver', 'Full time', '04/05/2022'),
    createData('Perma', 'Fedex truck driver', 'Part time', '04/05/2022'),
    createData('Fedex', 'Fedex truck driver', 'Full time', '04/05/2022'),
    createData('Perma', 'Fedex truck driver', 'Part time', '04/05/2022'),
    createData('Fedex', 'Fedex truck driver', 'Full time', '04/05/2022'),
    createData('Perma', 'Fedex truck driver', 'Part time', '04/05/2022'),
];

const Index = () => {

    return (
        <TableContainer
            component={Paper}
            sx={{ borderRadius: '12px', border: '1px solid #E7E7E7', boxShadow: 'none' }}
        >
            <Table>
                <TableHead sx={{ background: '#EFEFEF' }}>
                    <TableRow>
                        <StyledTableCell color="#374151">Company</StyledTableCell>
                        <StyledTableCell color="#374151">Job title</StyledTableCell>
                        <StyledTableCell color="#374151">Job type</StyledTableCell>
                        <StyledTableCell color="#374151">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell
                                size="12px"
                                weight="500"
                                color="#2C2E3E"
                            >
                                {row.company}
                            </StyledTableCell>
                            <StyledTableCell>{row.jobTitle}</StyledTableCell>
                            <StyledTableCell>{row.jobType}</StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Index