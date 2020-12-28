export function ActivityPreview({ activity }) {
    return (
        <div className="activity-preview-box">
            <img src={activity.img} alt="" />
            <div className="activity-content-and-time">
                <div className="activity-content">
                    <p>{activity.name}</p>
                    <p>{activity.action}</p>
                    <p>{activity.project}</p>
                </div>
                <div className="activity-time-box">
                    <i className="far fa-clock"></i>
                    <p>{activity.time}</p>
                </div>
            </div>
        </div>
    )
}
