"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { motion } from "framer-motion";

const options = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
];

export default function NavBar() {
  return (
    // <header className="bg-purple-900 w-full md:text-xl">
    <header className="w-full p-4 md:text-xl">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
          ease: "linear",
          x: { duration: 1 },
        }}
      >
        <div className="flex justify-between item-center px-4">
          <div>
            <a
              key="welcome"
              href="#welcome"
              className="flex flex-col justify-center"
            >
              HK
            </a>
          </div>
          <div className="flex space-x-6 md:space-x-12">
            {options.map((option) => {
              return (
                <a
                  key={option.link}
                  href={option.link}
                  className="flex flex-col justify-center"
                >
                  {option.name}
                </a>
              );
            })}
            <a
              href="https://github.com/Hemanka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hemant-kanoujia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center"
            >
              <FaLinkedin />
            </a>
            <a
              href="/HemantKanoujia_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center"
            >
              <FaFileLines />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
