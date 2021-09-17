import React from 'react';
const Referrals = () => {
    return (
        <div className="referral-container">
            <div className="referral-heading">
                <h3>Referral and Campaign Stats</h3>
                <div>
                    <h3>40 campapigns sent in total</h3>
                    <h4>4 campaigns sent in last month</h4>
                </div>
            </div>

            <div className="referral-details">
                <div className="referral">
                    <h3>Users reached</h3>
                    <div className="referral-percentage-inc">
                        <i className="zmdi zmdi-arrow-right-top"></i>
                        <p>+3.59%</p>
                    </div>
                    <h2>7516</h2>

                </div>
                <div className="referral">
                    <h3>Referrals</h3>
                    <div className="referral-percentage-inc">
                        <i className="zmdi zmdi-arrow-right-top"></i>
                        <p>+9.01</p>
                    </div>
                    <h2>0062</h2>

                </div>
                <div className="referral">
                    <h3>Shares</h3>
                    <div className="referral-percentage-inc">
                        <i className="zmdi zmdi-arrow-right-top"></i>
                        <p>+31.59%</p>
                    </div>
                    <h2>1478</h2>

                </div>
                <div className="referral">
                    <h3>Applications</h3>
                    <div className="referral-percentage-inc">
                        <i className="zmdi zmdi-arrow-right-top"></i>
                        <p>+12.00%</p>
                    </div>
                    <h2>0564</h2>

                </div>
            </div>

            <div className="referral-buttons">
                <button className = "btn-1">Start a new campaign</button>
                <button className = "btn-2">Pause all running campaigns</button>
            </div>
        </div >
    )
}

export default Referrals
