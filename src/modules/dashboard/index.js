import React, { useEffect } from 'react';
import Cards from './Cards';
import Graph from './Graph';
import { Layout } from 'antd';
import ActiveJobs from './ActiveJobs';
import Notifications from './Notifications';
import TransactionsDetails from './TranscDetails';
import { ContentContainer, StyledHeading } from './style';
const { Content } = Layout;

const Index = () => {

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await api.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
    //         console.log(response)
    //     }

    //     fetchData();
    // }, []);

    return (
        <Content>
            <ContentContainer>
                <Cards />
                <div className='reports'>
                    <Graph />
                    <Notifications />
                </div>
                <div className='tables-container'>
                    <div className='table'>
                        <div className='table_header'>
                            <StyledHeading>Active jobs</StyledHeading>
                            <button type='button'>View all</button>
                        </div>
                        <ActiveJobs />
                    </div>
                    <div className='table'>
                        <div className='table_header'>
                            <StyledHeading>Transactions details</StyledHeading>
                            <button type='button'>View all</button>
                        </div>
                        <TransactionsDetails />
                    </div>
                </div>
            </ContentContainer>
        </Content>
    )
}

export default Index