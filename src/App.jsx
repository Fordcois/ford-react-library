import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibraryData from "./ComponentLibraryData";
import Homepage from "./Pages";
import ViewComponentPage from "./Pages/compviewpage";

const App = () => {

  const RoutesFromJSON = ComponentLibraryData.map((component, index) => (
    <Route
    key={index}
    path={component.url}
    element={<ViewComponentPage passedComponent={<component.component/>} />}
  />
  ));




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {RoutesFromJSON}
        <Route path="*" element={'No Page Found'} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;