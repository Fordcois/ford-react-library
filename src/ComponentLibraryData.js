// EXAMPLE
// { 
//   name: '  Component Name',
//   url: '/share',
//   description: 'HOMEPAGE NAME',
//   instructions: "INSTRUCTIONS FOR PAGE",
//   component: DirectImport,
//   ProjectsUsedIn: [
//     {projectName:'PROJECT1',projectURL:'https://github.com/Fordcois/PROJECT1'},
//     {projectName:'PROJECT2',projectURL:'https://github.com/Fordcois/PROJECT2'}
//                   ]
// }

import ShareButton from "./components/shareButton";

const ComponentLibraryData = [
    {
      name: 'Share Button',
      url: '/share',
      description: 'This component is designed to be attached to a website to share a message. On Mobile Devices (and supported browsers) clicking the button will bring up a share context menu, on Desktop devices Clicking the button will copy the message to your clipboard.',
      instructions: "1. Click the button.\n2. On mobile, a menu will appear for sharing options.\n3. On desktop, the message will be copied to your clipboard.",
      component: ShareButton,
      ProjectsUsedIn: [
        {projectName:'BoozersWeepers',projectURL:'https://github.com/Fordcois/BoozersWeepers'},
        {projectName:'Crown Cryptic',projectURL:'https://github.com/Fordcois/crown-cryptic'}
                      ],
      Tags:['Share']
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