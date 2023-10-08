import styles from "./ThemeSwitcher.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import ThemeLight from "shared/assets/icons/themeLight.svg";
import ThemeDark from "shared/assets/icons/theme-dark.svg";
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <ThemeLight/> : <ThemeDark />}
        </Button>
    );
};

export default ThemeSwitcher;