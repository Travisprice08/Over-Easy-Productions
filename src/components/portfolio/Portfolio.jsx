import "./portfolio.scss"

export default function Portfolio() {
    const data = [
        {
            id: 1,
            name: "Weddings",
            img:
                "assets/wed1.png",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            name: "Promotional Ads",
            img:
                "assets/shop.png",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            featured: true,
        },
        {
            id: 3,
            name: "Interviews",
            img:
                "assets/nkc.png",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 4,
            name: "Commercials",
            img:
                "assets/shop3.png",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 5,
            name: "Events",
            img:
                "assets/courts.png",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Services</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            {/* <img src="assets/Arrow.png" className="left" alt="" /> */}
                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            {/* <img className="right" src={d.icon} alt="" /> */}
                        </div>
                        <div className="center">
                            <h3>{d.name}</h3>
                        </div>
                        <div className="bottom">
                            {d.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
