import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    {/* <a href="#intro" className="logo">RS</a> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/1046/1046774.png" className="icon" />
                </div>
                <div className="center">
                    <h1>Over Easy Productions</h1>
                </div>
                <div className="right">
                    <div className="menuSelect" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
