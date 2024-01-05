import React from 'react';
import { StyledTableFilterButton } from './style';

const Index = ({ type, text }) => {

    return (
        <StyledTableFilterButton
            type={type}
        >
            <img src='/images/filter-icon.svg' alt='filter-icon' />
            <span>{text}</span>
        </StyledTableFilterButton>
    )
}

export default Index