import styled from "styled-components";
import { primaryBlue } from "components/globaStyle";

export const StyledTableFilterButton = styled.button`
    gap: 8px;
    padding: 0;
    width: 96px;
    height: 40px;
    display: flex;
    color: #F9FAFB;
    cursor: pointer;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background: ${primaryBlue};
    
    span {
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        font-style: normal;
        font-family: SF Pro Text !important;
    }
`
