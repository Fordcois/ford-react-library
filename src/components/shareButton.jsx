import "../components/stylesheets/shareButton.css";
import { useState } from "react";

const ShareButton = () => {

const [isClickable, setIsClickable] = useState(true);

const shareContent = () => 
    {
    console.log("Content is Shared");
    setIsClickable(false);
    setTimeout(() => {setIsClickable(true);}, 1000)
    };

return (
<div className="GLOBAL-center">
    <div className="ShareButton-container">
        <button
        className={`ShareButton ${!isClickable ? "NotClickable" : ""}`}
        onClick={shareContent}
        disabled={!isClickable}
        >
            {isClickable ? "Share" : "Content Copied"}
        </button>

        <span className={`tooltiptext ${!isClickable ? "show" : ""}`}>
            Content Copied!
        </span>
    </div>
</div>
    );};

export default ShareButton;
