import "./about.scss"
import oep from "../video/oep2.mp4";

export default function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <div className="left">
                <div className="wrapper">
                    <h3>We are Over Easy Production</h3>
                    <p>We are a video production company that specializes in
                        <br />offering professional and creative videography at
                        <br />competitive and affordable prices.</p>
                    {/* <p>Our services range from promotional ads, weddings, to interviews and seminars.
                        <br />Anything you want on video we capture and edit professionally.</p> */}
                    <p>We’ve been in business for four years and are owner
                        <br />operated so you can be assured creativity and customer
                        <br />satisfaction is top priority.</p>
                    {/* <p>Feel free to call, text or email at anytime with questions and scheduling.</p> */}
                    <p>We look forward to hearing from you.</p>
                    <div className="contact">
                        {/* <a href="assets/phone.png"></a> */}

                    </div>
                </div>
            </div>
            <div className="right">
                <div className="imgContainer">
                    {/* <video
                        autoPlay
                        loop
                        muted>
                        <source src={oep} type="video/mp4" />
                    </video> */}
                    <img src="assets/holy.gif" alt="" />
                </div>
            </div>
        </div>
    )
}
