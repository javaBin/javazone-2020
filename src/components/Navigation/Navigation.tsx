import classnames from 'classnames';
import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useRef, useEffect, useState } from 'react';
import { useWindowWidth } from '../../core/hooks/UseWindowWidth';
import { useIsFrontpage } from '../../core/hooks/UseIsFrontpage';

const logo = `${process.env.PUBLIC_URL}/logo-sharp.svg`;

export type NavigationPosition = 'start' | 'end';

const MENU_WIDTH = 900;

export interface NavRoute {
    title: string;
    url: string;
    show: boolean;
}

interface NavigationProps extends RouteComponentProps {
    routes: NavRoute[];
    displayBrand?: boolean;
    position?: NavigationPosition;
    sticky?: boolean;
    isNotFound?: boolean;
}

interface NavigationState {
    subMenuItems: NavRoute[];
}

function Navigation(props: NavigationProps) {

    const windowWidth = useWindowWidth();
    const isFrontpage = useIsFrontpage(props.location.pathname, props.routes);

    const componentClass = classnames(
        styles.navigation,
        {[styles.space]: windowWidth <= MENU_WIDTH},
        {[styles.frontpage]: isFrontpage || props.isNotFound},
        {[styles.navigationSticky]: props.sticky},
        {[styles.navigationEnd]: props.position === 'end'}
    );

    function renderMenuButton() {
        return (
            <MenuButton pathname={props.location.pathname} routes={props.routes} />
        )
    }

    return (
        <div className={componentClass}>
            {props.displayBrand ? <Brand /> : null}
            {windowWidth <= MENU_WIDTH
                ? renderMenuButton()
                : props.routes.map((navRoute: NavRoute) => {
                    return (
                        navRoute.show ? <NavItem pathname={props.location.pathname} key={navRoute.title} route={navRoute} /> : null
                    )
                })}
        </div>
    )
}

Navigation.defaultProps = {
    displayBrand: true,
    sticky: false
}

interface MenuButtonProps {
    routes: NavRoute[];
    pathname: string;
}

function MenuButton(props: MenuButtonProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleOpenMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <button className={styles.menu} onClick={handleOpenMenu}>
                <img src={isMenuOpen ? './x.svg' : './menu.svg'} alt="menu"/>
            </button>
            {isMenuOpen ? <div className={styles.menuContainer}>
                {props.routes.map(route => {
                    return route.show ? <NavItem itemClicked={handleOpenMenu} pathname={props.pathname} key={route.title} route={route} /> : null
                })}
            </div> : null}
        </>
    )
}

interface NavItemProps {
    route: NavRoute;
    activeRoute?: boolean;
    pathname: string;
    itemClicked?: () => void;
}

const NavItem: React.StatelessComponent<NavItemProps> = (props: NavItemProps) => {
    const navItemRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [isActiveRoute, setIsActiveRoute] = useState(false);
    const [elementPosition, setElementPosition] = useState(0);

    useEffect(() => {
        if(navItemRef.current && elementPosition === 0) {
            setElementPosition(navItemRef.current.offsetWidth + navItemRef.current.offsetLeft);
        }
    }, [elementPosition]);

    useEffect(() => {
        setIsActiveRoute(props.pathname === props.route.url);
    }, [props.pathname, props.route.url]);

    const componentClass = classnames(
        styles.navigationNavItem,
        {[styles.active]: isActiveRoute}
    );

    return (
        <Link onClick={props.itemClicked} to={props.route.url}>
            <div ref={navItemRef} className={componentClass}>
                {props.route.title}
            </div>
        </Link>
    )
}

NavItem.defaultProps = {
    activeRoute: false
}

interface BrandProps {
    title?: string;
    displayLogo?: boolean;
}

const Brand: React.StatelessComponent<BrandProps> = (props) => {
    return (
        <Link to="/">
            <div className={styles.navigationBrand}>
                <img src={logo} alt="Logo" />
				<h1>{props.title}</h1>
            </div>
        </Link>
    )
}

Brand.defaultProps = {
    displayLogo: true,
    title: 'JAVAZONE'
}

export default withRouter(Navigation);