import React from 'react';
import { Line } from 'react-chartjs-2';

const Charts = () => {
    return (
        <div className="chart-container">
            <Line className = "chart"
                data={{
                    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        label: '# of Votes',
                        data: [5, 6, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={500}
                width={500}
                options = {{
                    maintainAspectRatio:false
                }}
            />
            <div className="chart-progress-line">
                <div className="individual-line-container line-1">
                    <div className = "circle-name-container">
                        <div className="chart-circle"></div>
                        <span className="name">Applications</span>
                    </div>
                    <div className="line-bar-full">
                        <div className="line-bar-half"></div>
                    </div>
                </div>
                <div className="individual-line-container line-2">
                    <div  className = "circle-name-container">
                        <div className="chart-circle"></div>
                        <span className="name">Short Listed</span>
                    </div>
                    <div className="line-bar-full">
                        <div className="line-bar-half"></div>
                    </div>
                </div>
                <div className="individual-line-container line-3">
                    <div  className = "circle-name-container">
                        <div className="chart-circle"></div>
                        <span className="name">Applications</span>
                    </div>
                    <div className="line-bar-full">
                        <div className="line-bar-half"></div>
                    </div>
                </div>
                <div className="individual-line-container line-4">
                    <div  className = "circle-name-container">
                        <div className="chart-circle"></div>
                        <span className="name">Short Listed</span>
                    </div>
                    <div className="line-bar-full">
                        <div className="line-bar-half"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Charts