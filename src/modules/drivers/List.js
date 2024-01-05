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

const Index = ({ data, loading, handleDriverDelete, handleDriverStatus }) => {
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
    // const count = Number.isInteger(data?.length) ? data.length : 0

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(1)
    }

    const handleTableMenu = (option, id) => {
        if (option === 'View') {
            navigate('/admin/drivers/details')
        }
        else if (option === 'Change status') {
            setId(id)
            setDialogOpen(true)
            setDialogType('status')
        }

        else if (option === 'Delete') {
            setId(id)
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
                    handleDelete={() => handleDriverDelete(id)}
                    handleStatus={(status) => handleDriverStatus(id, status)}
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
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Gender</StyledTableCell>
                            <StyledTableCell>Experience</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Location</StyledTableCell>
                            <StyledTableCell>Employment status</StyledTableCell>
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
                                            <StyledHeading>Driver not found</StyledHeading>
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
                                    >
                                        {`${item.firstName} ${item.lastName}`}
                                    </StyledTableCell>
                                    <StyledTableCell>{item.email}</StyledTableCell>
                                    <StyledTableCell>{item.gender}</StyledTableCell>
                                    <StyledTableCell>{item.drivingExperience}</StyledTableCell>
                                    <StyledTableCell>
                                        <StyledStatus
                                            width={item.jobStatus === 'Active' ? '65px' : '82px'}
                                            color={item.jobStatus === 'Active' ? '#22C55E' : '#EF4444'}
                                            background={item.jobStatus === 'Active' ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)'}
                                        >
                                            {item.jobStatus}
                                        </StyledStatus>
                                    </StyledTableCell>
                                    <StyledTableCell>{item.address}</StyledTableCell>
                                    <StyledTableCell>
                                        <StyledStatus
                                            width={item.employmentStatus === 'Employed' ? '89px' : '107px'}
                                            color={item.employmentStatus === 'Employed' ? '#22C55E' : '#EF4444'}
                                            background={item.employmentStatus === 'Employed' ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)'}
                                        >
                                            {item.employmentStatus}
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