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
    { value: 'unempolyed', text: 'Unemployed' },
]

const experience = [
    { value: '1', text: '0-1 year' },
    { value: '2', text: '0-2 years' },
    { value: '3', text: '0-3 years' },
    { value: '4', text: '0-4 years' },
    { value: '5', text: '+5 years' },
]

function createData(id, img, name, title, equipmentType, licenseRequired, medicalInsurance, routeType, status) {
    return { id, img, name, title, equipmentType, licenseRequired, medicalInsurance, routeType, status }
}

const rows = [
    createData(1, '/images/fedex-logo.svg', 'Fedex', 'Truck driver', 'Local', 'Yes', 'Yes', 'Tanker', 'Active'),
    createData(2, '/images/perma-logo.svg', 'Fedex', 'Truck driver', 'Tautline', 'No', 'Yes', 'Tanker', 'In-active'),
    createData(3, '/images/fedex-logo.svg', 'Fedex', 'Truck driver', 'Round trip', 'No', 'No', 'Tanker', 'Active'),
    createData(4, '/images/perma-logo.svg', 'Fedex', 'Truck driver', 'Flatbed', 'Yes', 'Yes', 'Tanker', 'In-active'),
    createData(5, '/images/fedex-logo.svg', 'Fedex', 'Truck driver', 'Local', 'Yes', 'Yes', 'Tanker', 'Active'),
    createData(6, '/images/perma-logo.svg', 'Fedex', 'Truck driver', 'Tautline', 'No', 'Yes', 'Tanker', 'In-active'),
    createData(7, '/images/fedex-logo.svg', 'Fedex', 'Truck driver', 'Round trip', 'No', 'No', 'Tanker', 'Active'),
    createData(8, '/images/perma-logo.svg', 'Fedex', 'Truck driver', 'Flatbed', 'Yes', 'Yes', 'Tanker', 'In-active'),
    createData(9, '/images/fedex-logo.svg', 'Fedex', 'Truck driver', 'Local', 'Yes', 'Yes', 'Tanker', 'Active'),
    createData(10, '/images/perma-logo.svg', 'Fedex', 'Truck driver', 'Tautline', 'No', 'Yes', 'Tanker', 'In-active'),
    createData(11, '/images/fedex-logo.svg', 'Fedex', 'Truck driver', 'Round trip', 'No', 'No', 'Tanker', 'Active'),
    createData(12, '/images/perma-logo.svg', 'Fedex', 'Truck driver', 'Flatbed', 'Yes', 'Yes', 'Tanker', 'In-active'),
    createData(13, '/images/fedex-logo.svg', 'Fedex', 'Truck driver', 'Round trip', 'No', 'No', 'Tanker', 'Active'),
    createData(14, '/images/perma-logo.svg', 'Fedex', 'Truck driver', 'Flatbed', 'Yes', 'Yes', 'Tanker', 'In-active'),
]

const Index = () => {
    const api = new ApiClient()
    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState({
        status: '',
        experience: '',
        employmentStatus: '',
    })

    const filteredJobs = jobs?.filter((item) => {
        const statusMatch = filter.status === '' || item.isActive === filter.status
        const searchMatch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase())
        return statusMatch && searchMatch
    })

    const handleSearchQueryChange = (value) => setSearchQuery(value.trim())

    const handleFilterChange = (name, value) => {
        setFilter({ ...filter, [name]: value })
    }

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await api.get('/super-admin/view-all-jobs')
            setJobs(response.data.result.data)
            setLoading(false)
        }
        catch (error) {
            setLoading(true)
            console.log(error)
            setLoading(false)
        }
    }, [])

    const handleJobDelete = async (id) => {
        const data = { jobId: id }
        try {
            await api.post('/super-admin/remove-job', data)
            getData()
        }
        catch (error) {
            SweetAlert('error', 'Error!', `${error.message}`)
        }
    }

    const handleJobStatus = async (id, newStatus) => {
        const data = { id, isActive: newStatus === 'Active' ? true : false }
        try {
            await api.post('/super-admin/active-inactive-job', data)
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
                        <StyledTableHeading>Job post</StyledTableHeading>
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
                                defaultValue="Employment type"
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
                    <List data={filteredJobs} loading={loading} handleJobDelete={handleJobDelete} handleJobStatus={handleJobStatus} />
                </div>
            </ContentContainer>
        </Content>
    )
}

export default Index