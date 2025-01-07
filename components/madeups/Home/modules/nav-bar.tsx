"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MobileMenu from "@/components/madeups/Home/modules/mobile-menu";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <>
      <nav
        className={`
          fixed md:absolute top-0 w-full z-50 transition-all duration-300
          ${
            isScrolled
              ? !isScrollingUp
                ? "backdrop-blur-md bg-white/50 md:bg-transparent shadow-md md:shadow-none"
                : "bg-white md:bg-transparent"
              : "bg-white md:bg-transparent"
          }
        `}
      >
        <div
          className={`container mx-auto px-6 py-4 ${
            !isScrolled ? "" : "md:bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/EZmigrateWhite.svg"
                alt="EZmigrate Logo"
                className={`h-8 w-fit transition-all duration-300 ${
                  isScrolled
                    ? "[filter:invert(1)] md:filter-none"
                    : "[filter:invert(1)] md:filter-none"
                }`}
                width={160}
                height={40}
                priority
              />
            </Link>

            <div className="hidden md:flex items-center text-black md:text-white space-x-12">
              {[
                "Home",
                "Services",
                "Study Abroad",
                "Programs",
                "About",
                "Contact",
                "Careers",
              ].map((item) => (
                <button
                  key={item}
                  className={`text-sm transition-colors duration-300 ${
                    !isScrolled ? "hover:text-black" : "text-white"
                  }`}
                  onClick={() => handleRedirect(item)}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => router.push("/login")}
                className="hidden md:block text-sm bg-black text-white px-4 py-2 transition-colors duration-300"
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
