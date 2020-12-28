import logo from '../assets/images/logo.png'
import home from '../assets/images/side-bar/home.png'
import workflow from '../assets/images/side-bar/workflow.png'
import statistics from '../assets/images/side-bar/statistics.png'
import calendar from '../assets/images/side-bar/calendar.png'
import users from '../assets/images/side-bar/users.png'
import settings from '../assets/images/side-bar/settings.png'

export function SideBar({ isSideBarOpen }) {

    return (
        <div className={(isSideBarOpen) ? "side-bar-box" : "side-bar-box-close"}  >
            <header className="side-bar-header">
                <img src={logo} alt="" />
            </header>
            <div className="side-bar-list-box">
                <div className="side-bar-item-box">
                    <img src={home} alt="" />
                    <h3>Home</h3>
                </div>
                <div className="side-bar-item-box">
                    <img src={workflow} alt="" />
                    <h3>Workflow</h3>
                </div>
                <div className="side-bar-item-box">
                    <img src={statistics} alt="" />
                    <h3>Statistics</h3>
                </div>
                <div className="side-bar-item-box">
                    <img src={calendar} alt="" />
                    <h3>Calendar</h3>
                </div>
                <div className="side-bar-item-box">
                    <img src={users} alt="" />
                    <h3>Users</h3>
                </div>
                <div className="side-bar-item-box">
                    <img src={settings} alt="" />
                    <h3>Settings</h3>
                </div>
            </div>
        </div>
    )
}
