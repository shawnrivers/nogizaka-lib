# Nogizaka Lib

This is a React web application aiming at showing the information about [Nogizaka46](http://www.nogizaka46.com/) in a user-friendly way.

## Technologies

* SPA framework
  * React
* State management
  * Redux
* JavaScript
  * TypeScript
* CSS
  * Sass
  * CSS modues
* Test
  * jest
  * enzyme

## File Structures

The components in this application is based on [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/).

### src/

* assets/
  * stores data like icons
* components/
  * atoms/
    > smallest components unit, usually basic HTML elements
    * e.g. button
  * molecules/
    > relatively simple groups of UI elements functioning together as a unit
    * e.g. search bar with a input field and button
  * organisms/
    > relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms
    * e.g. header
  * templates/
    > page-level objects that place components into a layout and articulate the design’s underlying content structure
* containers/
  > specific instances of templates that show what a UI looks like with real representative content in place
  * each actual page with data processing and side effects
  * `reducers.ts` and `actions.ts` for each actual page also goes here
* stores/
  * make initial settings for store
* utils/
  * declare functions which will be used commonly across the app
