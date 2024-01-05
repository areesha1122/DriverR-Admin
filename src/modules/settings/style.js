import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { infoLink } from "components/globaStyle";
import { primaryBlue } from "components/globaStyle";

export const ContentContainer = styled.div`
    padding: 20px 24px;
    margin-left: 272px;
    background: #FFFFFF;
    border-radius: 16px;
    border: 1px solid #E7E7E7;

    .settings {
        position: relative;

        .btn-container {
            top: 0;
            right: 0;
            gap: 16px;
            display: flex;
            position: absolute;
            align-items: center;

            button {
                padding: 0;
                height: 40px;
                border: none;
                outline: none;
                font-size: 13px;
                cursor: pointer;
                font-weight: 500;
                line-height: 18px;
                font-style: normal;
                border-radius: 6px;
                background: transparent;
                font-family: SF Pro Text;
                letter-spacing: -0.0008em;
            }

            .cancel-btn {
                width: 75px;
                color: ${primaryBlue};
                border: 1px solid ${primaryBlue};
            }
        }

        &_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &_content {
            gap: 20px;
            display: flex;
            margin-top: 23px;

            &_tabs {
                gap: 10px;
                width: 100%;
                display: flex;
                max-width: 265px;
                flex-direction: column;

                .activeTab {
                    border-radius: 8px;
                    background: #E4F0FD;
                    border-left: 2px solid ${infoLink};

                    svg path {
                        fill: ${infoLink};
                    }

                    span {
                        color: ${infoLink};
                    }
                }

                button {
                    gap: 12px;
                    border: none;
                    height: 49px;
                    display: flex;
                    outline: none;
                    cursor: pointer;
                    padding: 0 24px;
                    border-radius: 8px;
                    align-items: center;
                    background: #F9F9F9;

                    span {
                        color: #374151;
                        font-size: 14px;
                        font-weight: 400;
                        font-style: normal;
                        line-height: 121.4%;
                        font-family: SF Pro Text;
                    }
                }
            }

            &_tabsPanel {
                width: 100%;
            }
        }
    }
`

export const StyledGeneral = styled.div`

    h2 {
        margin: 0;
        color: #111827;
        font-size: 22px;
        font-weight: 600;
        line-height: 28px;
        font-style: normal;
        margin-bottom: 16px;
        font-family: SF Pro Text;                    
        letter-spacing: -0.0026em;
    }

    form {
        gap: 24px;
        display: flex;
        flex-direction: column;

        .field-control {
            position: relative;
        }

        .new_confirm-password {
            gap: 19px;
            display: flex;
            align-items: center;

            .match-password {
                width: 100%;
                position: relative;
            }
        }

        .content {
            gap: 16px;
            display: flex;
            padding-left: 10px;
            align-items: center;

            .img-shown {
                width: 140px;
                display: flex;
                height: 140px;
                border-radius: 50%;
                align-items: center;
                background: #C1C7D0;
                justify-content: center;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                    // width: 140px;
                    // height: 140px;
                }

                span {
                    color: #FFFFFF;
                    font-size: 26px;
                    font-weight: 600;
                    line-height: 24px;
                    font-style: normal;
                    font-family: SF Pro Text;
                }
            }

            .file-upload {
                gap: 10px;
                display: flex;
                align-items: center;

                label, button {
                    width: 120px;
                    height: 30px;
                    display: flex;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: 500;
                    line-height: 24px;
                    font-style: normal;
                    align-items: center;
                    border-radius: 20px;
                    justify-content: center;
                    font-family: SF Pro Text;
                }
                
                label {
                    color: #F9FAFB;
                    background: ${primaryBlue};
                }

                button {
                    padding: 0;
                    outline: none;
                    color: ${primaryBlue};
                    background: transparent;
                    border: 1px solid ${primaryBlue};
                }
            }
        }
    }
    
`

export const StyledTextField = styled(TextField)((props) => ({
    '& label': {
        opacity: '0.38',
        fontWeight: 400,
        fontSize: '16px',
        color: '#1C1B1F',
        lineHeight: '24px',
        fontStyle: 'normal',
        letterSpacing: '0.5px',
        fontFamily: 'SF Pro Text'
    },
    '& label.Mui-focused': {
        fontWeight: 400,
        // fontSize: '12px',
        fontStyle: 'normal',
        // letterSpacing: '0.4px',
        fontFamily: 'SF Pro Text',
        color: props.error ? '#B3261E' : '#1C1B1F',
    },
    '& .MuiOutlinedInput-input': {
        opacity: '0.38',
        fontWeight: 400,
        fontSize: '16px',
        color: '#1C1B1F',
        lineHeight: '24px',
        fontStyle: 'normal',
        letterSpacing: '0.5px',
        fontFamily: 'SF Pro Text'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid rgba(28, 27, 31, 0.10)',
        },
        '&:hover fieldset': {
            border: '1px solid #ccc',
        },
        '& fieldset legend': {
            // width: props.reset ? '29%' : '16.5%',
        },
        '&.Mui-focused fieldset': {
            border: props.error ? '1px solid #B3261E' : `1px solid rgba(28, 27, 31, 0.12)`,
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
    position absolute;
    line-height: 16px;
    font-style: normal;
    letter-spacing: 0.4px;
    font-family: SF Pro Text;
`