import { Message } from "./Message"
import ninaImg from '../assets/images/users/nina.jpg'
import jamesImg from '../assets/images/users/james.jpg'

export function MessagesList() {

    const messages = [
        {
            id: 'm101',
            sender: 'Nina Jones',
            img: ninaImg,
            content: 'Hey You! It’s me again :-) I attached new (...)',
            time: '5 minutes ago',
            isRead: false

        },
        {
            id: 'm102',
            sender: 'Nina Jones',
            img: ninaImg,
            content: 'Hey! I attached some new PSD files for (...)',
            time: 'About 20 hours ago',
            isRead: false
        },
        {
            id: 'm103',
            sender: 'James Smith',
            img: jamesImg,
            content: 'Good morning, you are fired!',
            time: '2 days ago',
            isRead: true
        },
        {
            id: 'm104',
            sender: 'Nina Jones',
            img: ninaImg,
            content: 'Hello! Could you bring me coffie please?',
            time: 'About 2 weeks ago',
            isRead: true
        },
    ]

    const countUnreadMessages = () => {
        const unreadMwssages = messages.filter(message => !message.isRead)
        return unreadMwssages.length
    }

    return (
        <div className="messages-box">
            <header className="message-header">
                <h1>Messages</h1>
                <p>{countUnreadMessages()}</p>
            </header>
            <div className="messages-list">
                {messages.map(message => <Message key={message.id} message={message} />)}
            </div>

        </div>
    )
}
