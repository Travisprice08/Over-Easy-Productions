import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Promotional Ads", "Weddings", "Interviews", "Seminars", " And More!"],
        });
    }, []);

    return (
        <div className='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ralph.gif" className="image" />
                </div>
            </div>
            <div className="right">
                {/* <React.StrictMode> */}
                <div className="wrapper">
                    <h2>Welcome to Over Easy Productions</h2>
                    <h1>A Video Production Company</h1>
                    <h3>
                        Our Services Include...
                    </h3>
                    <h2><span ref={textRef}></span></h2>
                    <button>
                        <a href="https://vimeo.com/">
                            <img src="assets/vimeo.svg" />
                        </a>
                    </button>
                    {/* <button>
                            <a href="https://vimeo.com/">
                                <img src="assets/vimeo.svg" />
                            </a>
                        </button> */}
                </div>
                {/* </React.StrictMode> */}
            </div>
        </div>
    )
}
