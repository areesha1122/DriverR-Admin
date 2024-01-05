import React, { useCallback, useEffect, useState } from 'react';
import List from './List';
import axios from 'axios';
import ApiClient from 'api';
import { Layout } from 'antd';
import { ContentContainer } from './style';
import SweetAlert from 'components/sweetAlert';
import Dropdown from 'components/tabledropdown';
import { StyledTableHeading } from 'components/globaStyle';
import TableSearchHandler from 'components/tableSearchField';
const { Content } = Layout;

const status = [
    { value: true, text: 'Active' },
    { value: false, text: 'Inactive' },
]

function createData(id, name, location, status) {
    return { id, name, location, status }
}

const rows = [
    createData(1, 'Fedex', '456 Forth ave, Herndon, Newyork, USA', 'Active'),
    createData(2, 'Perma', '456 Forth ave, Herndon, Newyork, USA', 'In-active'),
    createData(3, 'Fedex', '456 Forth ave, Herndon, Newyork, USA', 'Active'),
    createData(4, 'Perma', '456 Forth ave, Herndon, Newyork, USA', 'In-active'),
    createData(5, 'Fedex', '456 Forth ave, Herndon, Newyork, USA', 'Active'),
    createData(6, 'Perma', '456 Forth ave, Herndon, Newyork, USA', 'In-active'),
    createData(7, 'Fedex', '456 Forth ave, Herndon, Newyork, USA', 'Active'),
    createData(8, 'Perma', '456 Forth ave, Herndon, Newyork, USA', 'In-active'),
    createData(9, 'Fedex', '456 Forth ave, Herndon, Newyork, USA', 'Active'),
    createData(10, 'Perma', '456 Forth ave, Herndon, Newyork, USA', 'In-active'),
    createData(11, 'Fedex', '456 Forth ave, Herndon, Newyork, USA', 'Active'),
    createData(12, 'Perma', '456 Forth ave, Herndon, Newyork, USA', 'In-active'),
    createData(13, 'Fedex', '456 Forth ave, Herndon, Newyork, USA', 'Active'),
    createData(14, 'Perma', '456 Forth ave, Herndon, Newyork, USA', 'In-active'),
]

const Index = () => {
    const api = new ApiClient()
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('authToken')
    const [companies, setCompanies] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState({
        status: '',
        location: '',
    })

    console.log(companies)

    const filteredCompanies = companies?.filter((item) => {
        const statusMatch = filter.status === '' || item?.userId?.isActive === filter.status
        // const statusMatch = !filter.status || item.status.toLowerCase() === filter.status
        const searchMatch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase())
        return statusMatch && searchMatch
        // return searchMatch 
    })

    const handleSearchQueryChange = (value) => setSearchQuery(value.trim())

    const handleFilterChange = (name, value) => {
        setFilter({ ...filter, [name]: value })
    }

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await api.get('/super-admin/view-all-companies')
            setCompanies(response.data.result.data)
            setLoading(false)
        }
        catch (error) {
            setLoading(true)
            console.log(error)
            setLoading(false)
        }
    }, [])

    const handleCompanyDelete = async (id) => {
        axios({
            method: 'DELETE',
            url: 'https://dev.tirminator.com/super-admin/remove-company',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: {
                companyId: id,
            }
        })
            .then(response => {
                window.location.href = '/admin/companies'
            })
            .catch(error => {
                console.error(error);
            });
        // const response = await axios.delete('https://dev.tirminator.com/super-admin/remove-company', { headers: { token } }, { id: id })
        // window.location.href = '/admin/companies'
        // console.log(response)
        // setCompanies(companies.filter(row => row.id !== id))
    }

    const handleCompanyStatus = async (id, newStatus) => {
        const data = { id: id, isActive: newStatus === 'Active' ? true : false }
        try {
            await api.post('/super-admin/active-inactive-company', data)
            getData()
        }
        catch (error) {
            SweetAlert('error', 'Error!', `${error.message}`)
        }
    }

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <Content>
            <ContentContainer>
                <div className='table'>
                    <div className='table_heading'>
                        <StyledTableHeading>Registered companies</StyledTableHeading>
                    </div>
                    <div className='table_control-elements'>
                        <div className='table_control-elements_filterbox'>
                            <Dropdown
                                name="status"
                                options={status}
                                defaultValue="Status"
                                handleFilterChange={handleFilterChange}
                            />
                            <Dropdown
                                options={status}
                                name="employmentStatus"
                                defaultValue="Location"
                                handleFilterChange={handleFilterChange}
                            />
                        </div>
                        <TableSearchHandler handleSearchQueryChange={handleSearchQueryChange} />
                    </div>
                    <List data={filteredCompanies} loading={loading} handleCompanyDelete={handleCompanyDelete} handleCompanyStatus={handleCompanyStatus} />
                </div>
            </ContentContainer>
        </Content>
    )
}

export default Index