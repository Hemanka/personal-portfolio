import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";

const options = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
];

export default function NavBar() {
  return (
    // <header className="bg-purple-900 w-full md:text-xl">
    <header className="w-full p-4 md:text-xl">
      <div className="flex justify-center md:justify-between item-center px-4">
        <div>HK</div>
        <div className="flex space-x-12">
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
    </header>
  );
}
