import options from '../assets/images/messages/options.png'
import replay from '../assets/images/messages/replay-message.png'

export function Message({ message }) {

    const setClassByReadMessage = () => {
        return (message.isRead) ? 'message-box-read' : 'message-box-unread'
    }

    return (
        <div className={setClassByReadMessage()}>
            <img className="message-img" src={message.img} alt="" />
            <div className="message-info">
                <div className="message-info-top">
                    <h4>{message.sender}</h4>
                    <span>{message.time}</span>
                </div>
                <div className="message-content">
                    <p>{message.content}</p>
                </div>
                <div className="action-btns-box">
                    <img src={replay} alt="" />
                    <img src={options} alt="" />
                </div>

            </div>
        </div>
    )
}
