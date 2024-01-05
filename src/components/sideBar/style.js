import styled from "styled-components";
import { Layout } from 'antd';
import { primaryBlue } from "components/globaStyle";
const { Sider } = Layout;

export const SideBar = styled(Sider)(() => ({
    top: 0,
    left: 0,
    bottom: 0,
    width: '272px !important',
    position: 'fixed !important',
    maxWidth: 'inherit !important',
    background: `${primaryBlue} !important`,
}))

export const SideBarContainer = styled.div`
    padding: 19px 18px;

    .sidebarContainer {
        &_title {
            h2 {
                margin: 0;
                color: #F9FAFB;
                font-weight: 600;
                line-height: 40px;
                font-style: normal;
                font-size: 33.408px;
                letter-spacing: 0.0038em;
                font-family: SF Pro Text;
            }
        }

        &_menu {
            margin-top: 80px;

            ul {
                margin: 0;
                padding: 0;
                list-style-type: none;

                li {
                    margin-bottom: 28px;

                    .active {
                        border-radius: 6px;
                        background: #FFFFFF;
                        color: ${primaryBlue};

                        svg path {
                            fill: ${primaryBlue};
                        }

                        .menu-text {
                            font-size: 17px;
                            font-weight: 400;
                            line-height: 22px;
                            font-style: normal;
                            font-family: SF Pro Text;
                            letter-spacing: -0.0043em;
                        }
                    }

                    a {
                        gap: 20px;
                        display: flex;
                        color: #F9FAFB;
                        padding: 8px 13px;
                        align-items: center;

                        &:hover {
                            border-radius: 6px;
                            background: #FFFFFF;
                            color: ${primaryBlue};

                            svg path {
                                fill: ${primaryBlue};
                            }

                            .menu-text {
                                font-size: 17px;
                                font-weight: 400;
                                line-height: 22px;
                                font-style: normal;
                                font-family: SF Pro Text;
                                letter-spacing: -0.0043em;
                            }
                        }

                        .menu-text {
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 24px;
                            font-style: normal;
                            font-family: Poppins;
                        }
                    }
                }
            }
        }
    }
`