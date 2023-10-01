import React, { Suspense } from 'react';
import Counter from "./Components/Counter/Counter";
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className='App'>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Counter />
            Hello world!!!

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                    </Routes>
                </Suspense>

        </div>
    );
};

export default App;