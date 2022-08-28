export default function Home() {
    // 19 wild 20 scatter

    const crushList = [
        {
            preCards: ["3", "9", "18", "3", "1"],
            cards: "9-4-5-9,5-6-8-8-5,18-11-15-14-16,5-5-4-6-9,6-6-5-5",
            crush: "15,22,23,16,9,3,5,13",
            double: 2,
        },
        {
            preCards: ["9", "6", "18", "9", "9"],
            cards: "3-9-4-9,3-9-6-8-8,18-11-15-19-16,8-3-4-6-9,8-1-6-6",
            crush: "10,4,5,16,2,19,1,13,6",
            double: 4,
        },
        {
            preCards: ["9", "5", "15", "7", "9"],
            cards: "6-9-9-4,4-6-6-8-8,18-19-11-15-16,4-9-8-4-6,8-1-6-6",
            crush: "5,11,15,18,1,7,4,6,19,22,23,13",
            double: 6,
        },
        {
            preCards: ["9", "15", "14", "4", "9"],
            cards: "4-9-9-9,3-17-5-8-8,15-18-11-19-16,9-5-7-9-8,5-9-8-1",
            crush: "",
            double: 10,
        },
    ];

    const test = crushList.map((v) => {
        return (
            <div>
                {v.cards.split(/[-,]/).map((str, i) => {
                    const isCrush = v.crush.split(",").includes(`${i + 1}`);
                    return (
                        <span className={isCrush ? "text-danger" : ""}>
                            {str === "19" ? "wild" : str} {[3, 8, 13, 18, 22].includes(i) ? "," : "-"}{" "}
                        </span>
                    );
                })}
                <br />
            </div>
        );
    });

    return (
        <div className="container">
            <h1>首頁</h1>
            <p>歡迎來到首頁</p>
            <div>{JSON.stringify(crushList)}</div>
            <br />
            {test}
        </div>
    );
}
