import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from "../store";
const _ = require("lodash");

const App = () => {

    const { contacts, user, activeUserId  } = store.getState();
    return (
        <div className="App">
            <Sidebar contacts={_.values(contacts)} />
            <Main user={user} activeUserId={activeUserId} />
        </div>
    );
};

export default App