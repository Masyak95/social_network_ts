import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from './redux/redux-store';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppType = {
    store: typeof store
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile store={store}/>}/>
                        <Route path='/dialogs' element={<DialogsContainer store={store}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

