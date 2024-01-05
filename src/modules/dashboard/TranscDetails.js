import React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import { StyledTableCell, StyledTableRow } from 'components/globaStyle';

function createData(id, name, date, amount) {
    return { id, name, date, amount };
}

const rows = [
    createData('10012003598621', 'John Doe', '04/05/2022', '€100'),
    createData('10012003598621', 'John Doe', '04/05/2022', '€150'),
    createData('10012003598621', 'John Doe', '04/05/2022', '€300'),
    createData('10012003598621', 'John Doe', '04/05/2022', '€300'),
    createData('10012003598621', 'John Doe', '04/05/2022', '€150'),
    createData('10012003598621', 'John Doe', '04/05/2022', '€100'),
    createData('10012003598621', 'John Doe', '04/05/2022', '€100'),
    createData('10012003598621', 'John Doe', '04/05/2022', '€300'),
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
                        <StyledTableCell color="#374151">Transaction ID</StyledTableCell>
                        <StyledTableCell color="#374151">Name</StyledTableCell>
                        <StyledTableCell color="#374151">Date</StyledTableCell>
                        <StyledTableCell color="#374151">Amount</StyledTableCell>
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
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                            <StyledTableCell>{row.amount}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Index