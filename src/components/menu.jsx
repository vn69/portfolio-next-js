"use client";
import { useState, useEffect } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(() => [
    {
      id: 1,
      title: "About",
      href: "#about",
      isActive: true,
    },
    {
      id: 2,
      title: "Skills",
      href: "#skills",
      isActive: false,
    },
    {
      id: 3,
      title: "Experience",
      href: "#experience",
      isActive: false,
    },
    {
      id: 4,
      title: "Demo Projects",
      href: "#projects",
      isActive: false,
    },
  ]);

  const onClickMenu = (index) => {
    const newMenu = menu.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isActive: true,
        };
      }
      return {
        ...item,
        isActive: false,
      };
    });
    setMenu(newMenu);
  };

  // check element is in scroll view
  const checkInView = (id) => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 200;
  };

  const handleScroll = () => {
    const aboutInView = checkInView("about");
    const skillsInView = checkInView("skills");
    const experienceInView = checkInView("experience");
    const projectsInView = checkInView("projects");
    if (aboutInView) {
      onClickMenu(0);
    } else if (skillsInView) {
      onClickMenu(1);
    } else if (experienceInView) {
      onClickMenu(2);
    } else if (projectsInView) {
      onClickMenu(3);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="lg:flex gap-4 flex-col hidden">
      {menu.map((item, index) => (
        <li key={item.id}>
          <a
            className={`hover:text-slate-200 hover:pl-4 transition-all duration-300 cursor-pointer uppercase min-w-20 font-bold 
                ${item.isActive ? "text-slate-200 pl-4" : ""}`}
            href={item.href}
            onClick={() => onClickMenu(index)}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
