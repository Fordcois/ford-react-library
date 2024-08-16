import '@fontsource/inter';
import ComponentCard from '../components/SiteElements/ComponentCard';
import ComponentLibraryData from "../ComponentLibraryData";
import HeaderBanner from '../components/SiteElements/headerbanner';
import FooterBanner from '../components/SiteElements/footerbanner';
import { useState } from 'react';

const Homepage = () => {
const [searchTerm,setSearchTerm] = useState('')
const [filters,setFilters] = useState([])


const filteredComponents = ComponentLibraryData.filter((component) => 
  filters.every(filter => component.Tags.includes(filter)) && component.name.toUpperCase().includes(searchTerm.toUpperCase())
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
      filters={filters}
    />
  ));

  return (
    <div className='Pages-container'>
      <HeaderBanner toggleInFilterList={toggleInFilterList} filters={filters} searchTerm={searchTerm} setSearchTerm={setSearchTerm} numOfComponents={filteredComponents.length}/>
      {Components.length===0 && 
      <div className='no-comp-found-message'>
        No Components Found
        <span style={{fontSize:'1rem'}}>(<span className='clear-filter-message' onClick={()=>{setSearchTerm(''),setFilters([])}}>Clear Filters</span>)</span>
      </div>}
      <div className='Homepage-Container'>
        {Components}
      </div>
      <FooterBanner/>
    </div>
  );
};

export default Homepage;
