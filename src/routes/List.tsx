import { Link, useParams } from "react-router-dom";

export default function List() {
    const { id } = useParams();
    return (
        <>
            <ul>
                {id}
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    );
}
