import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
            .then((res) => res.json())
            .then((res) => {
                const { Info } = res.data.XML_Head.Infos;
                const array = Info.map(({ Id, Name, Picture1 }: any) => ({ Id, Name, Picture1 }));
                setData(array);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {data.map(({ Id, Name, Picture1 }) => (
                    <Link to={`/${Id}`} key={Id} className="col-3">
                        <div className="card">
                            <img className="card-img-top" height={150} src={Picture1} />
                            <div className="card-body">
                                <p className="card-text">{Name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
