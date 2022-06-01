import "./portfolio.scss"
import { useState } from "react";

export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            name: "Weddings",
            img:
                "assets/wed1.png",
            desc:
                "One of, if not the happiest day in two peoples lives. A day meant to go off in the most way while making the most beautiful memories. At OEP we will give you the upmost professional and beautiful look while maintaining a fly on the wall approach. Contact us and find out about our wide range of offers. Let over Easy Productions be apart of capturing those perfect moments forever.",
        },
        {
            id: 2,
            name: "Promotional",
            img:
                "assets/shop.png",
            desc:
                "The level of success a business can achieve can sometimes hinge on good advertisement. But not just by putting an image out there but by capturing what a business should mean to it's customers. At Over Easy Productions we will showcase the true message of your company in a professional light. OEP would be happy to collaborate on an idea with you or take the full project ourselves. Being creative and bringing stories to life is why our business exists. Contact us and find out our wide range of approaches. Let Over Easy Productions be apart of your business's success.",
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
            name: "Real Estate / Product Sales",
            img:
                "assets/shop3.png",
            desc:
                "How can one get the most out of what there selling in a competitive market? Good Showcasing! The attention of buyers are caught by what they see online. At Over Easy Productions we offer photography and videography for showcasing just about anything. We will capture what your selling through the eyes of the customer. Let Over Easy Productions be the reason you get top dollar for your product while minimizing the time it takes to sell.",
        },
        {
            id: 5,
            name: "Events",
            img:
                "assets/courts.png",
            desc:
                "Whether it's capturing a special moment to keep for the memory books or something needed for professional use, at Over Easy Productions we will film anything from graduations and anniversaries to seminars and speeches. OEP can be your one stop videography and photography shop for those big or small events. Contact us for a quote.",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    // return (
    //     <div className="portfolio" id="portfolio">
    //         <h1>Services</h1>
    //         <div className="container">
    //             {data.map((d) => (
    //                 <div className={d.featured ? "card featured" : "card"}>
    //                     <div className="top">
    //                         <img src="assets/Arrow.png" className="left" alt="" />
    //                         <img
    //                             className="user"
    //                             src={d.img}
    //                             alt=""
    //                         />
    //                         {/* <img className="right" src={d.icon} alt="" /> */}
    //                     </div>
    //                     <div className="center">
    //                         <h3>{d.name}</h3>
    //                     </div>
    //                     <div className="bottom">
    //                         {d.desc}
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );

    return (
        <div className="portfolio" id="portfolio">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <h2>{d.name}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/Arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/Arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    )
}
