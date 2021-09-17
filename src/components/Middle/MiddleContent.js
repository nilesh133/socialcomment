import React from 'react';
import './MiddleContent.css';
import Stats from './Stats';
import Referral from './Referrals';
import Charts from './Charts';

const MiddleContent = () => {
    return (
        <div>
            <Stats />
            <Charts />
            <Referral />
        </div>
    )
}

export default MiddleContent
