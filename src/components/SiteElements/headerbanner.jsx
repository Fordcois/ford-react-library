import { useState } from "react";
import { FaSearch,FaTimesCircle  } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const HeaderBanner = ({ComponentName,codeLink,CSSLink,instructions,toggleInFilterList,filters,searchTerm,setSearchTerm,numOfComponents}) => {
    const HomePageMode = !codeLink && !CSSLink && !instructions && !ComponentName;
    return (
            <div className="HeaderContainer">
                <div className="BannerContainer">
                    <a href="/" className="Logo">FORD REACT</a>
                    <div>
                    {/* White Banner */}
                        {HomePageMode? 
                            //  On The Homepage
                            <div>
                                <a href="https://github.com/Fordcois" className="BannerLink" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href="https://www.samueljford.com/" className="BannerLink" target="_blank" rel="noopener noreferrer">Website</a>
                            </div>
                            :
                            // On The Componenet Page 
                            <div>
                                <a href={codeLink} className="BannerLink" target="_blank" rel="noopener noreferrer">Code</a>
                                <a href={CSSLink} className="BannerLink" target="_blank" rel="noopener noreferrer">CSS</a>
                            </div>
                        }

                    </div>
                </div>
                <div className='ProjectBanner'>
                    {/* Blue Banners */}
                    {HomePageMode? 
                            //  On The Homepage
                            <span className="ProjectBannerTitle">
                                &nbsp;{/* TODO - FILTERS WILL GO HERE */}
                            </span>
                            :
                            // On The Componenet Page 
                            <span className="ProjectBannerTitle">
                                {ComponentName}
                            </span>
                        }
                </div>
                
                    {/* Red Banner */}
                    {HomePageMode? 
                            //  On The Homepage
                            
                        <div className='InstructionsBanner-Home'>
                                <span >{numOfComponents} {numOfComponents===1? 'Component loaded' :'Components loaded'}</span>
                                <div className="form-field">
                                    <input type="text" id="fname" name="fname" value={searchTerm} placeholder='Search components' onChange={(event) => setSearchTerm(event.target.value)}className="Searchbar" />
                                    <span className="icon"><FaSearch/></span>
                                    <span className="delete">{searchTerm.length>0? <FaTimesCircle onClick={()=>setSearchTerm('')}/>:''}</span>
                                </div>
                        </div>
                            :
                            // On The Componenet Page 
                            <div className="InstructionsBanner"> 
                            <p className="instructions">{instructions}</p>
                            </div>
                        }
                    

            </div>

        
    );
};

export default HeaderBanner;

{/* {filters.map((filter, index) => 
                    <span key={index} className="single-filter" onClick={()=>toggleInFilterList(filter)}>{filter}</span>)}</div>
                <span>{`${numberOfComponents} Components loaded`}</span> */}