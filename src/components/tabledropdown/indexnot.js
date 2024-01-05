import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import { StyledButton } from './style';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import { primaryBlue, grey600 } from 'components/globaStyle';
import FormControlLabel from '@mui/material/FormControlLabel';

const Index = ({ text, options }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedValue, setSelectedValue] = useState(options?.[1]?.value)
    const open = Boolean(anchorEl)

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <React.Fragment>
            <StyledButton
                disableElevation
                variant="outlined"
                aria-haspopup="true"
                id="demo-customized-button"
                aria-expanded={open ? 'true' : undefined}
                onClick={(e) => setAnchorEl(e.currentTarget)}
                aria-controls={open ? 'demo-customized-menu' : undefined}
                endIcon={<img src='/images/down-arrow.svg' alt='down-arrow' />}
            >
                {text}
            </StyledButton>

            <Menu
                open={open}
                id="long-menu"
                anchorEl={anchorEl}
                onClose={(e) => {
                    setAnchorEl(null)
                    e.stopPropagation()
                }}
                MenuListProps={{
                    style: {
                        padding: 0,
                    },
                }}
                PaperProps={{
                    style: {
                        width: '130px',
                        borderRadius: '12px',
                        padding: '20px 20px 0',
                        boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.08)',
                    },
                }}
            >
                <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                    {options?.length > 0 && options?.map((option, index) => (
                        <MenuItem
                            key={index}
                            onClick={(e) => {
                                setAnchorEl(null)
                                e.stopPropagation()
                            }}
                            sx={{
                                gap: '20px',
                                color: grey600,
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '21px',
                                padding: '0 0 20px',
                                fontStyle: 'normal',
                                borderBottom: 'none',
                                fontFamily: 'SF Pro Text',
                                letterSpacing: '-0.0031em',
                                "&:hover": { backgroundColor: "transparent", color: "inherit" },
                            }}
                        >
                            <FormControlLabel
                                value={option.value}
                                control={
                                    <Radio
                                        sx={{
                                            height: '16px',
                                            color: grey600,
                                            '&.Mui-checked': {
                                                color: primaryBlue,
                                            },
                                        }}
                                    />
                                }
                                label={option.text}
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        color: grey600,
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '24px',
                                        fontFamily: 'SF Pro Text',
                                        letterSpacing: '-0.0031em',
                                    },
                                }}
                            />
                        </MenuItem>
                    ))}
                </RadioGroup>
            </Menu>
        </React.Fragment>
    );
}

export default Index