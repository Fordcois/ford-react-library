# Ford React Library

Welcome to the Ford React Library! This repository serves as a collection of prebuilt React components that I've created from various projects and explorations.

## Design Architecture

This project utilizes Vite with React for its frontend framework due to its simplicity and flexibility in route creation, while maintaining separation between components.
Focus

The primary goal of this site is to facilitate navigation and quick updates of existing components. The architecture is designed to optimize ease and speed of updates. New components are added to the codebase in the components folder, with corresponding CSS stored in a stylesheets folder under the same name.

### Component Management
Components are managed via a JSON file structured as follows:

```json
import DirectImport from LOCATION

{
  "name": "Component Name",
  "url": "/UrlForLibrary",
  "description": "Description",
  "instructions": "Instructions",
  "component": DirectImport,
  "GithubLink": "Link to Components Code",
  "CSSLink": "Link to Components CSS",
  "ProjectsUsedIn": [
    {
      "projectName": "Project 1",
      "projectURL": "https://github.com/Fordcois/Project1"
    }
  ],
  "Tags": ["Search", "Tags"]
}
```

This JSON configuration is dynamically pulled by the main application to automatically generate routes and load specific components. This approach minimizes manual intervention required for importing components multiple times.

### Styling

The site adopts a minimalistic and clean design to accommodate a wide variety of components and styles effectively. Given its utility as a development tool rather than a browsing site, it prioritizes a desktop-first approach. Site-wide styles are managed in a global CSS file, while each component is encouraged to have its own stylesheet.

By adhering to this architecture, the site ensures efficient component management, ease of updates, and consistent design across its varied functionalities.


## Getting Started


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