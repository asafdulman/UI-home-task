import arrowLeft from '../assets/images/top-bar/arrow-left.png';
import arrowDown from '../assets/images/top-bar/arrow-down-header.png';
import menu from '../assets/images/top-bar/menu.png';
import messages from '../assets/images/top-bar/messages.png';
import notifications from '../assets/images/top-bar/notifications.png';
import profile from '../assets/images/top-bar/profile.JPG';
import search from '../assets/images/top-bar/search.png';

export function TopBar({ isSideBarOpen, setIsSideBarOpen }) {
    return (
        <div className="top-bar-box">
            <div className="top-bar-left-box">
                <img className="arrow-left-img" src={arrowLeft} alt="Arrow left" />
                <img onClick={() => {setIsSideBarOpen(!isSideBarOpen)}} className="menu-img" src={menu} alt="Menu" />
                <img className="search-img" src={search} alt="Search" />
            </div>
            <div className="top-bar-right-box">
                <button className="add-project-btn"><span>+</span> Add project</button>
                <img className="messages-img" src={messages} alt="Messages" />
                <div className="notifictions-box">
                    <img className="notifications-img" src={notifications} alt="Notifications" />
                    <span>3</span>
                </div>
                <div className="profile-img-box">
                    <img className="profile-img" src={profile} alt="Profile" />
                    <img className="arrow-down-img" src={arrowDown} alt="Arrow down" />
                </div>
            </div>

        </div>
    )
}
