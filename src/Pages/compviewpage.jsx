import Banner from "../components/Banner/Banner";

// eslint-disable-next-line react/prop-types
const ViewComponentPage = ({ passedComponent, instructions, projectsUsedIn,codeLink,CSSLink }) => {
// eslint-disable-next-line 
const linkedUsedInProjects = projectsUsedIn?.map((project, index) => (
    <a key={index} href={project.projectURL} target="_blank" rel="noopener noreferrer">
      {project.projectName}
    </a>
    ));

  return (
    <div>
      <Banner codeLink={codeLink} CSSLink={CSSLink} linkedUsedInProjects={linkedUsedInProjects} instructions={instructions}/>
      <div className="ComponentWindow"> 
        {passedComponent}
      </div>


          

        
    </div>
  );
};

export default ViewComponentPage;