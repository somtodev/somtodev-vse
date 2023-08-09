export default function Section({ title, description, children }) {
    return (
        <section className="my-16">
            <h2 className="text-2xl my-3">{title}</h2>
            <p className="text-sm opacity-75 font-light">{description}</p>
            <section>{children}</section>
        </section>
    );
}