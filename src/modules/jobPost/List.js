import React, { useState } from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import MenuList from 'components/menuList';
import Dialog from 'components/tabledialog';
import TableRow from '@mui/material/TableRow';
import Pagination from 'components/pagination';
import { useNavigate } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import CircularProgress from '@mui/material/CircularProgress';
import { StyledTableCell, StyledTableRow, StyledStatus, StyledNoResultsFound, StyledHeading } from 'components/globaStyle';

const options = [
    { icon: '/images/view-icon.svg', text: 'View' },
    { icon: '/images/status-icon.svg', text: 'Change status' },
    { icon: '/images/delete-icon.svg', text: 'Delete' },
]

const Index = ({ data, loading, handleJobDelete, handleJobStatus }) => {
    const navigate = useNavigate()
    const [id, setId] = useState(null)
    const [page, setPage] = useState(1)
    const noResultsFound = data?.length === 0
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [dialogType, setDialogType] = useState(null)
    const [dialogOpen, setDialogOpen] = useState(false)

    const startIndex = (page - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    const paginatedData = data?.slice(startIndex, endIndex)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(1)
    }

    const handleTableMenu = (option, statusId, deleteId) => {
        if (option === 'View') {
            navigate('/admin/job-post/details')
        }
        else if (option === 'Change status') {
            setId(statusId)
            setDialogOpen(true)
            setDialogType('status')
        }

        else if (option === 'Delete') {
            setId(deleteId)
            setDialogOpen(true)
            setDialogType('delete')
        }
    }

    return (
        <React.Fragment>
            {dialogOpen && (
                <Dialog
                    open={dialogOpen}
                    dialogType={dialogType}
                    setOpen={setDialogOpen}
                    handleDelete={() => handleJobDelete(id)}
                    handleStatus={(status) => handleJobStatus(id, status)}
                />
            )}
            <TableContainer
                component={Paper}
                sx={{ borderRadius: '12px', border: '1px solid #E7E7E7', boxShadow: 'none' }}
            >
                <Table>
                    <TableHead sx={{ background: '#EFEFEF' }}>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Job title</StyledTableCell>
                            <StyledTableCell>Equipment type</StyledTableCell>
                            <StyledTableCell>Route type</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center" sx={{ borderBottom: 'none' }}>
                                    <div
                                        style={{
                                            height: '100vh',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <CircularProgress color="inherit" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : noResultsFound ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center" sx={{ borderBottom: 'none' }}>
                                    <StyledNoResultsFound>
                                        <div className='container'>
                                            <img src='/images/search-not-found.svg' alt='not-found' />
                                            <StyledHeading>Job not found</StyledHeading>
                                        </div>
                                    </StyledNoResultsFound>
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginatedData?.map((item, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell
                                        size="12px"
                                        weight="500"
                                        color="#2C2E3E"
                                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                    >
                                        {item.title}
                                    </StyledTableCell>
                                    <StyledTableCell>{item.title}</StyledTableCell>
                                    <StyledTableCell>{item.equipmentType}</StyledTableCell>
                                    <StyledTableCell>{item.routeType}</StyledTableCell>
                                    <StyledTableCell>
                                        <StyledStatus
                                            width={item.isActive ? '65px' : '82px'}
                                            color={item.isActive ? '#22C55E' : '#EF4444'}
                                            background={item.isActive === 'Active' ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)'}
                                        >
                                            {item.isActive ? 'Active' : 'In-active'}
                                        </StyledStatus>
                                    </StyledTableCell>
                                    <StyledTableCell align='center'>
                                        <MenuList options={options} handleTableMenu={handleTableMenu} statusId={item._id} deleteId={item._id} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {!noResultsFound && !loading && (
                <Pagination
                    page={page}
                    count={data?.length}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </React.Fragment>
    )
}

export default Index