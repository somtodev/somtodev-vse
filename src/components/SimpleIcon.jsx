export default function SimpleIcon({ name, size }) {
const def_size = size ? size : 20
    return (
        <>
            <img
                height={def_size}
                width={def_size}
                src={`https://cdn.simpleicons.org/${name}`}
            />
        </>
    );
}
