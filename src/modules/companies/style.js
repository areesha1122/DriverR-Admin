import styled from "styled-components";
import { grey600, grey800 } from "components/globaStyle";

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
            align-items: center;
            margin-bottom: 24px;
            justify-content: space-between;

            &_filterbox {
                gap: 24px;
                width: 100%;
                display: flex;
                max-width: 260px;
                align-items: center;
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
    }

    .details {
        margin-bottom: 40px;

        .banner {
            height: 196px;
            position: relative;
            background: linear-gradient(0deg, #132476 0%, rgba(19, 36, 118, 0.6) 100%);

            &::before {
                left: 24px;
                content: '';
                width: 132px;
                bottom: -37px;
                height: 132px;
                position: absolute;
                background-repeat: no-repeat;
                background-image: url(/images/fedex.svg);
            }

            h3 {
                margin: 0;
                bottom: 0;
                left: 176px;
                height: 56px;
                color: #FFFFFF;
                font-size: 28px;
                font-weight: 600;
                line-height: 34px;
                position: absolute;
                font-style: normal;
                font-family: SF Pro Text;
                letter-spacing: 0.0038em;
            }
        }

        .status {
            width: 65px;
            height: 25px;
            display: flex;
            margin-top: 12px;
            align-items: center;
            margin-left: 176px;
            border-radius: 6px;
            justify-content: center;
            background: rgba(34, 197, 94, 0.1);

            span {
                color: #22C55E;
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;
                font-style: normal;
                font-family: SF Pro Text;
                letter-spacing: -0.0045em;
            }
        }
    }

    .description {
        padding: 0 24px 24px;
        
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
            line-height: 21px;
            font-style: normal;
            font-family: SF Pro Text;               
        }
    }
`