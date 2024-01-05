import styled from "styled-components";
import { grey500, grey600, grey800 } from "components/globaStyle";

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
                max-width: 475px;
                align-items: center;

                @media screen and (max-width: 1200px) {
                    width: inherit;
                }

                @media screen and (max-width: 970px) {
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
        padding: 26px 24px 22px;
        border-bottom: 1px solid #E7E7E7;
    }

    .details {
        padding: 24px;
        position: relative;

        &_title {
            margin-bottom: 35px;
            h2 {
                margin: 0;
                font-size: 20px;
                font-weight: 500;
                line-height: 25px;
                color: ${grey800};
                font-style: normal;
                font-family: SF Pro Text;
                letter-spacing: -0.0045em;
            }
        }

        &_content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &_text {
                gap: 24px;
                display: flex;
                flex-direction: column;
    
                &_row {
                    gap: 50px;
                    display: flex;
                    align-items: center;
                     
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

            &_company {
                .status {
                    top: 18px;
                    right: 30%;
                    display: flex;
                    position: absolute;
                    align-items: center;
                    justify-content: center;

                    span {
                        height: 37px;
                    }
                }

                &_col {
                    gap: 8px;
                    top: 22px;
                    right: 0;
                    display: flex;
                    position: absolute;
                    padding-right: 132px;
                    flex-direction: column;

                    span {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 29px;
                        font-style: normal;
                        font-family: SF Pro Text;
                    }
                }
            }
        }
    }

    .description {
        padding: 20px 24px 33px;
        border-top: 1px solid #E7E7E7;
        
        h3 {
            margin: 0;
            font-size: 17px;
            font-weight: 600;
            color: ${grey800};
            line-height: 22px;
            font-style: normal;
            font-family: SF Pro Text;                
            letter-spacing: -0.0043em;
        }
        
        p {
            margin: 0;
            font-size: 14px;
            font-weight: 400;
            margin-top: 12px;
            color: ${grey600};
            line-height: 25px;
            font-style: normal;
            font-family: SF Pro Text;               
        }
    }
`