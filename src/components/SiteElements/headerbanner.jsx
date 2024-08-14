import { DiVim } from "react-icons/di";
import { numberOfComponents } from "../../ComponentLibraryData";
// eslint-disable-next-line react/prop-types
const HeaderBanner = ({ComponentName,codeLink,CSSLink,instructions,toggleInFilterList,filters}) => {

    const HomePageMode = !codeLink && !CSSLink && !instructions && !ComponentName;
    //TODO Refactor according to DRY Principles
    // TODO remove link if no CSS
    return (
        HomePageMode ? (
            <div className="HeaderContainer">
                <div className="BannerContainer">
                    <a href="/" className="Logo">FORD REACT</a>
                    <div>
                        <a href="https://github.com/Fordcois" className="BannerLink" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://www.samueljford.com/" className="BannerLink" target="_blank" rel="noopener noreferrer">Website</a>
                    </div>
                </div>
                <div className='ProjectBanner'>
                    <span className="ProjectBannerTitle">&nbsp;</span>

                </div>
                <div className='InstructionsBanner-Home' style={{textAlign:'right'}}>
                <div>{filters.map((filter, index) => 
                    <span key={index} className="single-filter" onClick={()=>toggleInFilterList(filter)}>{filter}</span>)}</div>
                <span>{`${numberOfComponents} Components loaded`}</span>
                </div>
            </div>
        ) : 
        (
            <div className="HeaderContainer">
            <div className="BannerContainer">
                <a href="/" className="Logo">FORD REACT</a>
                <div>
                    <a href={codeLink} className="BannerLink" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href={CSSLink} className="BannerLink" target="_blank" rel="noopener noreferrer">CSS</a>
                </div>
            </div>
            <div className='ProjectBanner'>
                <span className="ProjectBannerTitle">{ComponentName? ComponentName: ''}&nbsp;</span>
            </div>
            <div className='InstructionsBanner'>
                {instructions? instructions: 'Look at code for further instructions'}
            </div>
        </div>
        )
    );
};

export default HeaderBanner;