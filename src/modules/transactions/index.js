import React, { useState } from 'react';
import List from './List';
import { Layout } from 'antd';
import { ContentContainer } from './style';
import Dropdown from 'components/tabledropdown';
import { StyledTableHeading } from 'components/globaStyle';
import TableSearchHandler from 'components/tableSearchField';
const { Content } = Layout;

const jobStatus = [
    { value: 'active', text: 'Active' },
    { value: 'in-active', text: 'Inactive' },
]

function createData(id, name, planType, date, time, amount) {
    return { id, name, planType, date, time, amount }
}

const rows = [
    createData(1, 'Fedex', 'Standard', '14 May 2022', '05:30 PM', '€200'),
    createData(2, 'Fedex', 'Premium', '14 May 2022', '05:30 PM', '€200'),
    createData(3, 'Fedex', 'Standard', '14 May 2022', '05:30 PM', '€200'),
    createData(4, 'Fedex', 'Premium', '14 May 2022', '05:30 PM', '€200'),
    createData(5, 'Fedex', 'Standard', '14 May 2022', '05:30 PM', '€200'),
    createData(6, 'Fedex', 'Premium', '14 May 2022', '05:30 PM', '€200'),
    createData(7, 'Fedex', 'Standard', '14 May 2022', '05:30 PM', '€200'),
    createData(8, 'Fedex', 'Premium', '14 May 2022', '05:30 PM', '€200'),
    createData(9, 'Fedex', 'Standard', '14 May 2022', '05:30 PM', '€200'),
    createData(10, 'Fedex', 'Premium', '14 May 2022', '05:30 PM', '€200'),
    createData(11, 'Fedex', 'Standard', '14 May 2022', '05:30 PM', '€200'),
    createData(12, 'Fedex', 'Premium', '14 May 2022', '05:30 PM', '€200'),
]

const Index = () => {
    // const [jobs, setJobs] = useState(rows)
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState({
        date: '',
        time: '',
    })

    // const filteredJobs = jobs.filter((job) => {
    //     const statusMatch = !filter.jobStatus || job.status.toLowerCase() === filter.jobStatus
    //     const searchMatch = !searchQuery || job.name.toLowerCase().includes(searchQuery.toLowerCase())
    //     return statusMatch && searchMatch
    // })

    const handleSearchQueryChange = (value) => setSearchQuery(value.trim())

    const handleFilterChange = (name, value) => {
        setFilter({ ...filter, [name]: value })
    }

    return (
        <Content>
            <ContentContainer>
                <div className='table'>
                    <div className='table_header'>
                        <div className='table_header_heading'>
                            <StyledTableHeading>Payment transaction</StyledTableHeading>
                        </div>
                        <div className='table_header_control-elements'>
                            <div className='table_header_control-elements_date-time'>
                                <Dropdown
                                    name="date"
                                    options={jobStatus}
                                    defaultValue="Date"
                                    handleFilterChange={handleFilterChange}
                                />
                                <Dropdown
                                    name="Time"
                                    defaultValue="Time"
                                    options={jobStatus}
                                    handleFilterChange={handleFilterChange}
                                />
                            </div>
                            <TableSearchHandler handleSearchQueryChange={handleSearchQueryChange} />
                        </div>
                    </div>
                    <List data={rows} />
                </div>
            </ContentContainer>
        </Content>
    )
}

export default Index