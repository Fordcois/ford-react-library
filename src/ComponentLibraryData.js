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

import ShareButton from "./components/componentsInLib/ShareButton/shareButton";
import LanguageSwitch from "./components/componentsInLib/LanguageSwitch/LanguageSwitch";
import VertNavbar from "./components/componentsInLib/vertNavBar/vertNavBar";
import RotatingCard from "./components/componentsInLib/RotatingCard/RotatingCard";

export const ComponentLibraryData = [
    {
      name: 'Share',
      url: '/share',
      description: 'This component is designed to be attached to a website to share a message. On Mobile Devices (and supported browsers) clicking the button will bring up a share context menu, on Desktop devices Clicking the button will copy the message to your clipboard.',
      instructions: "When you click the button, a share menu appears (on mobile and some desktop browsers) with a URL. If unavailable, the message and url defined in the code will be copied to the clipboard. \n This code uses the React-Icons Library which will need to be installed and imported into your project.",
      component: ShareButton,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/ShareButton/shareButton.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/ShareButton/shareButton.css',
      Tags:['SHARE','CSS','SOCIALS']
    },
    {
      name: 'Switch Language',
      url: '/languageswitch',
      description: 'A simple method for switching languages for content on a single page. This approach allows the creator to write content in multiple languages and lets users switch between them seamlessly, while maintaining a readable codebase and avoiding the need to create multiple pages.',
      instructions: 'Languages are controlled via an object at the top of the code, and the displayed text is dynamically updated based on the current language state. Buttons allow users to easily switch between different languages, thereby changing the displayed text according to the selected language.',
      component:LanguageSwitch,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/LanguageSwitch/LanguageSwitch.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/LanguageSwitch/languageSwitch.css',
      Tags:['LANGUAGE','ACCESSIBILITY']
    },
    {
      name: 'Vertical Navigation Bar',
      url: '/vertNavBar',
      description: 'A vertical navigation bar that floats above other content on the page. It can be hidden, showing just icons, or it can be expanded to give full descriptions. When expanded, information on the page is shifted so it is not obscured.',
      instructions: 'Adjust the CSS Top,Bottom, and Height values to position navigation bar as needed',
      component:VertNavbar,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/vertNavBar/vertNavBar.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/vertNavBar/vertNavBar.css',
      Tags:['NAVIGATION']
    },
    {
      name: 'Rotation Card',
      url: '/Rotatecard',
      description: 'A CSS element that displays information and rotates 180 degrees on mouseover, like a playing card, to reveal different information on the back.',
      instructions: 'Modify the content in the front and back styled divs. The container ensures they overlap, and the backface visibility property ensures content is visible only from one side.',
      component:RotatingCard,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/RotatingCard/RotatingCard.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/RotatingCard/RotatingCard.css',
      Tags:['CSS','UI']
    }
  ];
  
export const numberOfComponents = ComponentLibraryData.length
export default ComponentLibraryData;
