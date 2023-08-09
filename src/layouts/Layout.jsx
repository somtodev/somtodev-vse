import ctl from "@netlify/classnames-template-literals";

import IArrow from "../assets/images/icons-svg/chrup.svg";

import Meta from "../components/Meta";
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Meta title={"Somtochukwu"} />
            <main className={container}>
                <section className="w-5/6 mx-auto lg:w-4/6">
                    <Navbar />
                    {children}
                </section>
                <div className="fixed bottom-[4vh] right-[10vw]">
                    <img src={IArrow} />
                </div>
            </main>
        </>
    );
}

const container = ctl(`w-full min-h-screen relative bg-bg text-text font-body`)
