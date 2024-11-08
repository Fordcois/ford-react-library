import { AiFillGithub } from "react-icons/ai";
import { FaGlobeEurope } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiKofi } from "react-icons/si";
import './tooltips.css'


const Tooltips = () => {
return (
<div className="GLOBAL-center">

        <span className="linked-icon"> 
            <a href="https://github.com/Fordcois" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="ReactIcon"/>
            </a>
            <span className="tooltiptext">Check Out my Github</span>
        </span>
        <span className="linked-icon">
            <a href="https://www.samueljford.com/" target="_blank" rel="noopener noreferrer">
                <FaGlobeEurope className="ReactIcon"/>
            </a>
            <span className="tooltiptext">Visit my Website</span>
        </span>
            <span className="linked-icon">
            <a href="mailto:email@gmail.com?subject=Subject">
                <IoIosMail className="ReactIcon"/>
            </a>
            <span className="tooltiptext">Email Me</span>
        </span>
        <span className="linked-icon">
            <a href="https://ko-fi.com/fordcois" target="_blank" rel="noopener noreferrer">
                <SiKofi className="ReactIcon"/>
            </a>
            <span className="tooltiptext">Buy me a Ko-fi</span>
        </span>
    </div>
);};

export default Tooltips;
