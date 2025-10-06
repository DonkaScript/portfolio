"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Nav() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpen(false); // ปิดเมนูเมื่อคลิก
        }
    };

    return (
        <div className="bg-[#1A0B2E] w-screen h-16 fixed top-0 shadow-md flex justify-between items-center z-50 px-6 md:px-10">
            {/* Logo */}
            <div
                className="text-white text-2xl font-semibold cursor-pointer"
                onClick={() => scrollToSection("home")}
            >
                DONKA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center gap-12">
                <div
                    className="text-white text-sm duration-300 cursor-pointer hover:text-[#B5BDDB]"
                    onClick={() => scrollToSection("home")}
                >
                    Home
                </div>
                <div
                    className="text-white text-sm duration-300 cursor-pointer hover:text-[#B5BDDB]"
                    onClick={() => scrollToSection("about")}
                >
                    About
                </div>
                <div
                    className="text-white text-sm duration-300 cursor-pointer hover:text-[#B5BDDB]"
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setOpen(!open)}>
                    <Icon
                        icon={open ? "mdi:close" : "mdi:menu"}
                        className="text-white text-2xl"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-16 left-0 w-full bg-[#1A0B2E] flex flex-col items-center md:hidden transition-all duration-300 ${open ? "h-auto py-4" : "h-0 overflow-hidden"
                    }`}
            >
                <div
                    className="text-white text-base py-2 cursor-pointer hover:text-[#B5BDDB]"
                    onClick={() => scrollToSection("home")}
                >
                    Home
                </div>
                <div
                    className="text-white text-base py-2 cursor-pointer hover:text-[#B5BDDB]"
                    onClick={() => scrollToSection("about")}
                >
                    About
                </div>
                <div
                    className="text-white text-base py-2 cursor-pointer hover:text-[#B5BDDB]"
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </div>
            </div>
        </div>
    );
}

export default Nav;