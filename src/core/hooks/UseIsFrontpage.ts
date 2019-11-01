import { useState, useEffect } from "react";
import { NavRoute } from "../../components/Navigation/Navigation";

export function useIsFrontpage(pathname: string, routes: NavRoute[]) {
    const [isFrontpage, setIsFrontpage] = useState(true);
    useEffect(() => {
        const isNotFound = routes.every((route) => route.url !== pathname);
        setIsFrontpage(pathname === '/' || isNotFound);
    }, [pathname, routes]);  
    return isFrontpage
}