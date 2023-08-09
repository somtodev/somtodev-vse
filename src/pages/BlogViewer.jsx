import { useParams } from "react-router-dom";

export default function BlogViewer() {
    const { id } = useParams();

    return (
        <>
            <h1>Blog {id}</h1>
        </>
    );
}
