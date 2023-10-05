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
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
          <ToolCard name="React" />
          <ToolCard name="TailwindCSS" />
          <ToolCard name="Node.js" />
          <ToolCard name="MySQL" />
          <ToolCard name="SQLite" />
          <ToolCard name="Git" />
          <ToolCard name="Vim" />
        </div>
        <div className="border-[1px] border-neutral-500 rounded-xl p-4 mt-5">
          <p className="text-sm font-light opacity-75">
            Here are other tools I'm currently diving deeper into, intending to
            build something with them to make my workflow much more efficient.
          </p>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
            <ToolCard name="Linux" />
            <ToolCard name="Typescript" />
            <ToolCard name="Kotlin" />
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
        <h3 className="my-4 text-xl font-bold font-header">Find me on</h3>
        <p className="font-normal text-md">
          <FollowLink title={"Github"} link="https://github.com/somtodev" />
          <FollowLink title={"Twitter"} link="https://twitter.com/somtodev" />
          <FollowLink
            title={"LinkedIn"}
            link="https://linkedin.com/in/somtodev"
          />
          <FollowLink
            title={"Frontend Mentor"}
            link="https://frontendmentor.com/Leroynnalue"
          />
          <FollowLink
            title={"My Resume"}
            link="https://docs.google.com/document/d/e/2PACX-1vR5gdD-2S7DrBfBLybyTmDSW5vl1afTWlX3wqHY72iyu1yvz4T32GUle1bwZtDASdcn50C3wZhxtJwV/pub"
          />
        </p>
      </section>

      <Footer />
    </section>
  );
}
