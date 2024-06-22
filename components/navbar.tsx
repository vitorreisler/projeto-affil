import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { CiShop } from "react-icons/ci";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { FaInstagram } from "react-icons/fa";
import { SearchIcon } from "@/components/icons";
import { FaAmazon } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";


export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar className="bg-red-600" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <CiShop className="text-4xl" />
            <p className="font-bold text-inherit">Visi Ofertas</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-1">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              className="hover:bg-yellow-200 hover:rounded transition-all hover:duration-700 py-1 px-2"
              key={item.href}
            >
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label === "Hotmart" ? (
                  <span className="flex items-center gap-1">
                    <FaComputer />
                    {item.label}
                  </span>
                ) : item.label === "Amazon" ? (
                  <span className="flex items-center gap-1">
                    <FaAmazon />
                    {item.label}
                  </span>
                ) : item.label === "Shopee" ? (
                  <span className="flex items-center gap-1">
                    <SiShopee />
                    {item.label}
                  </span>
                ) : item.label === "Mercado Livre" ? (
                  <span className="flex items-center gap-1">
                    <BsBagCheckFill />
                    {item.label}
                  </span>
                ) : item.label === "Grupo de Ofertas" ? (
                  <span className="flex items-center gap-1">
                    <FaPeopleGroup />
                    {item.label}
                  </span>
                ) : (
                  ""
                )}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex md:hidden basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex md:hidden gap-2">
          <Link
            isExternal
            href={siteConfig.links.instagram}
            aria-label="Instagram"
          >
            <FaInstagram className="text-gray-800" />
          </Link>
        </NavbarItem>
       { <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>}
      </NavbarContent>

      <NavbarContent className="sm:hidden md:flex basis-1" justify="end">
        <Link
          isExternal
          href={siteConfig.links.instagram}
          aria-label="Instagram"
        >
          <FaInstagram className="text-gray-800" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/*{searchInput}*/}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <a href={item.href}>{item.label}</a>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
