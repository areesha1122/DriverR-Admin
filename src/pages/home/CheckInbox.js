import React from 'react';
import { StyledPara } from './style';
import LoginBox from 'components/loginBox';
import { useNavigate } from 'react-router-dom';
import { StyledHeading, PrimaryButton, grey900 } from 'components/globaStyle';

const Index = () => {
    const navigate = useNavigate()

    return (
        <LoginBox>
            <div className='check-inbox'>
                <div className='text'>
                    <StyledHeading>Check your inbox</StyledHeading>
                    <StyledPara color="#616161">We have sent the instructions for resetting your password to <span style={{ fontWeight: 600, color: grey900 }}>example@gmail.com</span> </StyledPara>
                    <StyledPara color="#1F2937" style={{ margin: 0 }}>Didn’t receive the email? Check spam or</StyledPara>
                </div>
                <div className="btn-container">
                    <PrimaryButton type='button'>Resend email</PrimaryButton>
                </div>
                <div className='back-btn'>
                    <PrimaryButton type='button' onClick={() => navigate("/")}>Back to login</PrimaryButton>
                </div>
            </div>
        </LoginBox>
    )
}

export default Index