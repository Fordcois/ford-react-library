import { IoIosMail } from "react-icons/io";
const FooterBanner = () => {
    return (
        <div className="FooterContainer">
            <div className="Cutout"></div>
            <div className="Footer">
            Having Difficulties? Got Questions? Suggestions?
            <br/>
            <span className="EmailMeContainer">
                <a href='mailto:business@frdmedia.co.uk' className="EmailLink"><IoIosMail className="MailIcon"/> Email Me</a>
            </span>
            </div>
        </div>
       
    );
};

export default FooterBanner;