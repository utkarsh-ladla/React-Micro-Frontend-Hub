// import React, { Suspense, lazy } from 'react'
// const RemoteApp = React.lazy(() => import('chat/App'))
// // import RemoteApp from "./chat/App"
// import HostApp from './host/HostApp'


// function App() {
//     return (
//         <div>hiii this is host
//             <HostApp />
//             <Suspense fallback={<div>Loading...</div>}>
//                 <RemoteApp />
//             </Suspense>
//         </div>

//     )
// }

// export default App

import React, { useState, Suspense, lazy } from 'react';
// import HostApp from './host/HostApp';
import Sidebar from './components/Sidebar';

// Lazy-load Micro-Frontends
const ChatApp = lazy(() => import('app2/App'));
const EmailApp = lazy(() => import('app3/App'));

function App() {
  const [activeApp, setActiveApp] = useState('chat');

 

  return (
    <div style={styles.container}>
      <Sidebar onSelectApp={setActiveApp} activeApp={activeApp} />
      <div style={styles.contentArea}>
        {/* <HostApp /> */}
        <ChatApp />
        <EmailApp />
        {/* <Suspense fallback={<div>Loading...</div>}>
          {renderApp()}
        </Suspense> */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  },
  contentArea: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    overflowY: 'auto'
  }
};

export default App;
