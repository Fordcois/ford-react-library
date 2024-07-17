// EXAMPLE
// {
//   name: 'Component Name',
//   url: '/UrlForLibrary',
//   description: 'Description',
//   instructions: "Instructions",
//   component: DirectImport,
//   GithubLink: Link to Components Code,
//   CSSLink: Link to Componenets CSS,
//   ProjectsUsedIn: [
//     {projectName:'Project 1',projectURL:'https://github.com/Fordcois/Project1'},
//     {projectName:'Project 2',projectURL:'https://github.com/Fordcois/Project2'}
//                   ],
//   Tags:['Search','Tags']
// }

import ShareButton from "./components/shareButton";

const ComponentLibraryData = [
    {
      name: 'Share Button',
      url: '/share',
      description: 'This component is designed to be attached to a website to share a message. On Mobile Devices (and supported browsers) clicking the button will bring up a share context menu, on Desktop devices Clicking the button will copy the message to your clipboard.',
      instructions: "When you click the button, a share menu appears (on mobile and some desktop browsers) with a URL. If unavailable, the message 'Samuel Ford - Full Stack Developer https://www.samueljford.com/' will be copied to the clipboard.",
      component: ShareButton,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/shareButton.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/stylesheets/shareButton.css',
      ProjectsUsedIn: [
        {projectName:'BoozersWeepers',projectURL:'https://github.com/Fordcois/BoozersWeepers'},
        {projectName:'Crown Cryptic',projectURL:'https://github.com/Fordcois/crown-cryptic'}
                      ],
      Tags:['Share','CSS']
    },
    {
      name: 'SecondComponent',
      url: '/Maybe',
      description: 'Just A simple Comp',
      instructions: 'Here are instructions for using the component',
      ProjectsUsedIn: [{projectName:'BoozersWeepers',projectURL:'https://github.com/Fordcois/BoozersWeepers'}],
      component:ShareButton,
    }
  ];
  
  export default ComponentLibraryData;