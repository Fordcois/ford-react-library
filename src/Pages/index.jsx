import '@fontsource/inter';
import ComponentCard from '../components/SiteElements/ComponentCard';
import ComponentLibraryData from "../ComponentLibraryData";
import HeaderBanner from '../components/SiteElements/headerbanner';
import FooterBanner from '../components/SiteElements/footerbanner';
import { useState } from 'react';

const Homepage = () => {
const [filters,setFilters] = useState(['CSS'])
const filteredComponents = ComponentLibraryData.filter((component) => 
  filters.every(filter => component.Tags.includes(filter))
);

const toggleInFilterList = (filter) => {
  const newFilters = [...filters];
  if (newFilters.includes(filter)) {
    const filterIndex = newFilters.indexOf(filter);
    newFilters.splice(filterIndex, 1);
  } else {
    newFilters.push(filter);
  }
  setFilters(newFilters);
};


  const Components = filteredComponents.map((component, index) => (
    <ComponentCard
      key={index}
      name={component.name}
      description={component.description}
      url={component.url}
      tags={component.Tags}
      toggleInFilterList={toggleInFilterList}
    />
  ));

  return (
    <div className='Pages-container'>
      <HeaderBanner toggleInFilterList={toggleInFilterList} filters={filters}/>
      <div className='Homepage-Container'>
        {Components}
      </div>
      <FooterBanner/>
    </div>
  );
};

export default Homepage;
