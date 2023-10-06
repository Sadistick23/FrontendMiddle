import styles from "./Sidebar.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.LangSwitcher} />
            </div>
        </div>
    );
};

export default Sidebar;