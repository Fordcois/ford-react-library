import '@fontsource/inter';
import ComponentCard from '../components/SiteElements/ComponentCard';
import ComponentLibraryData from "../ComponentLibraryData";
import HeaderBanner from '../components/SiteElements/headerbanner';
import FooterBanner from '../components/SiteElements/footerbanner';

const Homepage = () => {
  const Components = ComponentLibraryData.map((component, index) => (
    
    <ComponentCard
      key={index}
      name={component.name}
      description={component.description}
      url={component.url}
      tags={component.Tags} 
    />
  ));

  return (
    <div className='Pages-container'>
      <HeaderBanner />
      <div className='Homepage-Container'>
        {Components}
      </div>
      <FooterBanner/>
    </div>
  );
};

export default Homepage;
