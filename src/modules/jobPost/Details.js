import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Breadcrumbs from 'components/breadCrumbs';
import { StyledTableHeading, StyledStatus, grey500, grey800 } from 'components/globaStyle';
import { ContentContainer, StyledDetailsContent } from './style';
const { Content } = Layout;

const Index = () => {
    const breadcrumbs = [
        <Link className='link' to="/admin/job-post">Job post</Link>,
        <span className='text'>Job details</span>
    ]

    return (
        <Content>
            <ContentContainer>
                <Breadcrumbs>
                    {breadcrumbs}
                </Breadcrumbs>
                <StyledDetailsContent>
                    <div className='heading'>
                        <StyledTableHeading>Job details</StyledTableHeading>
                    </div>

                    <div className='details'>
                        <div className='details_title'>
                            <h2>Truck driver required ON urgent base</h2>
                        </div>
                        <div className='details_content'>
                            <div className='details_content_text'>
                                <div className='details_content_text_row'>
                                    <div className='details_content_text_row_pair'>
                                        <h3>Equipment type</h3>
                                        <p>Local</p>
                                    </div>
                                    <div className='details_content_text_row_pair'>
                                        <h3>Required experience</h3>
                                        <p>2-3 years</p>
                                    </div>
                                    <div className='details_content_text_row_pair'>
                                        <h3>License required</h3>
                                        <p>Yes</p>
                                    </div>
                                </div>
                                <div className='details_content_text_row'>
                                    <div className='details_content_text_row_pair'>
                                        <h3>Medical insurance</h3>
                                        <p>Yes</p>
                                    </div>
                                    <div className='details_content_text_row_pair'>
                                        <h3>Route type</h3>
                                        <p>Tanker</p>
                                    </div>
                                </div>
                            </div>

                            <div className='details_content_company'>
                                <div className='details_content_company_col'>
                                    <span style={{ color: grey500 }}>Company Info</span>
                                    <img src='/images/fedex.svg' alt='fedex' />
                                    <span style={{ color: grey800 }}>Fedex</span>
                                </div>

                                <div className='status'>
                                    <StyledStatus
                                        width="102px"
                                        color='#EF4444'
                                        background="rgba(239, 68, 68, 0.05)"
                                    >
                                        In-active
                                    </StyledStatus>
                                </div>
                            </div>
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