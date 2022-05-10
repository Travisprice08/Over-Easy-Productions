import "./portfolio.scss"

export default function Portfolio() {
    const data = [
        {
            id: 1,
            name: "Weddings",
            // title: "IT",
            img:
                "assets/wed1.png",
            desc:
                "Your big day will be full of laughter and love that you will never forget, and we are here to make sure of it.",
        },
        {
            id: 2,
            name: "Promotional Ads",
            // title: "My Cousin Vinny",
            img:
                "assets/shop.png",
            desc:
                "Want to promote something? Whether for your business, your products, or yourself, consider your shit promoted. ",
            featured: true,
        },
        {
            id: 3,
            name: "Interviews",
            title: "Lars and The Real Girl",
            img:
                "assets/nkc.png",
            desc:
                "Do you have some shit that you want to say? We are here to make sure you don't look stupid, even if what you say is.",
        },
        {
            id: 4,
            name: "Commercials",
            title: "Lars and The Real Girl",
            img:
                "assets/shop3.png",
            desc:
                "The pandemic sucked, we all know it. Let everyone know that you made it to the otherside with a slick new commerical.",
        },
        {
            id: 5,
            name: "Events",
            title: "Lars and The Real Girl",
            img:
                "assets/courts.png",
            desc:
                "We all think our child is special, and they might be, but probably not. We are here to remind you of what could have been.",
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
