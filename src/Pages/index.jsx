import '@fontsource/inter';
import ComponentCard from '../components/SiteElements/ComponentCard';
import ComponentLibraryData from "../ComponentLibraryData";
import HeaderBanner from '../components/SiteElements/headerbanner';

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
    <div>
      <HeaderBanner />
      <div className='Homepage-Container'>
        {Components}
      </div>
    </div>
  );
};

export default Homepage;
