import React from 'react';
import styles from "./Navbar.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLickTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.nav, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink theme={AppLickTheme.SECONDARY} to={'/about'} className={styles.mainLink}>About</AppLink>
                <AppLink theme={AppLickTheme.SECONDARY}  to={'/'}>Main</AppLink>
            </div>
        </div>
    );
};

export default Navbar;