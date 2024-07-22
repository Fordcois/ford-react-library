# Ford React Library

This repository serves as a collection of prebuilt React components that I've created from various projects and explorations in order to allow easy reuse and showcasing.

## Design Architecture

This project uses Vite with React for its frontend framework due to its simplicity and flexibility in route creation, while maintaining separation between components. Although other options like TypeScript were considered, this project's elements are intended as a starting point and aim to provide the minimal setup needed for integration into other projects.

The primary goal of this site's file structure is to enable quick updates. New components are added to the codebase in their own folder, along with a corresponding style sheet, and then included in the JSON file below. This is all that is required to create their card on the home page and their page on the site.

The JSON is structured as follows:

```javascript
import DirectImport from LOCATION

{
  "name": "Component Name",
  "url": "/UrlForLibrary",
  "description": "Description",
  "instructions": "Instructions",
  "component": DirectImport,
  "GithubLink": "Link to Components Code",
  "CSSLink": "Link to Components CSS",
  "Tags": ["Search", "Tags"]
}
```

This JSON is then mapped through first in the routes directory, creating pages to showcase each component without any manual setup. A single compViewPage component is automatically generated with a URL as soon as an entry is added to the JSON.

The JSON file is also mapped on the index page, generating a card with a name, description, and tags that is automatically linked to the new page.

This approach ensures that as soon as an entry is added to the JSON, it is live on the site with no further amendments necessary.

### Styling

The site adopts a minimalistic and clean design to accommodate a wide variety of components and styles effectively. Given its utility as a development tool rather than a browsing site, it prioritizes a desktop-first approach although certain considerations are made for mobile. Site-wide styles are managed in a global CSS file, while each component is encouraged to have its own stylesheet for ease of copying into new projects.

By adhering to this architecture, the site ensures efficient component management, ease of updates, and consistent design across its varied functionalities.


## Getting Started

The site is hosted at (https://www.library.frdmedia.co.uk/) but if you wish to run it locally you can follow the below instructions:


1. Clone the Repository

```bash
git clone https://github.com/Fordcois/ford-react-library.git
```

2. Install Dependencies

```bash 
npm install
```

3. Start the Development Server

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser to see the application in action.


## Future Features

**Search Functionality:** Implement a search feature on the homepage to search by component names, descriptions, or tags.

**Filters & Categories:** As the library grows, consider categorizing components into sections (e.g. frontend, backend, database) accessible via separate pages.

**Direct Code Access:** Provide direct access to the component's code and CSS from the component display page, reducing the need for manual navigation to GitHub.