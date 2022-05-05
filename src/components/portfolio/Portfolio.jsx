import "./portfolio.scss"

export default function Portfolio() {
    const data = [
        {
            id: 1,
            name: "Andy Muschietti",
            title: "IT",
            img:
                "https://images.hungama.com/c/1/be5/bae/33057916/33057916_1280x800.jpg",
            icon: "assets/twitter.png",
            desc:
                "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
        },
        {
            id: 2,
            name: "Jonathan Lynn",
            title: "My Cousin Vinny",
            img:
                "https://illinoislawforyou.com/wp-content/uploads/2019/04/courtroom-tips-my-cousin-vinny.jpg",
            icon: "assets/youtube.png",
            desc:
                "Two New Yorkers accused of murder in rural Alabama while on their way back to college call in the help of one of their cousins, a loudmouth lawyer with no trial experience. ",
            featured: true,
        },
        {
            id: 3,
            name: "Craige Gillespie",
            title: "Lars and The Real Girl",
            img:
                "https://i.pinimg.com/736x/4a/e8/7d/4ae87d940b000b9080f44f40c0d7bad8--feminist-ryan-gosling-ryan-gosling-movies.jpg",
            icon: "assets/linkedin.png",
            desc:
                "A delusional young man strikes up an unconventional relationship with a doll he finds on the Internet.",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
