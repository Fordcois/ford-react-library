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

export const ComponentLibraryData = [
    {
      name: 'Share',
      url: '/share',
      description: 'This component is designed to be attached to a website to share a message. On Mobile Devices (and supported browsers) clicking the button will bring up a share context menu, on Desktop devices Clicking the button will copy the message to your clipboard.',
      instructions: "When you click the button, a share menu appears (on mobile and some desktop browsers) with a URL. If unavailable, the message and url defined in the code will be copied to the clipboard. \n This code uses the React-Icons Library which will need to be installed and imported into your project.",
      component: ShareButton,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/shareButton.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/stylesheets/shareButton.css',
      ProjectsUsedIn: [
        {projectName:'Portfolio',projectURL:'https://github.com/Fordcois/Portfolio'}
                      ],
      Tags:['SHARE','CSS','SOCIALS']
    },
    {
      name: 'SecondComponent',
      url: '/Maybe',
      description: 'Just A simple Comp',
      instructions: 'Here are instructions for using the component',
      component:ShareButton,
    }
  ];
  
export const numberOfComponents = ComponentLibraryData.length
export default ComponentLibraryData;
