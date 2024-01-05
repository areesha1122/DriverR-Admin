import styled from "styled-components";
import { primaryBlue, grey500, grey800, grey900 } from "components/globaStyle";

export const ContentContainer = styled.div`
    margin-left: 272px;
    padding: 20px 24px;

    .table {
        padding: 20px;
        background: #FFFFFF;
        border-radius: 16px;
        border: 1px solid #E7E7E7;

        &_control-elements {
            display: flex;
            margin-top: 29px;
            margin-bottom: 24px;
            justify-content: space-between;

            &_filterbox {
                gap: 24px;
                width: 100%;
                display: flex;
                max-width: 600px;
                align-items: center;

                @media screen and (max-width: 1200px) {
                    width: inherit;
                }

                @media screen and (max-width: 1120px) {
                    flex-wrap: wrap;
                }     
            }
        }
    }
`

export const StyledDetailsContent = styled.div`
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 16px;
    border: 1px solid #E7E7E7;

    .heading {
        padding: 23px 24px 24px;
        border-bottom: 1px solid #E7E7E7;
    }

    .details {
        gap: 32px;
        display: flex;
        padding: 24px 32px;
        align-items: center;
        
        &_text {
            gap: 24px;
            display: flex;
            flex-direction: column;

            &_row {
                gap: 50px;
                display: flex;
                align-items: center;

                @media screen and (max-width: 1220px) {
                    flex-wrap: wrap;
                }    
                 
                &_pair {
                    gap: 4px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;

                    h3, p {
                        margin: 0;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 29px;
                        font-style: normal;
                        font-family: SF Pro Text;
                    }
                    
                    h3 {
                        color: ${grey500};
                    }
                    p {
                        color: ${grey800};
                    }
                }
            }
        }
    }

    .driving_materials {
        display: flex;
        padding: 24px 32px;
        align-items: center;
        border-top: 1px solid #E7E7E7;
        justify-content: space-between;

        @media screen and (max-width: 1400px) {
            gap: 20px;
            flex-wrap: wrap;
        }    

        &_document {
            &_header {
                display: flex;
                align-items: center;
                justify-content: space-between;

                h3 {
                    margin: 0;
                }

                button {
                    padding: 0;
                    border: none;
                    outline: none;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: 500;
                    line-height: 18px;
                    font-style: normal;
                    color: ${primaryBlue};
                    background: transparent;
                    font-family: SF Pro Text;
                    text-decoration-line: underline;
                }
            }

            &_attachment {
                padding: 12px;
                margin-top: 16px;
                border-radius: 8px;
                border: 1px solid #E7E7E7;
            }
        }
    
        // &_document_detail {
        //     display: flex;
        //     padding: 16px 0;
        //     margin-top: 16px;
        //     padding-left: 25px;
        //     border-radius: 8px;
        //     padding-right: 32px;
        //     align-items: center;
        //     border: 1px solid #E7E7E7;
        //     justify-content: space-between;

        //     &_left {
        //         gap: 15px;
        //         display: flex;
        //         align-items: center;

        //         h3 {
        //             margin: 0;
        //             font-size: 12px;
        //             font-weight: 600;
        //             line-height: 18px;
        //             color: ${grey900};
        //             margin-bottom: 5px;
        //             font-style: normal;
        //             font-family: SF Pro Text;
        //         }

        //         span {
        //             opacity: 0.5;
        //             font-size: 12px;
        //             font-weight: 400;
        //             line-height: 18px;
        //             color: ${grey500};
        //             font-style: normal;
        //             font-family: SF Pro Text;
        //         }
        //     }

        //     &_link {
        //         a {
        //             font-size: 14px;
        //             font-weight: 500;
        //             line-height: 18px;
        //             font-style: normal;
        //             color: ${primaryBlue};
        //             font-family: SF Pro Text;
        //             text-decoration-line: underline;
        //         }
        //     }
        // }
    }
`

export const StyledAttachment = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    max-width: 700px;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`