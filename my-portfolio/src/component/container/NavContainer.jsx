"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../NavBar2";
import { useState } from "react";

const NavbarDemo = () => {
  const navItems = [
    {
      name: "Home",
      link: "#main",
    },
    {
      name: "Project",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            <NavbarButton
              text="Download CV"
              href="/Resume.pdf"
              variant="primary"
              download
            />
          </div>
        </NavBody>

        <MobileNav className="flex lg:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              const handleMobileClick = (e) => {
                if (item.link.startsWith("#")) {
                  e.preventDefault();
                  const id = item.link.substring(1);
                  const el = document.getElementById(id);
                  if (el) {
                    window.scrollTo({
                      top: el.offsetTop - 60, // adjust offset
                      behavior: "smooth",
                    });
                  }
                }
                setIsMobileMenuOpen(false); // close menu
              };

              return (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={handleMobileClick}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              );
            })}

            <div className="flex items-center gap-4">
              <NavbarButton
                text="Download CV"
                href="/Resume.pdf"
                variant="primary"
                download
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
};

export default NavbarDemo;
