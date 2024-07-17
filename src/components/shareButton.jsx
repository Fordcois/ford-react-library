import "../components/stylesheets/shareButton.css";
import { useState } from "react";

const ShareButton = () => {

const [isClickable, setIsClickable] = useState(true);

const ShareFunction = () => {
    if (navigator.share){
        navigator.share({
        Text:'Samuel Ford - Full Stack Developer',
        url:'https://www.samueljford.com/',
        title:'Samuel Ford - Full Stack Developer'})
        }
    else{
        setIsClickable(false);
        navigator.clipboard.writeText('Samuel Ford - Full Stack Developer https://www.samueljford.com/')
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
</div>
    );};

export default ShareButton;
