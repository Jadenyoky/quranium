"use client";

import React, { useState } from "react";
import SwitchMode from "../switch";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navList = [
    {
      title: "قراءة",
      icon: "book",
      link: "/surah/100",
    },
    {
      title: "استماع",
      icon: "headphones",
      link: "/surah/99",
    },
    {
      title: "بحث",
      icon: "search",
      link: "/surah/101",
    },
  ];
  return (
    <>
      <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p
              className="text-lg"
              style={{
                fontFamily: "amiri",
              }}
            >
              QURANIUM
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Tabs
              variant="bordered"
              color="secondary"
              aria-label="Tabs colors"
              radius="full"
              selectedKey={pathname}
            >
              {navList.map((e, k) => {
                return (
                  <Tab
                    key={e.link}
                    style={{
                      fontFamily: "amiri",
                    }}
                    title={
                      <div className="flex space-x-2 drop-shadow-lg">
                        <span className=" text-base ">{e.title}</span>
                        <span className="material-icons">{e.icon}</span>
                      </div>
                    }
                    as={Link}
                    href={e.link}
                  />
                );
              })}
            </Tabs>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <SwitchMode />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="backdrop-blur overflow-hidden">
          <Tabs
            isVertical
            variant="bordered"
            color="secondary"
            aria-label="Tabs colors"
            // radius="full"
            selectedKey={pathname}
            className="w-full flex h-full flex-grow flex-col"
          >
            {navList.map((e, k) => {
              return (
                <Tab
                  key={e.link}
                  style={{
                    fontFamily: "amiri",
                  }}
                  title={
                    <div className="flex space-x-2 drop-shadow-lg">
                      <span className=" text-base ">{e.title}</span>
                      <span className="material-icons">{e.icon}</span>
                    </div>
                  }
                  as={Link}
                  href={e.link}
                />
              );
            })}
          </Tabs>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
