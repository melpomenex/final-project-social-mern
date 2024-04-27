import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import { useStateValue } from './StateProvider';
import Pusher from 'pusher-js';

function App() {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue(); // Assuming useStateValue provides user state

  useEffect(() => {
    const pusher = new Pusher('c7c5ffad28686301c5d1', {
      cluster: 'mt1',
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []); // Removed messages from dependency array to avoid re-subscribing on every message

  console.log(messages);

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
}

const AppWrapper = styled.div`
  background-color: #f1f2f5;
`

export default App;
