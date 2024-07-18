import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ComponentLibraryData from "./ComponentLibraryData";
import Homepage from "./Pages";
import ViewComponentPage from "./Pages/compviewpage";

const App = () => {

const RoutesFromJSON = ComponentLibraryData.map((LibraryEntry, index) => (
  <Route key={index} 
  path={LibraryEntry.url} 
  element={<ViewComponentPage 
    ComponentName={LibraryEntry.name}
    passedComponent={<LibraryEntry.component/>} 
    instructions={LibraryEntry.instructions}
    codeLink={LibraryEntry.GithubLink}
    CSSLink={LibraryEntry.CSSLink}/>}/>
  ));


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {RoutesFromJSON}
        <Route path="*"  element={<Navigate to='/'/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;