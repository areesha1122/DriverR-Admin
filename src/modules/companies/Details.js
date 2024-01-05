import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Breadcrumbs from 'components/breadCrumbs';
import { StyledTableHeading } from 'components/globaStyle';
import { ContentContainer, StyledDetailsContent } from './style';
const { Content } = Layout;

const Index = () => {
    const breadcrumbs = [
        <Link className='link' to="/admin/companies">Companies</Link>,
        <span className='text'>Fedex truck company</span>
    ]

    return (
        <Content>
            <ContentContainer>
                <Breadcrumbs>
                    {breadcrumbs}
                </Breadcrumbs>
                <StyledDetailsContent>
                    <div className='heading'>
                        <StyledTableHeading>Company details</StyledTableHeading>
                    </div>
                    <div className='details'>
                        <div className='banner'>
                            <h3>Fedex truck company</h3>
                        </div>
                        <div className='status'>
                            <span>Active</span>
                        </div>
                    </div>
                    <div className='description'>
                        <h3>Description</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </StyledDetailsContent>
            </ContentContainer>
        </Content>
    )
}

export default Index