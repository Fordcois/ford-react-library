const Banner = ({codeLink,CSSLink,linkedUsedInProjects,instructions}) => {

    const HomePageMode = !codeLink && !CSSLink && !linkedUsedInProjects && !instructions;
    
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
                <span className="ProjectBannerTitle">Projects</span>
                <span>{linkedUsedInProjects}</span>
            </div>
            <div className='InstructionsBanner'>
                {instructions}
            </div>
        </div>
        )
    );
};

export default Banner;