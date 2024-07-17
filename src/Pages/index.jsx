import Banner from "../components/Banner/Banner";
import '@fontsource/inter';
import ComponentLibraryData from "../ComponentLibraryData";

const Homepage = () => {
  const Components = ComponentLibraryData.map((component, index) => (
    <ul key={index}>
      <li>
        <a href={component.url}><strong>Name:</strong> {component.name} </a>
      </li>
      <li>
        <strong>Description:</strong> {component.description}
      </li>
    </ul>
  ));

  return (
    <div>
      <Banner/>
      <div>
        {Components}
      </div>
    </div>
  );
};

export default Homepage;
