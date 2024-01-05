import React, { useState } from 'react';
import { Layout } from 'antd';
import General from './General';
import { ContentContainer } from './style';
import ChangePassword from './ChangePassword';
import { StyledTableHeading } from 'components/globaStyle';
const { Content } = Layout;

const Index = () => {
    const [activeTab, setActiveTab] = useState(0)

    const buttonContainer = () => {
        return (
            <React.Fragment>
                <button type='button' className='cancel-btn'>Cancel</button>
                <button type='submit' className='save-btn'>Save changes</button>
            </React.Fragment>
        )
    }

    return (
        <Content>
            <ContentContainer>
                <div className='settings'>
                    <div className='settings_header'>
                        <div className='settings_header_heading'>
                            <StyledTableHeading>Settings</StyledTableHeading>
                        </div>
                        <div className='settings_header_btn-container'>
                            {/* {buttonContainer()} */}
                        </div>
                    </div>
                    <div className='settings_content'>
                        <div className='settings_content_tabs'>
                            <button
                                type='button'
                                onClick={() => setActiveTab(0)}
                                className={activeTab === 0 ? 'activeTab' : ''}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1207_21014)">
                                        <path d="M14.034 6H13.97C13.8762 5.99917 13.7848 5.97011 13.7078 5.9166C13.6307 5.86309 13.5715 5.78761 13.538 5.7C13.5027 5.6154 13.4933 5.52221 13.5111 5.43228C13.529 5.34235 13.5731 5.25976 13.638 5.195L13.6835 5.1495C13.9578 4.87417 14.1118 4.50138 14.1118 4.11275C14.1118 3.72412 13.9578 3.35133 13.6835 3.076L12.928 2.321C12.6529 2.04651 12.2801 1.89236 11.8915 1.89236C11.5029 1.89236 11.1301 2.04651 10.855 2.321L10.8095 2.3665C10.7425 2.43106 10.658 2.47464 10.5666 2.4919C10.4751 2.50917 10.3806 2.49936 10.2947 2.46368C10.2087 2.428 10.1351 2.36801 10.0827 2.29106C10.0304 2.21411 10.0016 2.12355 10 2.0305V1.966C9.9996 1.57731 9.84502 1.20466 9.57018 0.92982C9.29534 0.654978 8.92269 0.500397 8.534 0.5H7.466C7.07731 0.500397 6.70466 0.654978 6.42982 0.92982C6.15498 1.20466 6.0004 1.57731 6 1.966V2.0305C5.99756 2.12288 5.9684 2.21258 5.91603 2.28873C5.86367 2.36488 5.79035 2.42422 5.70496 2.45956C5.61957 2.49491 5.52576 2.50474 5.4349 2.48786C5.34404 2.47099 5.26001 2.42814 5.193 2.3645L5.15 2.319C4.87489 2.04451 4.50213 1.89036 4.1135 1.89036C3.72487 1.89036 3.35211 2.04451 3.077 2.319L2.319 3.074C2.04472 3.34933 1.89073 3.72212 1.89073 4.11075C1.89073 4.49938 2.04472 4.87217 2.319 5.1475L2.3645 5.193C2.43003 5.26004 2.47389 5.34523 2.49038 5.43752C2.50688 5.5298 2.49525 5.62491 2.457 5.7105C2.42269 5.79575 2.36373 5.86883 2.28767 5.9204C2.21161 5.97197 2.1219 5.99968 2.03 6H1.966C1.57731 6.0004 1.20466 6.15498 0.92982 6.42982C0.654978 6.70466 0.500397 7.07731 0.5 7.466V8.534C0.500397 8.92269 0.654978 9.29534 0.92982 9.57018C1.20466 9.84502 1.57731 9.9996 1.966 10H2.03C2.12381 10.0008 2.21519 10.0299 2.29225 10.0834C2.3693 10.1369 2.42846 10.2124 2.462 10.3C2.49732 10.3846 2.50666 10.4778 2.48886 10.5677C2.47105 10.6576 2.42689 10.7402 2.362 10.805L2.3165 10.8505C2.04222 11.1258 1.88823 11.4986 1.88823 11.8872C1.88823 12.2759 2.04222 12.6487 2.3165 12.924L3.0715 13.6785C3.34657 13.9533 3.71946 14.1076 4.10825 14.1076C4.49704 14.1076 4.86993 13.9533 5.145 13.6785L5.1905 13.633C5.25758 13.5675 5.34277 13.5237 5.43503 13.5072C5.5273 13.4907 5.6224 13.5023 5.708 13.5405C5.79325 13.5747 5.86635 13.6335 5.91793 13.7095C5.96951 13.7855 5.99722 13.8752 5.9975 13.967V14.0315C5.99737 14.2244 6.03526 14.4154 6.10901 14.5936C6.18277 14.7719 6.29093 14.9338 6.42732 15.0702C6.56371 15.2066 6.72565 15.3147 6.90387 15.3885C7.0821 15.4622 7.27312 15.5001 7.466 15.5H8.534C8.92269 15.4996 9.29534 15.345 9.57018 15.0702C9.84502 14.7953 9.9996 14.4227 10 14.034V13.9695C10.0024 13.8771 10.0316 13.7874 10.084 13.7113C10.1363 13.6351 10.2096 13.5758 10.295 13.5404C10.3804 13.5051 10.4742 13.4953 10.5651 13.5121C10.656 13.529 10.74 13.5719 10.807 13.6355L10.8525 13.681C11.1276 13.9555 11.5004 14.1096 11.889 14.1096C12.2776 14.1096 12.6504 13.9555 12.9255 13.681L13.681 12.9265C13.9553 12.6512 14.1093 12.2784 14.1093 11.8897C14.1093 11.5011 13.9553 11.1283 13.681 10.853L13.6355 10.8075C13.57 10.7405 13.5261 10.6553 13.5096 10.563C13.4931 10.4707 13.5048 10.3756 13.543 10.29C13.5772 10.2047 13.6362 10.1315 13.7122 10.0798C13.7883 10.0281 13.878 10.0004 13.97 10H14.034C14.4227 9.9996 14.7953 9.84502 15.0702 9.57018C15.345 9.29534 15.4996 8.92269 15.5 8.534V7.466C15.4996 7.07731 15.345 6.70466 15.0702 6.42982C14.7953 6.15498 14.4227 6.0004 14.034 6ZM14.5 8.534C14.4999 8.65755 14.4507 8.776 14.3634 8.86337C14.276 8.95073 14.1576 8.99987 14.034 9H13.97C13.6798 9.00247 13.3968 9.09029 13.1563 9.25252C12.9157 9.41474 12.7282 9.64419 12.6171 9.91226C12.5061 10.1803 12.4764 10.4752 12.5317 10.76C12.5871 11.0448 12.7251 11.3071 12.9285 11.514L12.9735 11.5595C13.0608 11.647 13.1098 11.7656 13.1098 11.8892C13.1098 12.0129 13.0608 12.1315 12.9735 12.219L12.218 12.9735C12.1306 13.0609 12.0121 13.11 11.8885 13.11C11.7649 13.11 11.6464 13.0609 11.559 12.9735L11.514 12.928C11.307 12.7248 11.0448 12.5871 10.76 12.5318C10.4752 12.4766 10.1805 12.5063 9.91256 12.6173C9.64458 12.7284 9.41518 12.9157 9.25292 13.1562C9.09066 13.3966 9.0027 13.6795 9 13.9695V14.034C8.99987 14.1576 8.95073 14.276 8.86337 14.3634C8.776 14.4507 8.65755 14.4999 8.534 14.5H7.466C7.34245 14.4999 7.224 14.4507 7.13663 14.3634C7.04927 14.276 7.00013 14.1576 7 14.034V13.9695C6.9986 13.6789 6.91139 13.3951 6.74932 13.1539C6.58725 12.9126 6.35754 12.7246 6.08901 12.6134C5.82048 12.5022 5.5251 12.4728 5.23991 12.5288C4.95473 12.5849 4.69246 12.7239 4.486 12.9285L4.4405 12.974C4.35298 13.0611 4.2345 13.1101 4.111 13.1101C3.9875 13.1101 3.86902 13.0611 3.7815 12.974L3.0265 12.2195C2.93921 12.132 2.89019 12.0134 2.89019 11.8897C2.89019 11.7661 2.93921 11.6475 3.0265 11.56L3.072 11.5145C3.2756 11.3076 3.41374 11.0452 3.46919 10.7603C3.52465 10.4753 3.49495 10.1803 3.38381 9.91214C3.27268 9.64394 3.08502 9.41442 2.84426 9.25221C2.6035 9.09 2.3203 9.00228 2.03 9H1.966C1.84245 8.99987 1.724 8.95073 1.63663 8.86337C1.54927 8.776 1.50013 8.65755 1.5 8.534V7.466C1.50013 7.34245 1.54927 7.224 1.63663 7.13663C1.724 7.04927 1.84245 7.00013 1.966 7H2.03C2.32015 6.99753 2.60316 6.90971 2.84374 6.74748C3.08432 6.58526 3.27183 6.35581 3.38289 6.08774C3.49394 5.81967 3.52363 5.52484 3.46826 5.24C3.41289 4.95517 3.2749 4.69294 3.0715 4.486L3.0265 4.4405C2.93924 4.35304 2.89023 4.23454 2.89023 4.111C2.89023 3.98746 2.93924 3.86896 3.0265 3.7815L3.7815 3.026C3.86889 2.93862 3.98741 2.88952 4.111 2.88952C4.23459 2.88952 4.35311 2.93862 4.4405 3.026L4.4855 3.0715C4.69247 3.2748 4.95469 3.41272 5.23948 3.46807C5.52427 3.52343 5.81905 3.49377 6.08711 3.38279C6.35517 3.27182 6.58465 3.08443 6.74698 2.84397C6.9093 2.60351 6.9973 2.32061 7 2.0305V1.966C7.00013 1.84245 7.04927 1.724 7.13663 1.63663C7.224 1.54927 7.34245 1.50013 7.466 1.5H8.534C8.65755 1.50013 8.776 1.54927 8.86337 1.63663C8.95073 1.724 8.99987 1.84245 9 1.966V2.0305C9.00257 2.32061 9.09046 2.60355 9.25272 2.84406C9.41498 3.08456 9.64444 3.27199 9.91249 3.38299C10.1805 3.49398 10.4753 3.52363 10.7601 3.46824C11.0449 3.41285 11.3071 3.27487 11.514 3.0715L11.5595 3.026C11.6469 2.93862 11.7654 2.88952 11.889 2.88952C12.0126 2.88952 12.1311 2.93862 12.2185 3.026L12.9735 3.7815C13.0608 3.86896 13.1098 3.98746 13.1098 4.111C13.1098 4.23454 13.0608 4.35304 12.9735 4.4405L12.928 4.486C12.7246 4.69297 12.5866 4.95525 12.5312 5.24013C12.4759 5.525 12.5056 5.81987 12.6167 6.08796C12.7278 6.35606 12.9154 6.5855 13.1561 6.74769C13.3967 6.90988 13.6798 6.99763 13.97 7H14.034C14.1576 7.00013 14.276 7.04927 14.3634 7.13663C14.4507 7.224 14.4999 7.34245 14.5 7.466V8.534Z" fill="#6B7280" />
                                        <path d="M8 4.5C7.30777 4.5 6.63108 4.70527 6.05551 5.08986C5.47993 5.47444 5.03133 6.02107 4.76642 6.66061C4.50152 7.30015 4.4322 8.00388 4.56725 8.68282C4.7023 9.36175 5.03564 9.98539 5.52513 10.4749C6.01461 10.9644 6.63825 11.2977 7.31719 11.4327C7.99612 11.5678 8.69985 11.4985 9.33939 11.2336C9.97893 10.9687 10.5256 10.5201 10.9101 9.9445C11.2947 9.36892 11.5 8.69223 11.5 8C11.4989 7.07207 11.1299 6.18244 10.4737 5.5263C9.81756 4.87015 8.92793 4.50106 8 4.5ZM8 10.5C7.50555 10.5 7.0222 10.3534 6.61108 10.0787C6.19995 9.80397 5.87952 9.41352 5.6903 8.95671C5.50108 8.49989 5.45157 7.99723 5.54804 7.51227C5.6445 7.02732 5.8826 6.58186 6.23223 6.23223C6.58187 5.8826 7.02732 5.6445 7.51228 5.54804C7.99723 5.45157 8.4999 5.50108 8.95671 5.6903C9.41353 5.87952 9.80397 6.19995 10.0787 6.61107C10.3534 7.0222 10.5 7.50555 10.5 8C10.4992 8.6628 10.2356 9.29822 9.76689 9.76689C9.29822 10.2356 8.6628 10.4992 8 10.5Z" fill="#6B7280" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1207_21014">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span>General settings</span>
                            </button>

                            <button
                                type='button'
                                onClick={() => setActiveTab(1)}
                                className={activeTab === 1 ? 'activeTab' : ''}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1229_25488)">
                                        <path d="M9.99957 6.50074H9.49961V5.50082C9.49961 4.39791 8.60268 3.50098 7.49977 3.50098C6.39685 3.50098 5.49992 4.39791 5.49992 5.50082V6.50074H4.99996C4.72398 6.50074 4.5 6.72472 4.5 7.0007V11.0004C4.5 11.2764 4.72398 11.5004 4.99996 11.5004H9.99957C10.2755 11.5004 10.4995 11.2764 10.4995 11.0004V7.0007C10.4995 6.72472 10.2755 6.50074 9.99957 6.50074ZM6.49984 5.50082C6.49984 4.94986 6.94781 4.5009 7.49977 4.5009C8.05172 4.5009 8.49969 4.94986 8.49969 5.50082V6.50074H6.49984V5.50082ZM9.49961 10.5004H5.49992V7.50066H9.49961V10.5004Z" fill="#4B5563" />
                                        <path d="M15.6858 5.03662C15.4288 4.93363 15.1378 5.05862 15.0368 5.3156L14.7378 6.06354C13.8789 2.86479 10.9641 0.500977 7.49941 0.500977C3.36374 0.500977 0 3.86471 0 8.00039C0 12.1361 3.36374 15.4998 7.49941 15.4998C9.50226 15.4998 11.3851 14.7199 12.803 13.303C12.998 13.108 12.998 12.791 12.803 12.596C12.608 12.401 12.291 12.401 12.0961 12.596C10.8672 13.8239 9.23428 14.4999 7.49941 14.4999C3.91569 14.4999 0.999922 11.5841 0.999922 8.00039C0.999922 4.41667 3.91569 1.5009 7.49941 1.5009C10.6202 1.5009 13.233 3.71273 13.8559 6.6505L12.853 5.64657C12.658 5.45159 12.341 5.45159 12.1461 5.64657C11.9511 5.84156 11.9511 6.15853 12.1461 6.35352L14.1459 8.35336C14.1569 8.36436 14.1719 8.36836 14.1839 8.37836C14.2219 8.41036 14.2609 8.44136 14.3069 8.46035C14.3669 8.48735 14.4329 8.50035 14.4989 8.50035C14.5319 8.50035 14.5659 8.49735 14.5999 8.49035C14.6139 8.48735 14.6239 8.47635 14.6369 8.47235C14.6879 8.45735 14.7338 8.43436 14.7768 8.40536C14.7958 8.39236 14.8148 8.38336 14.8318 8.36836C14.8868 8.31837 14.9328 8.25937 14.9618 8.18938C14.9618 8.18838 14.9628 8.18738 14.9638 8.18638L15.9638 5.68657C16.0667 5.43059 15.9428 5.13961 15.6858 5.03662Z" fill="#4B5563" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1229_25488">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Change password</span>
                            </button>

                            <button
                                type='button'
                                onClick={() => setActiveTab(2)}
                                className={activeTab === 2 ? 'activeTab' : ''}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1552 12.6075V11H11.4652C12.2922 11 12.9652 10.327 12.9652 9.5V2C12.9652 1.173 12.2922 0.5 11.4652 0.5H4.53516C3.70816 0.5 3.03516 1.173 3.03516 2V9.5C3.03516 10.327 3.70816 11 4.53516 11H4.86966C4.70666 11.97 5.58416 13.2905 5.97966 13.8255L5.77966 14.909C5.76631 14.9811 5.76899 15.0553 5.78752 15.1263C5.80605 15.1973 5.83997 15.2633 5.88687 15.3197C5.93378 15.3761 5.99252 15.4215 6.05893 15.4527C6.12535 15.4838 6.1978 15.5 6.27116 15.5H10.3127C10.384 15.4999 10.4545 15.4846 10.5194 15.4551C10.5843 15.4255 10.6422 15.3824 10.689 15.3287C10.7359 15.2749 10.7708 15.2118 10.7912 15.1434C10.8117 15.0751 10.8173 15.0032 10.8077 14.9325L10.6357 13.6715L10.7692 13.538C10.8919 13.4161 10.9891 13.2712 11.0554 13.1114C11.1217 12.9517 11.1556 12.7804 11.1552 12.6075ZM10.1552 12.6075C10.1548 12.6911 10.1216 12.7712 10.0627 12.8305L9.75316 13.1395C9.69867 13.194 9.65753 13.2603 9.63299 13.3334C9.60844 13.4064 9.60113 13.4842 9.61166 13.5605L9.73966 14.5H6.87216L7.00266 13.79C7.01568 13.72 7.01362 13.648 6.99664 13.5789C6.97965 13.5097 6.94813 13.445 6.90416 13.389C6.40266 12.752 5.72416 11.5945 5.86016 11.1355C5.95416 10.818 6.06166 10.731 6.06516 10.7105C6.06666 10.7075 6.06916 10.7055 6.07016 10.7025C6.14435 10.7227 6.22219 10.7255 6.29765 10.7108C6.37311 10.6961 6.44417 10.6642 6.50532 10.6175C6.56648 10.5709 6.61608 10.5109 6.6503 10.442C6.68452 10.3732 6.70244 10.2974 6.70266 10.2205V7.491C6.70589 7.41009 6.74031 7.33356 6.7987 7.27746C6.85709 7.22135 6.93493 7.19002 7.01591 7.19002C7.09688 7.19002 7.17472 7.22135 7.23311 7.27746C7.29151 7.33356 7.32592 7.41009 7.32916 7.491V8.216C7.32916 8.7215 7.60766 9.181 8.05616 9.415L9.73616 10.2905C9.99466 10.4255 10.1552 10.69 10.1552 10.9805V12.6075ZM10.1982 9.404L8.51866 8.5285C8.46136 8.49886 8.41333 8.45403 8.37981 8.39891C8.3463 8.34379 8.3286 8.28051 8.32866 8.216V7.491C8.32813 7.14293 8.18962 6.80927 7.9435 6.56315C7.69738 6.31703 7.36372 6.17853 7.01566 6.178C6.66759 6.17853 6.33393 6.31703 6.08781 6.56315C5.84169 6.80927 5.70319 7.14293 5.70266 7.491V9.798C5.59016 9.84844 5.4865 9.91665 5.39566 10H4.53516C4.25966 10 4.03516 9.776 4.03516 9.5V2C4.03516 1.7245 4.25966 1.5 4.53516 1.5H11.4652C11.7407 1.5 11.9652 1.7245 11.9652 2V9.5C11.9652 9.776 11.7407 10 11.4652 10H10.8572C10.6916 9.74868 10.4648 9.54358 10.1982 9.404Z" fill="#6B7280" />
                                    <path d="M9.94259 2.5H6.05859C5.92599 2.5 5.79881 2.55268 5.70504 2.64645C5.61127 2.74021 5.55859 2.86739 5.55859 3C5.55859 3.13261 5.61127 3.25979 5.70504 3.35355C5.79881 3.44732 5.92599 3.5 6.05859 3.5H9.94259C10.0752 3.5 10.2024 3.44732 10.2961 3.35355C10.3899 3.25979 10.4426 3.13261 10.4426 3C10.4426 2.86739 10.3899 2.74021 10.2961 2.64645C10.2024 2.55268 10.0752 2.5 9.94259 2.5ZM9.94259 4.339H6.05859C5.92599 4.339 5.79881 4.39168 5.70504 4.48545C5.61127 4.57921 5.55859 4.70639 5.55859 4.839C5.55859 4.97161 5.61127 5.09879 5.70504 5.19255C5.79881 5.28632 5.92599 5.339 6.05859 5.339H9.94259C10.0752 5.339 10.2024 5.28632 10.2961 5.19255C10.3899 5.09879 10.4426 4.97161 10.4426 4.839C10.4426 4.70639 10.3899 4.57921 10.2961 4.48545C10.2024 4.39168 10.0752 4.339 9.94259 4.339Z" fill="#6B7280" />
                                </svg>
                                <span>Manage subscription</span>
                            </button>
                        </div>

                        <div className='settings_content_tabsPanel'>
                            {activeTab === 0 && <General />}
                            {activeTab === 1 && <ChangePassword />}
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </Content>
    )
}

export default Index