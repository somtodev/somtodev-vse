import projects from "../../assets/data/projects.json";

export default function Projects() {
    return (
        <section className="grid grid-cols-1 gap-6 my-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
                return <Project key={project.name} project={project} />;
            })}
        </section>
    );
}

function Project({ project }) {
    const { name, description, image, status, website, github } = project;
    return (
        <section className="relative">

            <div className={`w-full aspect-[1.7] cursor-pointer overflow-hidden`}>
                <img src={`/images/snapshots/${image}`} alt={name} className="w-full h-full hover:skew-y-3 hover:scale-125 transition-all"/>
            </div>

            <section className="my-2">
                <h4 className="text-md font-bold">{name}</h4>

                <p className="text-sm opacity-75 my-2">{description}</p>

                <div className="my-2 flex justify-between items-center">
                    {website ? (
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            href={website}
                            className={`text-sm px-3 py-1 border-solid border-border rounded-md`}
                        >
                            Live
                        </a>
                    ) : (
                        ""
                    )}
                    {github ? (
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            href={github}
                            className="text-sm text-white px-3 py-1 rounded-md bg-secondary"
                        >
                            Repo
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </section>

            <span className="absolute top-0 right-0 px-3 py-2 text-xs bg-secondary text-border upper">
                {status}
            </span>
        </section>
    );
}
