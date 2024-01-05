import React from 'react';
import { StyledCards } from './style';

const Cards = () => {

    return (
        <StyledCards>
            <div className='card'>
                <div className='card_detail'>
                    <h3>Registered drivers</h3>
                    <p>32</p>
                </div>
                <div className='card_icon'>
                    <img src='/images/drivers-crd.svg' alt='crd' />
                </div>
            </div>

            <div className='card'>
                <div className='card_detail'>
                    <h3>Registered companies</h3>
                    <p>18</p>
                </div>
                <div className='card_icon'>
                    <img src='/images/companies-crd.svg' alt='crd' />
                </div>
            </div>

            <div className='card'>
                <div className='card_detail'>
                    <h3>Active job post</h3>
                    <p>11</p>
                </div>
                <div className='card_icon'>
                    <img src='/images/jobpost-crd.svg' alt='crd' />
                </div>
            </div>

            <div className='card'>
                <div className='card_detail'>
                    <h3>Pending verifications</h3>
                    <p>16</p>
                </div>
                <div className='card_icon'>
                    <img src='/images/pending-crd.svg' alt='crd' />
                </div>
            </div>
        </StyledCards>
    )
}

export default Cards