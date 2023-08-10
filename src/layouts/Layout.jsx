import ctl from "@netlify/classnames-template-literals"
import {useEffect, useState} from "react"
import {Link} from "react-scroll"

import IArrow from "../assets/images/icons-svg/chrup.svg"

import Meta from "../components/Meta"
import Navbar from "../components/Navbar"

export default function Layout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scroll_pos = window.scrollY || document.documentElement.scrollTop;
        setIsScrolled(scroll_pos > window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Meta title={"Somtochukwu"} page={"blog"} />
            <main className={container}>
                <section className="w-5/6 mx-auto">
                    <Navbar />
                    {children}
                </section>
                {isScrolled && (
                    <Link to="navbar" duration={2500} smooth={true}>
                        <div className="fixed bottom-4 right-0 cursor-pointer hover:shadow-lg md:right-4 lg:bottom-8 lg:right-12">
                            <img src={IArrow} />
                        </div>
                    </Link>
                )}
            </main>
        </>
    );
}

const container = ctl(`w-full min-h-screen relative bg-bg text-text font-body`);
