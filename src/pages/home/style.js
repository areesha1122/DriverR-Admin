import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { primaryBlue } from "components/globaStyle";

export const StyledTextField = styled(TextField)((props) => ({
    '& label': {
        fontWeight: 400,
        fontSize: '16px',
        color: '#49454F',
        lineHeight: '24px',
        fontStyle: 'normal',
        letterSpacing: '0.4px',
        fontFamily: 'SF Pro Text'
    },
    '& label.Mui-focused': {
        fontWeight: 400,
        fontStyle: 'normal',
        letterSpacing: '0.4px',
        fontFamily: 'SF Pro Text',
        color: props.error ? '#B3261E' : primaryBlue,
    },
    '& .MuiOutlinedInput-input': {
        fontWeight: 400,
        fontSize: '16px',
        color: '#49454F',
        lineHeight: '24px',
        fontStyle: 'normal',
        letterSpacing: '0.4px',
        fontFamily: 'SF Pro Text'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid #79747E',
        },
        '& fieldset legend': {
            width: props.reset ? '29%' : '16.5%',
        },
        '&.Mui-focused fieldset': {
            border: props.error ? '2px solid #B3261E' : `2px solid ${primaryBlue}`,
        },
    },
}))

export const FieldErrorMessage = styled.p`
    margin: 0;
    top: 100%;
    color: #B3261E;
    margin-top: 2px;
    font-size: 12px;
    font-weight: 400;
    margin-left: 16px;
    position absolute;
    line-height: 16px;
    font-style: normal;
    letter-spacing: 0.4px;
    font-family: SF Pro Text;
`

export const StyledPara = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    font-style: normal;
    margin-bottom: 24px;
    font-family: SF Pro Text;
    letter-spacing: -0.0031em;
    color: ${props => props.color && props.color};
`