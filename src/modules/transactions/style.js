import styled from "styled-components";

export const ContentContainer = styled.div`
    gap: 24px;
    display: flex;
    margin-left: 272px;
    padding: 20px 24px;
    flex-direction: column;

    .table {
        padding: 20px;
        background: #FFFFFF;
        border-radius: 16px;
        border: 1px solid #E7E7E7;

        &_header {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            justify-content: space-between;

            &_control-elements {
                gap: 24px;
                width: 100%;
                display: flex;
                max-width: 530px;
                align-items: center;

                &_date-time {
                    gap: 24px;
                    display: flex;
                    max-width: 177px;
                    align-items: center;
                }
            }
        }
    }
`