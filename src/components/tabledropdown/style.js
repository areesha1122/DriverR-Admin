import styled from 'styled-components';
import Button from '@mui/material/Button';
import { grey300, grey400, grey600, grey900 } from 'components/globaStyle';
// import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)({
    color: grey900,
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '18px',
    fontStyle: 'normal',
    borderRadius: '6px',
    padding: '11px 16px',
    background: 'transparent',
    fontFamily: 'SF Pro Text',
    letterSpacing: '-0.0008em',
    textTransform: 'capitalize',
    border: `1px solid ${grey900}`,

    '&:hover': {
        background: 'transparent',
        border: `1px solid ${grey900}`,
    }
})

export const StyledSelectField = styled.div`
    width: 100%;

    @media screen and (max-width: 1120px) {
        width: inherit;
    }

    .ant-select {
        width: 100%;

        .ant-select-selector {
            height: 40px;
            display: flex;
            padding: 0 16px;
            align-items: center;
            box-shadow: none !important;
            border: 1px solid ${grey300} !important;        

            &:hover {
                border: 1px solid ${grey300} !important;
            }

            .ant-select-selection-item {
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                font-style: normal;
                font-family: SF Pro Text;
                letter-spacing: -0.0008em;
                color: ${props => props.selectedValue ? grey600 : grey400};
            }
        }
    }
`