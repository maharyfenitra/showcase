"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { GoMoon, GoSun } from "react-icons/go";
import { usePathname } from "next/navigation";

const data = [
  { id: 1, link: "/", caption: "Home" },
  { id: 2, link: "/about", caption: "About" },
  { id: 3, link: "/services", caption: "Service" },
  { id: 4, link: "/portfolio", caption: "Portfolio" },
  { id: 5, link: "/contact", caption: "Contact" },
];
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathName = usePathname();
  useEffect(()=>{
    if(window.innerWidth>600){
        setNavOpen(true)
    }
  },[navOpen])

  const closeNavHandler = () =>{
    if(window.innerWidth<=600){
        setNavOpen(false);
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href={"/"} className={styles.navLogo} onClick={closeNavHandler}>
          LA CONFRERIE
        </Link>
        {navOpen && (
          <ul className={styles.navItems}>
            {data.map(({ id, link, caption }) => {
              return (
                <li key={id}>
                  <Link href={link} onClick={closeNavHandler} className={pathName === link? "active" : ""}>{caption}</Link>
                </li>
              );
            })}
          </ul>
        )}
        <div className={styles.navBtns}>
          <button className={styles.themeBtn}>
            <GoMoon />
          </button>
          <button className={styles.navBtn} onClick={()=> setNavOpen(!navOpen)}>
            {navOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
