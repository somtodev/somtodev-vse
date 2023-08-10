import ctl from "@netlify/classnames-template-literals";
import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

import {LayoutContext} from "../contexts/LayoutContext";

import Logo from "../assets/images/icons-png/SD.png";
import IBlog from "../assets/images/icons-svg/blog.svg";
import IProjects from "../assets/images/icons-svg/framer.svg";
import IGithub from "../assets/images/icons-svg/github.svg";
import ITools from "../assets/images/icons-svg/tool.svg";

export default function Navbar() {

    const { simple } = useContext(LayoutContext);

    return (
        <nav className={container} id="navbar">
            <img className={logo} src={Logo} alt="somtodev" />
            {simple ? (
                <></>
            ) : (
                <ul className="flex gap-4">
                    <li title={"Tools"} className={nav__link}>
                        <Link to="tools" smooth={true} duration={500}>
                            <img src={ITools} />
                        </Link>
                    </li>
                    <li title={"Projects"} className={nav__link}>
                        <Link to="projects" smooth={true} duration={500}>
                            <img src={IProjects} />
                        </Link>
                    </li>
                    <li title={"Github"} className={nav__link}>
                        <a target={'_blank'} href="https://github.com/somtodev" rel="noreferrer">
                            <img src={IGithub} />
                        </a>
                    </li>
                    <li title={"Blog"} className={nav__link}>
                        <NavLink to={'/blog'}>
                            <img src={IBlog} />
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
}

const container = ctl(`w-full flex py-8 justify-between items-center`);
const logo = ctl(`w-[48px]`);
const nav__link = ctl(`cursor-pointer`)
