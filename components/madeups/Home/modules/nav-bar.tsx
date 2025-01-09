"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import MobileMenu from "@/components/madeups/Home/modules/mobile-menu";
import clsx from "clsx";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Define which routes have dark backgrounds
  const darkBackgroundRoutes = ["/about", "/contact", "/careers"];
  const isDarkBackground = darkBackgroundRoutes.includes(pathname);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const handleRedirect = (item: string) => {
    console.log("item", item);
    setIsMenuOpen(false);
    const path =
      item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY);
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getTextColorClasses = (isScrolled: boolean): string => {
    if (isScrolled) {
      // When scrolled, background becomes light/transparent, so text should be dark
      return "text-black";
    }

    // When not scrolled, base text color on the page background
    return !isDarkBackground
      ? "text-white md:text-white"
      : "text-black md:text-black";
  };

  return (
    <>
      <nav
        className={`
          fixed md:absolute top-0 w-full z-50 transition-all duration-300 shadow-md md:shadow-none
          ${
            isScrollingUp
              ? "bg-white md:bg-transparent"
              : isScrolled
              ? "backdrop-blur-md bg-white/50 shadow-md"
              : "bg-white md:bg-transparent"
          }
        `}
      >
        <div className={`container mx-auto px-6 py-4`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/EZmigrateWhite.svg"
                alt="EZmigrate Logo"
                className={`h-8 w-fit transition-all duration-300 [filter:invert(1)] ${
                  !isDarkBackground ? "md:filter-none" : "md:[filter:invert(1)]"
                }`}
                width={160}
                height={40}
                priority
              />
            </Link>

            <div
              className={`hidden md:flex items-center ${getTextColorClasses(
                isScrolled
              )} space-x-12`}
            >
              {[
                "Home",
                "Services",
                "Study Abroad",
                "Visa",
                "Programs",
                "About",
                "Contact",
                "Careers",
              ].map((item) => (
                <button
                  key={item}
                  className={clsx(
                    "text-sm transition-colors duration-300",
                    "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full",
                    "after:origin-bottom-right after:scale-x-0 after:transition-transform",
                    "after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]",
                    "hover:after:origin-bottom-left hover:after:scale-x-100",
                    {
                      "hover:text-stone-100 after:bg-stone-100":
                        isDarkBackground && !isScrolled,
                      "hover:text-stone-600 after:bg-stone-600":
                        !isDarkBackground || isScrolled,
                    }
                  )}
                  onClick={() => handleRedirect(item)}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => router.push("/login")}
                className="hidden md:block text-sm px-4 py-2 transition-colors duration-300 bg-black text-white"
              >
                Login
              </button>
            </div>

            <div className="md:hidden flex flex-row items-center">
              <button
                onClick={() => router.push("/login")}
                className="md:hidden px-3 py-2 bg-black text-white text-sm"
              >
                Login
              </button>
              <button
                className="md:hidden w-6 h-6 flex flex-col justify-center items-center ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span
                  className={`block w-8 h-[2px] transition-all duration-300 ease-in-out
                    ${isScrolled ? "bg-black" : "bg-black"}
                    ${
                      isMenuOpen
                        ? "rotate-45 translate-y-[2px]"
                        : "-translate-y-1"
                    }`}
                />
                <span
                  className={`block w-8 h-[2px] transition-all duration-300 ease-in-out
                    ${isScrolled ? "bg-black" : "bg-black"}
                    ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-[0px]"
                        : "translate-y-1"
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavBar;
