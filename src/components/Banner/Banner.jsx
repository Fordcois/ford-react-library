// eslint-disable-next-line react/prop-types
const Banner = ({codeLink,CSSLink,linkedUsedInProjects,instructions}) => {

    const HomePageMode = !codeLink && !CSSLink && !linkedUsedInProjects && !instructions;
    //TODO Refactor according to DRY Principles
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
                <div className='InstructionsBanner'>
                &nbsp;
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
                <span className="ProjectBannerTitle">{linkedUsedInProjects? 'Projects': ''}&nbsp;</span>
                <span>{linkedUsedInProjects? linkedUsedInProjects: ''}</span>
            </div>
            <div className='InstructionsBanner'>
                {instructions? instructions:''}&nbsp;
            </div>
        </div>
        )
    );
};

export default Banner;