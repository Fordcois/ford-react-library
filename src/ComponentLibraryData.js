// EXAMPLE
// {
//   name: 'Component Name',
//   url: '/UrlForLibrary',
//   description: 'Description',
//   instructions: "Instructions",
//   component: DirectImport,
//   GithubLink: Link to Components Code,
//   CSSLink: Link to Componenets CSS,
//   Tags:['Search','Tags']
// }

import ShareButton from "./components/shareButton";
import LanguageSwitch from "./components/LanguageSwitch";

export const ComponentLibraryData = [
    {
      name: 'Share',
      url: '/share',
      description: 'This component is designed to be attached to a website to share a message. On Mobile Devices (and supported browsers) clicking the button will bring up a share context menu, on Desktop devices Clicking the button will copy the message to your clipboard.',
      instructions: "When you click the button, a share menu appears (on mobile and some desktop browsers) with a URL. If unavailable, the message and url defined in the code will be copied to the clipboard. \n This code uses the React-Icons Library which will need to be installed and imported into your project.",
      component: ShareButton,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/shareButton.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/stylesheets/shareButton.css',
      Tags:['SHARE','CSS','SOCIALS']
    },
    {
      name: 'Switch Language',
      url: '/languageswitch',
      description: 'A simple method for switching languages for content on a single page. This approach allows the creator to write content in multiple languages and lets users switch between them seamlessly, while maintaining a readable codebase and avoiding the need to create multiple pages.',
      instructions: 'Languages are controlled via an object at the top of the code, and the displayed text is dynamically updated based on the current language state. Buttons allow users to easily switch between different languages, thereby changing the displayed text according to the selected language.',
      component:LanguageSwitch,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/LanguageSwitch.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/stylesheets/LanguageSwitch.css',
      Tags:['LANGUAGE','ACCESSIBILITY']
    }
  ];
  
export const numberOfComponents = ComponentLibraryData.length
export default ComponentLibraryData;
