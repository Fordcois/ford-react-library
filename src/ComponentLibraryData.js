import TrialOne from "./components/trialone";

const ComponentLibraryData = [
    {
      name: 'NewComponent',
      url: '/TrialComp',
      description: 'Just A simple Comp',
      instructions: 'So here is an example of a simple text string',
      component: TrialOne,
      ProjectsUsedIn: [
        {projectName:'BoozersWeepers',projectURL:'https://github.com/Fordcois/BoozersWeepers'},
        {projectName:'Crown Cryptic',projectURL:'https://github.com/Fordcois/crown-cryptic'}
                      ]
    },
    {
      name: 'SecondComponent',
      url: '/Maybe',
      description: 'Just A simple Comp',
      instructions: 'Here are instructions for using the component',
      ProjectsUsedIn: [{projectName:'BoozersWeepers',projectURL:'https://github.com/Fordcois/BoozersWeepers'}],
      component:TrialOne,
    }
  ];
  
  export default ComponentLibraryData;