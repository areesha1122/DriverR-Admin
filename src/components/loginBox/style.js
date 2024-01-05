import styled from "styled-components";
import { primaryBlue } from "components/globaStyle";

export const StyledLoginBox = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: linear-gradient(274.74deg, #F6EBE6 -12.2%, #AEE1F9 98.24%);
    
    .loginBoxContainer {
        &_content {
            width: 100%;
            max-width: 420px;
            background: #FFFFFF;
            border-radius: 16px;
            padding: 32px 24px 0;

            &_title {
                margin-bottom: 24px;
                
                h1 {
                    margin: 0;
                    font-weight: 600;
                    line-height: 39px;
                    font-style: normal;
                    font-size: 30.1364px;
                    color: ${primaryBlue};
                    font-family: SF Pro Text;
                    letter-spacing: -0.0043em;
                }
            }

            &_children {

                .check-inbox {
                    gap: 24px;
                    display: flex;
                    flex-direction: column;
                }

                .form-container {
                    form {
                        gap: 24px;
                        display: flex;
                        flex-direction: column;

                        .field-control {
                            position: relative;
                            
                            .warn-icon {
                                top: 16px;
                                right: 16px;
                                position: absolute;
                            }
                        }
                    
                        .forgot-password {
                            gap: 5px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            margin-bottom: 59px;
                            justify-content: center;
                            
                            span {
                                color: #49454F;
                                font-size: 14px;
                                font-weight: 400;
                                line-height: 117%;
                                font-style: normal;
                                font-family: SF Pro Text;
                            }
                            a {
                                font-weight: 600;
                                color: ${primaryBlue};
                                font-family: SF Pro Text;
                                text-decoration: underline;
                            }
                        }
                    }
                }
            
                .back-btn {
                    display: flex;
                    align-items: center;
                    margin-bottom: 19px;
                    justify-content: center;

                    button {
                        border: none;
                        outline: none;
                        font-weight: 600;
                        line-height: 117%;
                        color: ${primaryBlue};
                        background: transparent;
                    }
                }
            }
        }
    }
`