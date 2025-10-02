
import React from "react";

type NavProps = {
    section: string;
    setSection: (section: string) => void;
};

const navItems = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

function Nav({ section, setSection }: NavProps) {
    return (
        <div className="top-0 left-0 fixed w-screen h-15 py-10 flex gap-10 justify-center items-center text-gray-500 text-sm backdrop-blur-sm z-99">
            {navItems.map((item) => (
                <div
                    key={item}
                    className={`cursor-pointer hover:text-white duration-500 ${section === item ? "text-white text-base" : ""}`}
                    onClick={() => setSection(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Nav;