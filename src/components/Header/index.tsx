"use client";

import IconButton from "@components/IconButton";
import cartPageIconSrc from "@public/icons/cartIcon.svg";
import marketPageIconSrc from "@public/icons/bookMarketIcon.svg";
import { IconButtonFlexTypes, IconButtonTypes } from "@components/IconButton";
import { usePathname, useRouter } from "next/navigation";
import { RoutesUrls } from "@utils/constants";
import { type ReactElement } from "react";
import "./style.css";

const Header = (): ReactElement => {
    const router = useRouter();
    const pathname = usePathname();

    const redirectOnRoute = (route: string): void => {
        router.push(route);
    };

    return (
        <header className="app-header">
            <IconButton
                src={marketPageIconSrc}
                isActive={pathname === RoutesUrls.MARKET}
                alt={"market-page-icon"}
                onClick={() => redirectOnRoute(RoutesUrls.MARKET)}
                label={`Каталог`}
            />
            <IconButton
                src={cartPageIconSrc}
                alt={"cart-page-icon"}
                isActive={pathname === RoutesUrls.CART}
                type={IconButtonTypes.GHOST}
                onClick={() => redirectOnRoute(RoutesUrls.CART)}
                label={`Корзина`}
                flexType={IconButtonFlexTypes.COLUMN}
            />
        </header>
    );
};

export default Header;
