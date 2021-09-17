import React from 'react'
import './Applicants.css';

const Applicants = ({ ApplicantsData }) => {
    return (
        <div className="applicants-container">
            <div className="applicants-heading">
                <h3>Hello John Bayer</h3>
                <h3>You have 8 new Applicants Today</h3>
            </div>
            <div className="applicants-image">
            </div>

            {
                ApplicantsData.map((curr) => {
                    return (
                        <>
                            <div className="applicants-list" key={curr.id}>
                                <div className="applicants-name-work">
                                    <i className="zmdi zmdi-account"></i>
                                    <div className="applicants-name">
                                        <h3>{curr.name}</h3>
                                        <p>Assigned to <span>{curr.work}</span></p>
                                    </div>
                                </div>
                                <div className="applicants-icon-container">
                                    <i className="zmdi zmdi-comment-text-alt"></i>
                                    <i className="zmdi zmdi-phone"></i>
                                </div>
                            </div>
                        </>
                    )
                })};
        </div>
    )
}

export default Applicants