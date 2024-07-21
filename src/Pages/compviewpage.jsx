import HeaderBanner from "../components/SiteElements/headerbanner";
import FooterBanner from "../components/SiteElements/footerbanner";

// eslint-disable-next-line react/prop-types
const ViewComponentPage = ({ ComponentName,passedComponent, instructions,codeLink,CSSLink }) => {

  return (
    <div className="Pages-container">
      <HeaderBanner ComponentName={ComponentName} codeLink={codeLink} CSSLink={CSSLink} instructions={instructions}/>
      <div className="ComponentWindow"> 
        {passedComponent}
      </div>


          

      <FooterBanner/>
    </div>
  );
};

export default ViewComponentPage;