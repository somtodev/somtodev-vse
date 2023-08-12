import FollowLink from "../components/FollowLink";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Section from "../components/home/Section";
import ToolCard from "../components/ToolCard";

export default function Home() {
    return (
        <section className="py-6">
            <Hero />

            <Section
                title={"Tools"}
                description="Below are some technologies(languages and frameworks) which I use to build my projects."
            >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 mt-5">
                    <ToolCard name="React" />
                    <ToolCard name="TailwindCSS" />
                    <ToolCard name="Node.js" />
                    <ToolCard name="MySQL" />
                    <ToolCard name="Git" />
                    <ToolCard name="Vim" />
                </div>
                <div className="border-[1px] border-neutral-500 rounded-xl p-4 mt-5">
                    <p className="text-sm font-light opacity-75">
                        Here are other tools I'm currently diving deeper into,
                        intending to build something with them to make my
                        workflow much more efficient.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 mt-5">
                        <ToolCard name="OpenJDK" />
                        <ToolCard name="Linux" />
                        <ToolCard name="MongoDB" />
                        <ToolCard name="Remix" />
                        <ToolCard name="Typescript" />
                    </div>
                </div>
            </Section>

            <Section
                title={"Projects"}
                description="In my free time, I try to build things  I could use to solve personal problems and sometimes just for fun. Below are projects I have worked on personally for my portfolio or work (ofc if it's not private )"
            >
                <Projects />
            </Section>

            <section className="my-6">
                <h3 className="font-bold text-xl my-4">Find me on</h3>
                <p className="text-md font-normal">
                    <FollowLink
                        title={"Github"}
                        link="https://github.com/somtodev"
                    />
                    <FollowLink
                        title={"Twitter"}
                        link="https://twitter.com/somtodev"
                    />
                    <FollowLink
                        title={"LinkedIn"}
                        link="https://twitter.com/somtodev"
                    />
                    <FollowLink
                        title={"Frontend Mentor"}
                        link="https://twitter.com/somtodev"
                    />
                </p>
            </section>

            <Footer />
        </section>
    );
}
