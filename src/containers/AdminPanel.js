import React, { lazy } from 'react';
import { Layout, Space } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
const JobPost = lazy(() => import('modules/jobPost'));
const Drivers = lazy(() => import('modules/drivers'));
const Settings = lazy(() => import('modules/settings'));
const Sidebar = lazy(() => import('components/sideBar'));
const Dashboard = lazy(() => import('modules/dashboard'));
const Companies = lazy(() => import('modules/companies'));
const Transactions = lazy(() => import('modules/transactions'));
const JobDetails = lazy(() => import('modules/jobPost/Details'));
const DriverDetails = lazy(() => import('modules/drivers/Details'));
const CompanyDetails = lazy(() => import('modules/companies/Details'));

const { Header } = Layout;

const headerStyle = {
    height: 70,
    paddingInline: 21,
    background: '#FFFFFF',
}

const Index = () => {
    const navigate = useNavigate()

    return (
        <Space
            size={[0, 48]}
            direction="vertical"
            style={{ width: '100%' }}
        >
            <Layout>
                <Sidebar />
                <Layout>
                    <Header style={headerStyle}>
                        <div className='header-icons'>
                            <button type='button' onClick={() => navigate('/admin/settings')}>
                                <img src='/images/setting.svg' alt='setting' />
                            </button>
                            <button type='button'>
                                <img src='/images/notification.svg' alt='notification' />
                            </button>
                            <button
                                type='button'
                                onClick={() => {
                                    localStorage.clear()
                                    navigate("/")
                                }}
                            >
                                <img src='/images/profile-avatar.svg' alt='avatar' />
                            </button>
                        </div>
                    </Header>
                    <Routes>
                        <Route exact path='/dashboard' element={<Dashboard />} />
                        <Route path='/job-post' element={<JobPost />} />
                        <Route path='/job-post/details' element={<JobDetails />} />
                        <Route path='/companies' element={<Companies />} />
                        <Route path='/companies/details' element={<CompanyDetails />} />
                        <Route path='/drivers' element={<Drivers />} />
                        <Route path='/drivers/details' element={<DriverDetails />} />
                        <Route path='/transactions' element={<Transactions />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </Layout>
            </Layout>
        </Space >
    )
}

export default Index