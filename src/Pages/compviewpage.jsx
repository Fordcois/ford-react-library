import Banner from "../components/Banner/Banner";

// eslint-disable-next-line react/prop-types
const ViewComponentPage = ({ passedComponent, instructions, projectsUsedIn }) => {
  
const linkedUsedInProjects = projectsUsedIn?.map((project, index) => (
    <a key={index} href={project.projectURL} target="_blank" rel="noopener noreferrer">
      {project.projectName}
    </a>
    ));


  
  return (
    <div>
      <Banner />
      {linkedUsedInProjects &&
      (<div className='ProjectBanner'>
        <span className="ProjectBannerTitle">Projects</span>
        <span>{linkedUsedInProjects}</span>
      </div>
    )}

    {instructions &&(
      <div className='InstructionsBanner'>
        {instructions}
      </div>)}
      <div className="ComponentWindow"> 

        {passedComponent}

      </div>


          

        
    </div>
  );
};

export default ViewComponentPage;