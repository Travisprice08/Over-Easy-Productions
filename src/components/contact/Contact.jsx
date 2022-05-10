import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <h1>Contact Me</h1>
                <div className="container">
                    <a class="link" href="tel:+8162609214" target="_blank" rel="noopener noreferrer">
                        <img src="assets/phone.png" class="icon" alt="Phone symbol" /></a>
                    <a class="link" href="mailto:ralphcarl9214@yahoo.com?subject=OverEasyProductions%20contact" target="_blank" rel="noopener noreferrer">
                        <img src="assets/gmail.svg" class="icon" alt="Email icon" /></a>
                </div>

            </div>
        </div>
    )
}
