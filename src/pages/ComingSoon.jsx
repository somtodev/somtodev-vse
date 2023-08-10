import { useContext, useEffect } from "react";
import {Link} from "react-router-dom"
import {LayoutContext} from "../contexts/LayoutContext"

import {Helmet} from "react-helmet"
import Appreciate from "../assets/images/appreciate.svg"

export default function ComingSoon() {
    const { setSimple } = useContext(LayoutContext);

    useEffect(() => {
        setSimple(true);
    });

    const doSomething = () => {
        setSimple(false);
    };

    return (
        <>
            <Helmet>
                <title>Somtochukwu | Blog</title>
            </Helmet>

            <section className="my-auto">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-3xl text-primary-600 dark:text-primary-500">
                            Coming Soon
                        </h1>
                        <p className="font-header mb-4 text-xl tracking-tight font-bold text-gray-900 md:text-xl dark:text-white">
                            Blog page in development
                        </p>
                        <p className="mb-4 text-md font-light text-gray-500 dark:text-gray-400">
                            Hey there, I'm probably trying to implement a
                            markupdown blog page here. Please come back soon :0
                        </p>
                        <Link
                            to={"/"}
                            onClick={doSomething}
                            className="inline-flex text-text bg-border hover:bg-secondary hover:bg-opacity-75 transition-all focus:ring-2 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary my-4"
                        >
                            Back to Homepage
                        </Link>
                        <img src={Appreciate} className="opacity-50" />
                    </div>
                </div>
            </section>
        </>
    );
}
