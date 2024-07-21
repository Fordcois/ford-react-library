import HeaderBanner from "../components/SiteElements/headerbanner";

// eslint-disable-next-line react/prop-types
const ViewComponentPage = ({ ComponentName,passedComponent, instructions,codeLink,CSSLink }) => {

  return (
    <div>
      <HeaderBanner ComponentName={ComponentName} codeLink={codeLink} CSSLink={CSSLink} instructions={instructions}/>
      <div className="ComponentWindow"> 
        {passedComponent}
      </div>


          

        
    </div>
  );
};

export default ViewComponentPage;