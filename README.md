# Nogizaka Lib

This is a React web application aiming at showing the information about [Nogizaka46](http://www.nogizaka46.com/) in a user-friendly way.

## Installation

Install necessary packages:

```bash
npm install
```

Start the app:

```bash
npm start
```

## Technologies

- SPA framework: `React`
- State manager: `Redux`
- JavaScript: `TypeScript`
- CSS: `Sass`, `CSS modules`
- Bundler: `Webpack`
- Transpiler: `ESLint`
- Test: `jest`, `enzyme`
- Animation: `react-transition-group`
- Others: `react-lazyload`

## File Structures

The components structure used in this application is based on [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/).

### src/

Main source code.

- `assets/`
  - Data like icons
- `components/`
  - `atoms/`
    > smallest components unit, usually basic HTML elements
    - e.g. button
  - `molecules/`
    > relatively simple groups of UI elements functioning together as a unit
    - e.g. search bar with a input field and button
  - `organisms/`
    > relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms
    - e.g. header
  - `templates/`
    > page-level objects that place components into a layout and articulate the design’s underlying content structure
- `containers/`
  > specific instances of templates that show what a UI looks like with real representative content in place
  - each actual page with data processing and side effects
  - `reducers.ts` and `actions.ts` for each actual page also goes here
- `stores/`
  - Initial settings for store
- `utils/`
  - Functions which are used commonly across the app
- `models/`
  - Data types of JSON data from the API
- `styles/`
  - Sass variables and templates
