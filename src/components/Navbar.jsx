import ctl from "@netlify/classnames-template-literals";
import {NavLink} from "react-router-dom";

import Logo from "../assets/images/icons-png/SD.png";

import IProjects from "../assets/images/icons-svg/framer.svg";
import IGithub from "../assets/images/icons-svg/github.svg";
import ITools from "../assets/images/icons-svg/tool.svg";

export default function Navbar() {
    return (
        <nav className={container}>
            <img className={logo} src={Logo} alt="somtodev" />
            <ul className="flex gap-4">
                <li>
                    <NavLink>
                        <img src={ITools} />
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        <img src={IProjects} />
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        <img src={IGithub} />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

const container = ctl(`w-full flex py-8 justify-between items-center`);
const logo = ctl(`w-[48px]`);
