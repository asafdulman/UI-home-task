import { useState } from 'react';
import { ActivityList } from './components/ActivityList';
import { Charts } from './components/Charts';
import { MessagesList } from './components/MessagesList';
import { SideBar } from './components/SideBar';
import { TaskList } from './components/TaskList';
import { TopBar } from './components/TopBar';

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  const containerStyle = {
    marginLeft: isSideBarOpen ? "320px" : "0",
  };

  return (
    <div className="app">
      <div className="side-bar">
        <SideBar isSideBarOpen={isSideBarOpen} />
      </div>
      <div style={containerStyle} className="container">
        <header className="top-bar-header">
          <TopBar setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />
        </header>
        <main className="main-container">
          <h1 className="user-heading">Hello John!</h1>
          <Charts />
          <div className="bottom-container">
            <TaskList />
            <MessagesList />
            <ActivityList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
