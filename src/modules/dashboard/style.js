import styled from "styled-components";
import { primaryBlue, grey500, grey800, grey900 } from "components/globaStyle";

export const ContentContainer = styled.div`
    gap: 20px;
    display: flex;
    margin-left: 272px;
    padding: 20px 24px;
    flex-direction: column;

    .reports {
        gap: 20px;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1280px) {
            flex-wrap: wrap;
        }
    }

    .tables-container {
        gap: 20px;
        display: flex;
        align-items: center;

        @media screen and (max-width: 1280px) {
            flex-wrap: wrap;
        }

        .table {
            width: 100%;
            padding: 24px 16px;
            background: #FFFFFF;
            border-radius: 12px;
            border: 1px solid #E7E7E7;

            &_header {
                display: flex;
                align-items: center;
                margin-bottom: 16px;
                justify-content: space-between;

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
                    font-family: Montserrat;
                    background: transparent;
                    text-decoration: underline;
                }
            }
        }
    }
`

export const StyledCards = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1280px) {
        flex-wrap: wrap;
    }

    .card {
        width: 100%;
        display: flex;
        padding: 20px 16px;
        align-items: center;
        background: #FFFFFF;
        border-radius: 12px;
        border: 1px solid #E7E7E7;
        justify-content: space-between;

        &_detail {
            gap: 8px;
            display: flex;
            flex-direction: column;

            h3 {
                margin: 0;
                color: #1B2337;
                font-size: 13px;
                font-weight: 500;
                line-height: 18px;
                font-style: normal;
                font-family: SF Pro Text;
                letter-spacing: -0.0008em;
            }

            p {
                margin: 0;
                font-size: 28px;
                font-weight: 600;
                color: ${grey900};
                line-height: 32px;
                font-style: normal;
                font-family: SF Pro Text;
            }
        }

        &_icon {
            display: flex;
            align-items: center;
        }
    }
`

export const StyledGraph = styled.div`
    width: 100%;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 24px 32px 0;
    border: 1px solid #E7E7E7;

    .header {
        display: flex;
        align-items: center;
        margin-bottom: 29px;
        justify-content: space-between;
    }

    .footer {
        gap: 50px;
        margin: auto;
        display: flex;
        padding: 20px 0;
        max-width: 315px;
        align-items: center;

        >div {
            gap: 16px;
            display: flex;
            align-items: center;

            .circle {
                width: 8px;
                height: 8px;
                border-radius: 50%;
            }

            span {
                color: #494F5F;
                font-size: 10px;
                font-weight: 500;
                line-height: 15px;
                font-style: normal;
                font-family: SF Pro Text;
            }
        }

        >div:nth-child(1) {
            .circle {
                background: #46DE70;
            }
        }
        >div:nth-child(2) {
            .circle {
                background: #E95380;
            }
        }
        >div:nth-child(3) {
            .circle {
                background: #962DFF;
            }
        }
    }
`

export const StyledNotifications = styled.div`
    width: 100%;
    max-width: 360px;
    padding: 24px 14px;
    background: #FFFFFF;
    border-radius: 12px;
    border: 1px solid #E7E7E7;

    @media screen and (max-width: 1280px) {
        max-width: inherit;
    }

    .list {
        gap: 8px;
        display: flex;
        padding-top: 20px;
        padding-left: 8px;
        flex-direction: column;

        &_item {
            gap: 8px;
            display: flex;
            align-items: center;
            padding-bottom: 16px;
            border-bottom:  0.2px solid #B5B4B4;

            &:last-child {
                border: none;
                padding-top: 8px;
                padding-bottom: 0;

                p {
                    span:last-child {
                        font-weight: 500;
                        color: ${grey500};
                    }
                }
            }

            &_text {
                p {
                    margin: 0;
                    font-size: 12px;
                    font-weight: 500;
                    margin-top: 10px;
                    color: ${grey500};
                    line-height: 20px;
                    font-style: normal;
                    font-family: SF Pro Text;

                    span {
                        font-weight: 600;
                        color: ${grey800};
                    }
                }

                .time {
                    color: #A1A1AA;
                    font-size: 10px;
                    font-weight: 500;
                    line-height: 20px;
                    font-style: normal;
                    font-family: Plus Jakarta Sans;
                }
            }
        }
    }
`

export const StyledHeading = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: ${grey900};
    line-height: 26px;
    font-style: normal;
    font-family: SF Pro Text;
`