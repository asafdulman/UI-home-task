import arrowDownCharts from '../assets/images/charts/arrow-down-charts.png';

export function Charts() {
    return (
        <div className="charts-container">
            <div className="sales-box">
                <div className="sales-top">
                    <h2>Your Sales</h2>
                    <div className="period-box">
                        <span>Period: </span>
                        Last Year
                        <img className="arrow-down-charts" src={arrowDownCharts} alt="Arrow down" />
                    </div>
                </div>
                <div className="pseudo-sales-chart"></div>
            </div>
            <div className="report-box">
                <div className="report-top">
                    <h2>Report</h2>
                    <div className="period-box">
                        <span>Period: </span>
                        Last Year
                        <img className="arrow-down-charts" src={arrowDownCharts} alt="Arrow down" />
                    </div>
                </div>
                <div className="pseudo-report-chart"></div>
            </div>
        </div>
    )
}
