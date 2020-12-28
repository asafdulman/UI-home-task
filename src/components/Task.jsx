import options from '../assets/images/tasks/task-options.png'
export function Task({ task }) {

    const showDueDate = () => {
        const time = Date.now()
        const timeDiffernce = task.dueDate.getTime() - time
        const days = Math.floor(timeDiffernce / (1000 * 60 * 60 * 24));
        return days
    }

    return (
        <div className="task-box">
            <div className="task-first-letter-box">{task.title.charAt(0)}</div>
            <div className="task-info">
                <h3>{task.title}</h3>
                <div className="task-date">
                    <i className={(showDueDate() > 0) ? 'grey far fa-clock' : 'pink far fa-clock'}></i>
                    <p className={(showDueDate() > 0) ? 'grey' : 'pink'}>{(showDueDate() > 0) ? `${showDueDate()} days left` : `${-showDueDate()} days delays`}</p>
                </div>
            </div>
            <img className="task-options-img" src={options} alt="" />
        </div>
    )
}
