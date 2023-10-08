import styles from "./Navbar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLickTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.nav, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink theme={AppLickTheme.SECONDARY} to={'/about'} className={styles.mainLink}>{t("О сайте")}</AppLink>
                <AppLink theme={AppLickTheme.SECONDARY} to={'/'}>{t("Главная страница")}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;