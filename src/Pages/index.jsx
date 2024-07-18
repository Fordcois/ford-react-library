import '@fontsource/inter';
import Banner from "../components/SiteComponents/Banner";
import ComponentCard from '../components/SiteComponents/ComponentCard';
import ComponentLibraryData from "../ComponentLibraryData";

const Homepage = () => {
  const Components = ComponentLibraryData.map((component, index) => (
    
    <ComponentCard
      key={index}
      name={component.name}
      description={component.description}
      url={component.url}
      tags={component.tags} 
    />
  ));

  return (
    <div>
      <Banner />
      <div className='Homepage-Container'>
        {Components}
      </div>
    </div>
  );
};

export default Homepage;
