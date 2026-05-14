import { useParams } from "react-router-dom";

function PublicShelf() {
    const { username } = useParams();
    return (
        <>
        <h1>{username}'s Shelf</h1>
        </>
    )
}

export default PublicShelf