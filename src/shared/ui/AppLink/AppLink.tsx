import styles from "./AppLink.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {Link, type LinkProps} from "react-router-dom";
import {type FC} from "react";

export enum AppLickTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLickTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;