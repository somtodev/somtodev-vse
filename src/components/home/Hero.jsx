export default function Hero() {
  return (
    <section className="py-4 my-6">
      <div>
        <h1 className="text-3xl text-primary font-header font-bold md:text-6xl lg:text-8xl">
          Nice to meet you!
          <br />
          I'm
          <br />
          <span className="text-secondary">Somtochukwu</span>.
        </h1>
        <em className="opacity-80 text-secondary">_somtodev</em>
      </div>
      <p className="text-lg font-light my-4 opacity-75 ">
        <span className="font-normal">
          A software engineering student at Aptech.
        </span>
        <br />I am passionate about writing digital solutions to problems (the
        right way). I am an aspiring hardcore backend developer. I'm giving my
        all to make that a reality :)
        <br />
        <br />
        In my free time, I read books and articles to make me do better as a
        person and as a developer.
      </p>
      <a
        href="mailto:leroynnalue65@gmail.com"
        className="px-3 py-2 text-md bg-border bg-opacity-75 rounded-md transition-all hover:bg-opacity-100"
      >
        Mail Me
      </a>
    </section>
  );
}
