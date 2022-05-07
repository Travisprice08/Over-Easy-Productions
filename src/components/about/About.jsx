import "./about.scss"

export default function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <div className="left">
                <div className="wrapper">
                    <h3>Over Easy Productions is a video production company that specializes in offering professional
                        <br />and creative videography at competitive and affordable prices.</h3>
                    <h3>Our services range from promotional ads, weddings, to interviews and seminars.
                        <br />Anything you want on video we capture and edit professionally.</h3>
                    <h3>We’ve been in business for four years and are owner operated so you can be assured
                        <br />creativity and customer satisfaction is top priority.</h3>
                    <h3>Feel free to call, text or email at anytime with questions and scheduling.</h3>
                    <h3>My name is Ralph, and we look forward to hearing from you.</h3>

                </div>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/holy.gif" alt="" />
                </div>
            </div>
        </div>
    )
}
