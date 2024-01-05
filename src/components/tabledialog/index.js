import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import Dialog from '@mui/material/Dialog';
import { StyledDialogContent } from './style';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { primaryBlue } from 'components/globaStyle';

const Index = ({ open, dialogType, setOpen, handleStatus, handleDelete }) => {
    const [value, setValue] = useState('Active')

    const radiosButton = [
        { value: 'Active', label: 'Active' },
        { value: 'In-active', label: 'Inactive' }
    ]

    const handleDeleteButton = () => {
        setOpen(false)
        handleDelete()
    }

    const handleUpdateButton = () => {
        setOpen(false)
        handleStatus(value)
    }

    const deleteContent = () => {
        return (
            <React.Fragment>
                <div className='delete-icon'>
                    <img src='/images/delete-icon.svg' alt='delete-icon' />
                </div>

                <div className='text'>
                    <h3 style={{ color: '#EF4444' }}>Delete!</h3>
                    <p>Are you sure you want to delete “company”?</p>
                </div>
                <div className='btn-container'>
                    <button className='cancel-btn' type='button' onClick={() => setOpen(false)}>Cancel</button>
                    <button className='delete-btn' type='button' onClick={handleDeleteButton}>Delete</button>
                </div>
            </React.Fragment>
        )
    }

    const statusContent = () => {
        return (
            <React.Fragment>
                <div className='status-icon'>
                    <img src='/images/status-icon.svg' alt='status-icon' />
                </div>

                <div className='content'>
                    <h3>Change Status!</h3>
                    <RadioGroup
                        row
                        value={value}
                        sx={{ justifyContent: 'center' }}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        {radiosButton.map((item) => {
                            return (
                                <FormControlLabel
                                    key={item.value}
                                    value={item.value}
                                    label={item.label}
                                    control={
                                        <Radio
                                            sx={{
                                                color: '#A2ACBD',
                                                '&.Mui-checked': {
                                                    color: primaryBlue,
                                                    'svg:last-child': {
                                                        transform: 'scale(1.3)'
                                                    }
                                                },
                                            }}
                                        />
                                    }
                                    sx={{
                                        marginLeft: '3px',
                                        marginRight: '15px',
                                        '& .MuiFormControlLabel-label': {
                                            color: '#3E4756',
                                            fontSize: '16px',
                                            fontWeight: '400',
                                            lineHeight: '121.4%',
                                            fontFamily: 'Poppins',
                                        },
                                    }}
                                />
                            )
                        })}
                    </RadioGroup>
                    {/* <StyledSelectField>
                        <FormControl fullWidth
                            variant='outlined'
                            sx={{
                                width: '100%',
                                borderRadius: 4,
                                '& fieldset': {
                                    border: '2px solid #79747E'
                                },
                            }}
                        >
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={status}
                                label="Status"
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="In-active">Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </StyledSelectField> */}
                </div>

                <div className='btn-container'>
                    <button className='cancel-btn' type='button' onClick={() => setOpen(false)}>Cancel</button>
                    <button className='update-btn' type='button' onClick={() => handleUpdateButton()}>Update</button>
                </div>
            </React.Fragment>
        )
    }

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
                style: {
                    borderRadius: '12px',
                    padding: '16px 18px 24px',
                    boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.08)'
                },
            }}
        >
            <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                    top: 16,
                    right: 16,
                    padding: 0,
                    position: 'absolute',
                }}
            >
                <img src='/images/pop-cross-icon.svg' alt='cross-icon' />
            </IconButton>
            <StyledDialogContent>
                {dialogType === 'status' ? statusContent() : dialogType === 'delete' && deleteContent()}
            </StyledDialogContent>
        </Dialog>
    )
}

export default Index