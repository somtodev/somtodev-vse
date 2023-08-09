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
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsum placeat voluptas eligendi velit illum, tenetur hic neque amet odio, similique, iusto expedita voluptatem earum beatae rem saepe quisquam temporibus."
            >
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 mt-5">
                    <ToolCard name="React" />
                    <ToolCard name="TailwindCSS" />
                    <ToolCard name="Node.js" />
                    <ToolCard name="MySQL" />
                    <ToolCard name="MongoDB" />
                    <ToolCard name="Git" />
                    <ToolCard name="Linux" />
                    <ToolCard name="Vim" />
                </div>
                <div class="border-solid border-neutral-500 rounded-xl p-4 mt-5">
                    <p>
                       Other things I am currently learning, intend to
                        take a deeper dive into or get started with at some
                        point in the future
                    </p>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 mt-5">
                        <ToolCard name="OpenJDK" />
                        <ToolCard name="Remix" />
                    </div>
                </div>
            </Section>

            <Section
                title={"Projects"}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsum placeat voluptas eligendi velit illum, tenetur hic neque amet odio, similique, iusto expedita voluptatem earum beatae rem saepe quisquam temporibus, illum, tenetur hic neque amet odio, similique, iusto expedita voluptatem earum beatae rem saepe quisquam temporibus."
            >
                <Projects />
            </Section>

            <Footer />
        </section>
    );
}
