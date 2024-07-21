import { useState } from "react";
import { FaFacebookSquare, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './shareButton.css'


const ShareButton = () => {
const [isClickable, setIsClickable] = useState(true);

const urlToShare = 'https://www.samueljford.com/'
const UrlTitleToShare = 'Samuel Ford - Full Stack Developer'
const messageToShare = 'Check out this Awesome Site'

const ShareFunction = () => {
    if (navigator.share){
        navigator.share({
        Text:messageToShare,
        url: urlToShare,
        title:UrlTitleToShare})
        }
    else{
        setIsClickable(false);
        navigator.clipboard.writeText(`${messageToShare} ${urlToShare}`)
        setTimeout(() => {setIsClickable(true);}, 1000)
        }
        };

return (
<div className="GLOBAL-center">
    <div className="ShareButton-container">
        <button className={`ShareButton ${!isClickable ? "NotClickable" : ""}`} onClick={ShareFunction} disabled={!isClickable} >
            Share
        </button>
        <span className={`tooltip ${!isClickable ? "show" : ""}`}>
            Copied to Clipboard
        </span>
    </div>
    <div className="Socials-container">
        <span> Socials </span>
        <br/>

        {/* Twitter */}
        <a href={`https://twitter.com/intent/post?text=${messageToShare}&url=${urlToShare}`} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="Sharing-Icons"/>
        </a>
        {/* Facebook */}
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}/&quote=${messageToShare}`} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="Sharing-Icons"/>
        </a>
        {/* WhatsApp */}
        <a href={`https://api.whatsapp.com/send?text=${messageToShare}%20${urlToShare}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="Sharing-Icons"/>
        </a>
        {/* Telegram */}
        <a href={`https://telegram.me/share/msg?url=${urlToShare}&text=${messageToShare}`} target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="Sharing-Icons"/>
        </a>
    </div>

</div>
);};

export default ShareButton;
