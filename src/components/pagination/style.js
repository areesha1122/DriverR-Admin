import styled from "styled-components";
import { secondaryBlue } from "components/globaStyle";

export const StyledPaginationContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 15px 0;
    justify-content: space-between;
    
    @media screen and (max-width: 790px) {
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }


    .left-container {
        gap: 8px;
        display: flex;
        align-items: center;

        span, select {
            color: #2C2E3E;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            font-style: normal;
            font-family: SF Pro Text;
        }

        select {
            width: 54px;
            padding: 8px;
            outline: none;
            appearance: none;
            border-radius: 8px;
            border: 1px solid #E0E7ED;
            background-repeat: no-repeat;
            background-position: 65% center;
            background-image: url(/images/select-arrow.svg);
        }
    }

    .MuiPagination-root {
        li {
            button {
                padding: 0;
                border: none;
                color: #A4A8AB;
                font-size: 14px;
                font-weight: 600;
                line-height: 22px;
                font-style: normal;
                border-radius: 6px;
                background: #F7F7F7;
                font-family: SF Pro Text;
            }

            .Mui-selected {
                color: #FFFFFF;
                // background-color: #01A3E6;
                background-color: ${secondaryBlue};
            }
        }   
    }
`