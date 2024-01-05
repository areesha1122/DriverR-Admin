import React, { useCallback, useEffect, useState } from 'react';
import List from './List';
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

const employmentStatus = [
    { value: 'employed', text: 'Employed' },
    { value: 'unemployed', text: 'Unemployed' },
]

const gender = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' },
]

const experience = [
    { value: '1', text: '0-1 year' },
    { value: '2', text: '1-2 years' },
    { value: '3', text: '2-3 years' },
    { value: '4', text: '3-4 years' },
    { value: '5', text: '+5 years' },
]

function createData(id, name, email, gender, experience, jobStatus, location, employmentStatus) {
    return { id, name, email, gender, experience, jobStatus, location, employmentStatus }
}

const rows = [
    createData(1, 'John Doe', 'example@gmail.com', 'Male', '0-1 Years', 'Active', '456 Forth ave, Herndon', 'Employed'),
    createData(2, 'John Doe', 'example@gmail.com', 'Female', '1-2 Years', 'In-active', '456 Forth ave, Herndon', 'Unemployed'),
    createData(3, 'John Doe', 'example@gmail.com', 'Male', '2-3 Years', 'Active', '456 Forth ave, Herndon', 'Employed'),
    createData(4, 'John Doe', 'example@gmail.com', 'Female', '+5 Years', 'In-active', '456 Forth ave, Herndon', 'Unemployed'),
    createData(5, 'John Doe', 'example@gmail.com', 'Male', '0-1 Years', 'Active', '456 Forth ave, Herndon', 'Employed'),
    createData(6, 'John Doe', 'example@gmail.com', 'Female', '1-2 Years', 'In-active', '456 Forth ave, Herndon', 'Unemployed'),
    createData(7, 'John Doe', 'example@gmail.com', 'Male', '2-3 Years', 'Active', '456 Forth ave, Herndon', 'Employed'),
    createData(8, 'John Doe', 'example@gmail.com', 'Female', '+5 Years', 'In-active', '456 Forth ave, Herndon', 'Unemployed'),
    createData(9, 'John Doe', 'example@gmail.com', 'Male', '0-1 Years', 'Active', '456 Forth ave, Herndon', 'Employed'),
    createData(10, 'John Doe', 'example@gmail.com', 'Female', '1-2 Years', 'In-active', '456 Forth ave, Herndon', 'Unemployed'),
    createData(11, 'John Doe', 'example@gmail.com', 'Male', '2-3 Years', 'Active', '456 Forth ave, Herndon', 'Employed'),
    createData(12, 'John Doe', 'example@gmail.com', 'Female', '+5 Years', 'In-active', '456 Forth ave, Herndon', 'Unemployed'),
    createData(13, 'John Doe', 'example@gmail.com', 'Male', '0-1 Years', 'Active', '456 Forth ave, Herndon', 'Employed'),
    createData(14, 'John Doe', 'example@gmail.com', 'Female', '1-2 Years', 'In-active', '456 Forth ave, Herndon', 'Unemployed'),
]

const Index = () => {
    const api = new ApiClient()
    const [drivers, setDrivers] = useState(null)
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState({
        status: '',
        gender: '',
        experience: '',
        employmentStatus: '',
    })

    const filteredDrivers = drivers?.filter((item) => {
        const fullName = `${item.firstName} ${item.lastName}`
        // const statusMatch = filter.status === '' || item.status.toLowerCase() === filter.status
        const employmentMatch = !filter.employmentStatus || item.employmentStatus.toLowerCase() === filter.employmentStatus
        const genderMatch = !filter.gender || item.gender.toLowerCase() === filter.gender
        const experienceMatch = !filter.experience || item.drivingExperience === filter.experience
        const searchMatch = !searchQuery || fullName.toLowerCase().includes(searchQuery.toLowerCase())
        return employmentMatch && genderMatch && experienceMatch && searchMatch
    })

    const handleSearchQueryChange = (value) => setSearchQuery(value.trim())

    const handleFilterChange = (name, value) => {
        setFilter({ ...filter, [name]: value })
    }

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await api.get('/super-admin/view-all-drivers')
            setDrivers(response.data.result.data)
            setLoading(false)
        }
        catch (error) {
            setLoading(true)
            console.log(error)
            setLoading(false)
        }
    }, [])

    const handleDriverDelete = async (id) => {
        const data = { driverId: id }
        try {
            await api.post('/super-admin/remove-job', data)
            getData()
        }
        catch (error) {
            SweetAlert('error', 'Error!', `${error.message}`)
        }
    }

    const handleDriverStatus = (id, newStatus) => {
        if (Object.values(filter).some(val => val !== '')) {
            alert('Clear the filter first')
        }
        else {
            const updatedData = filteredDrivers.map((job) => {
                if (job.id === id) {
                    return {
                        ...job,
                        status: newStatus,
                    }
                }
                return job
            })
            setDrivers(updatedData)
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
                        <StyledTableHeading>Registered drivers</StyledTableHeading>
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
                                name="employmentStatus"
                                options={employmentStatus}
                                defaultValue="Employment status"
                                handleFilterChange={handleFilterChange}
                            />
                            <Dropdown
                                name="gender"
                                options={gender}
                                defaultValue="Gender"
                                handleFilterChange={handleFilterChange}
                            />
                            <Dropdown
                                name="experience"
                                options={experience}
                                defaultValue="Experience"
                                handleFilterChange={handleFilterChange}
                            />
                        </div>
                        <TableSearchHandler handleSearchQueryChange={handleSearchQueryChange} />
                    </div>
                    <List data={filteredDrivers} loading={loading} handleDriverDelete={handleDriverDelete} handleDriverStatus={handleDriverStatus} />
                </div>
            </ContentContainer>
        </Content>
    )
}

export default Index