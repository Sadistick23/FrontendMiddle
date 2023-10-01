import React, {Suspense, useContext, useState} from 'react';
import Counter from "./Components/Counter/Counter";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Сменить тему</button>
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