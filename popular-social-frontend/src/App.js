import styled from 'styled-components'
import Feed from './components/Feed'
import Header from './components/Header'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'
import { useStateValue } from './StateProvider';
import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    var pusher = new Pusher('c7c5ffad28686301c5d1', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });
    setMessages([...messages, data])
    });
  return () => {
    channel.unbind_all()
    channel.unsubscribe()
  };

} [messages];

console.log(messages)

  return (
    <AppWrapper>
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      ) : (
        <Login />
      )}
    </AppWrapper>
  );


const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`

export default App;
