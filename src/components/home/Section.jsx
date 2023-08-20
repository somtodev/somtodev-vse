export default function Section({ title, description, children }) {
    return (
        <section className="my-16" id={title.toLowerCase()}>
            <h2 className="text-3xl my-3">{title}</h2>
            <p className="text-md opacity-75 font-light">{description}</p>
            <section>{children}</section>
        </section>
    );
}
