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
import OnscreenKeyboard from "./components/componentsInLib/OSKeyboard/OnscreenKeyboard";
import Tooltips from "./components/componentsInLib/ToolTips/tooltips";


export const ComponentLibraryData = [
    {
      name: 'Share',
      url: '/share',
      description: 'This component is designed to be attached to a website to share a message. On Mobile Devices (and supported browsers) clicking the button will bring up a share context menu, on Desktop devices Clicking the button will copy the message to your clipboard.',
      instructions: "When you click the button, a share menu appears (on mobile and some desktop browsers) with a URL. If unavailable, the message and url defined in the code will be copied to the clipboard.This code uses the React-Icons Library which will need to be installed and imported into your project.",
      component: ShareButton,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/ShareButton/shareButton.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/ShareButton/shareButton.css',
      Tags:['SHARE','CSS','SOCIALS']
    },
    {
      name: 'Tool Tips',
      url: '/tooltips',
      description: "A custom-styled tooltip that appears when hovering over an element. Includes options for colors, messages, and relative positioning.",
      instructions: "To implement tooltips, wrap the target element in a container with a separate span for the tooltip message. On hover, use CSS to toggle the tooltip’s visibility to active.",
      component: Tooltips,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/ToolTips/tooltips.jsx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/ToolTips/tooltips.css',
      Tags:['UX','CSS']
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
    },
    {
      name: 'Onscreen Keyboard',
      url: '/onscreenkeyboard',
      description: 'A Keyboard component that users can interact with using either the onscreen buttons or their own keyboard. This has the advantage of not triggering the keyboard to appear on mobile devices.',
      instructions: 'Modify the Type function to interact with whatever you wish. Currently, it works with a string, but it can also be adapted to work with arrays. Additional keyboard actions can be implemented by adding more IF conditions.',
      component:OnscreenKeyboard,
      GithubLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/OSKeyboard/OnscreenKeyboard.jsxx',
      CSSLink:'https://github.com/Fordcois/ford-react-library/blob/main/src/components/componentsInLib/OSKeyboard/OnscreenKeyboard.css',
      Tags:['UI','INPUT','EVENT TRIGGER']
    }

  ];
export default ComponentLibraryData;
