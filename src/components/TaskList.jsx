import { Task } from "./Task"


export function TaskList() {

    const tasks = [
        {
            id: 't101',
            title: 'New website for Symu.co',
            dueDate: new Date('December 23, 2020 23:15:30')
        },
        {
            id: 't102',
            title: 'Free business PSD Template',
            dueDate: new Date('December 26, 2020 23:15:30')
        },
        {
            id: 't103',
            title: 'New logo for JCD.pl',
            dueDate: new Date('January 02, 2021 23:15:30')
        },
        {
            id: 't104',
            title: 'Free Icons Set vol. 3',
            dueDate: new Date('January 07, 2021 23:15:30')
        },
    ]

    return (
        <div className="tasks-box">
            <header className="task-header">
                <h1>Tasks</h1>
                <div className="tasks-stats-box">
                    <p>5</p>
                    <p>2</p>
                </div>
            </header>
            <div className="task-list">
                {tasks.map(task => <Task key={task.id} task={task} />)}
            </div>
        </div>
    )
}
