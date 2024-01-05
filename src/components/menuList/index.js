import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { grey600 } from 'components/globaStyle';
import IconButton from '@mui/material/IconButton';

const Index = ({ options, handleTableMenu, statusId, deleteId }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenuItem = (e, option,) => {
        setAnchorEl(null)
        e.stopPropagation()
        handleTableMenu(option, statusId, deleteId)
    }

    return (
        <React.Fragment>
            <IconButton
                id="long-button"
                aria-label="more"
                sx={{ width: '3px' }}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                aria-controls={open ? 'long-menu' : undefined}
                onClick={(e) => {
                    e.stopPropagation()
                    setAnchorEl(e.currentTarget)
                }}
            >
                <img src='/images/menu-icon.svg' alt='menu-icon' />
            </IconButton>
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
                        width: '170px',
                        borderRadius: '12px',
                        padding: '20px 20px 0',
                        boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.08)',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        onClick={(e) => handleMenuItem(e, option.text)}
                        sx={{
                            gap: '20px',
                            fontSize: '16px',
                            fontWeight: '400',
                            lineHeight: '21px',
                            padding: '0 0 20px',
                            fontStyle: 'normal',
                            borderBottom: 'none',
                            fontFamily: 'SF Pro Text',
                            letterSpacing: '-0.0031em',
                            color: option.text === 'Delete' ? '#EF4444' : grey600,
                            "&:hover": { backgroundColor: "transparent", color: option.text === 'Delete' ? '#EF4444' : 'inherit' },
                        }}
                    >
                        <img src={option.icon} alt={option.text} />
                        <span>{option.text}</span>
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
}

export default Index