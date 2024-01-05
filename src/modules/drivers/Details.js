import React, { useState } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import Breadcrumbs from 'components/breadCrumbs';
import IconButton from '@mui/material/IconButton';
import { StyledHeading, StyledTableHeading } from 'components/globaStyle';
import { ContentContainer, StyledDetailsContent, StyledAttachment } from './style';
const { Content } = Layout;

const Index = () => {
    const [attachment, setAttachment] = useState()
    const [dialogOpen, setDialogOpen] = useState(false)

    const documents = [
        { text: 'Driving license', img: '/images/license.png' },
        { text: 'Driving certificate', img: '/images/certificate.png' },
    ]

    const breadcrumbs = [
        <Link className='link' to="/admin/drivers">Driver</Link>,
        <span className='text'>Driver details</span>
    ]

    return (
        <Content>
            {dialogOpen && (
                <Dialog
                    fullScreen
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                    PaperProps={{
                        style: {
                            background: 'rgba(0, 0, 0, 0.7)'
                        }
                    }}
                >
                    <IconButton
                        onClick={() => setDialogOpen(false)}
                        sx={{
                            top: 100,
                            right: 42,
                            padding: 0,
                            position: 'absolute',
                        }}
                    >
                        <img src='/images/pop-cross-icon.svg' alt='cross-icon' />
                    </IconButton>
                    <StyledAttachment>
                        <img src={attachment} alt="document" />
                    </StyledAttachment>
                </Dialog>
            )}
            <ContentContainer>
                <Breadcrumbs>
                    {breadcrumbs}
                </Breadcrumbs>
                <StyledDetailsContent>
                    <div className='heading'>
                        <StyledTableHeading>Driver details</StyledTableHeading>
                    </div>
                    <div className='details'>
                        <div className='logo'>
                            <img src='/images/driver.svg' alt='driver' />
                        </div>
                        <div className='details_text'>
                            <div className='details_text_row'>
                                <div className='details_text_row_pair'>
                                    <h3>Name</h3>
                                    <p>Jhon james</p>
                                </div>
                                <div className='details_text_row_pair'>
                                    <h3>Email</h3>
                                    <p>Jhonjames112@gmail.com</p>
                                </div>
                                <div className='details_text_row_pair'>
                                    <h3>Gender</h3>
                                    <p>Male</p>
                                </div>
                            </div>
                            <div className='details_text_row'>
                                <div className='details_text_row_pair'>
                                    <h3>Preferred location</h3>
                                    <p>456 Forth ave, Herndon</p>
                                </div>
                                <div className='details_text_row_pair'>
                                    <h3>Employment status</h3>
                                    <p>Working</p>
                                </div>
                                <div className='details_text_row_pair'>
                                    <h3>Driving experience</h3>
                                    <p>3-4 years</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='driving_materials'>
                        {documents.map((item) => {
                            return (
                                <div key={item.text} className='driving_materials_document'>
                                    <div className='driving_materials_document_header'>
                                        <StyledHeading>{item.text}</StyledHeading>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setDialogOpen(true)
                                                setAttachment(item.img)
                                            }}
                                        >
                                            View
                                        </button>
                                    </div>
                                    <div className='driving_materials_document_attachment'>
                                        <img src={item.img} alt='document' />
                                    </div>
                                </div>
                            )
                        })}

                        {/* <div className='driving_materials_document'>
                            <StyledHeading>Driving certificate</StyledHeading>
                            <div className='driving_materials_document_detail'>
                                <div className='driving_materials_document_detail_left'>
                                    <img src='/images/driving-certificate.png' alt='certificate' />
                                    <div className='driving_materials_document_detail_left_text'>
                                        <h3>Driving certificate</h3>
                                        <span>5 MB</span>
                                    </div>
                                </div>
                                <div className='driving_materials_document_detail_link'>
                                    <Link to="##">View</Link>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </StyledDetailsContent>
            </ContentContainer>
        </Content>
    )
}

export default Index