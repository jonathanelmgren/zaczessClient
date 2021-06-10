import './Footer.scss'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="newsletter">
                <h4>Stay in Touch</h4>
                <p>Anslut dig till ZacZess Club och var först med information om nya produkter och exklusiva erbjudanden!</p>
                <div className="subscribe">
                    <input placeholder="E-post" /><button>PRENUMERERA</button>
                </div>
            </div>
            <img className="logo" src="https://zaczess.se/wp-content/uploads/2021/01/image-768x220.png" alt="zaczess logotype" />
            <div className="footerNav">
                <p>HEM</p>
                <ul>
                    <li>Startsida</li>
                    <li>Om oss</li>
                    <li>Jobba hos oss</li>
                </ul>
                <p>BUTIK</p>
                <ul>
                    <li>Butik</li>
                    <li>Kassan</li>
                    <li>Storleksguide</li>
                </ul>
                <p>SUPPORT</p>
                <ul>
                    <li>Vanliga frågor</li>
                    <li>Kontakt</li>
                    <li>Köpvillkor</li>
                </ul>
            </div>
        </footer>
    )
}
