import ninaImg from '../assets/images/users/nina.jpg'
import jamesImg from '../assets/images/users/james.jpg'
import alexImg from '../assets/images/users/alex.jpg'
import alexandraImg from '../assets/images/users/alexandra.jpg'
import { ActivityPreview } from './ActivityPreview'


export function ActivityList() {

    const activities = [
        {
            id: 'a101',
            name: 'Nina Jones',
            img: ninaImg,
            action: 'added a new project',
            project: 'Free UI Kit',
            time: 'Just now'
        },
        {
            id: 'a102',
            name: 'James Smith',
            img: jamesImg,
            action: 'commented project',
            project: 'Free PSD Template',
            time: '40 minutes ago'
        },
        {
            id: 'a103',
            name: 'Alex Clooney',
            img: alexImg,
            action: 'completed task',
            project: 'Symu Website',
            time: '1 hour ago'
        },
        {
            id: 'a104',
            name: 'Alexandra Spears',
            img: alexandraImg,
            action: 'added a new project',
            project: 'Free PSD (...)',
            time: '3 hours ago'
        },
    ]

    return (
        <div className="activity-list-box">
            <header className="activity-header">
                <h1>Activity</h1>
                <p>10</p>
            </header>
            <div className="activity-list">
                <div className="time-line"></div>
                {activities.map(activity => <ActivityPreview key={activity.id} activity={activity} />)}
            </div>
        </div>
    )
}
