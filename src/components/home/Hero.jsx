export default function Hero() {
    return (
        <section className="py-4 my-6">
            <div>
                <h1 className="text-3xl text-primary font-header font-bold md:text-6xl lg:text-8xl">
                    Nice to meet you!<br/>
                    I'm<br/><span className="text-secondary">Somtochukwu</span>.
                </h1>
                <em className="opacity-80 text-secondary">_somtodev</em>
            </div>
            <p className="text-lg font-light my-4 opacity-75 ">
                <span className="font-normal">A software engineering student at
                Aptech.</span><br/> Ever since I graduated high school, hitting my keyboard for a solution is something I'm
                passionate about, though sometimes I always try to outthink
                myself on a better solution before hitting my keyboard. I'm an
                aspiring backend developer who has dabbled in the ends of
                frontend web development for over a year, good enough to call
                myself one.
            </p>
            <a href="mailto:leroynnalue65@gmail.com" className="px-3 py-2 text-md bg-border bg-opacity-75 rounded-md transition-all hover:bg-opacity-100">Mail Me</a>
        </section>
    );
}
