# [Nogizaka Lib](https://shawnrivers.github.io/nogizaka-lib/)

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
- State management: `Redux`
- JavaScript: `TypeScript`
- CSS: `Sass`, `CSS modules`
- Bundler: `Webpack`
- Compiler: `Babel`
- Linter: `ESLint`
- Test: `jest`, `enzyme`
- Animation: `react-transition-group`
- Others: `react-lazyload`

## Features

- CD List Page
- CD Page
- Song Page
- Member List Page
- Member Page
- Search Page (TBD)

### CD List Page

<img src="https://user-images.githubusercontent.com/23146992/58144007-c2ac1f00-7c87-11e9-8bf4-0128d45763d0.png" alt="Cd List Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145604-af03b700-7c8d-11e9-970c-513c322df2bb.png" alt="Cd List Page 2" width="400" />

**CD List Page** shows released a grid of CD cards (singles and albums). By tapping on any CD card, it will navigate to the corresponding **CD page**.

### CD Page

<img src="https://user-images.githubusercontent.com/23146992/58144263-abb9fc80-7c88-11e9-957c-64d50df3b306.png" alt="Cd Page" width="400" />

**CD Page** shows detailed information about each CD.

The artwork part on the top is swipeable so that you can see artworks in different types of this CD.

A list of cards of songs included in this CD will also be displayed here. By tapping on any card, it will lead you to the **Song Page**.

### Song Page

<img src="https://user-images.githubusercontent.com/23146992/58145006-9befe780-7c8b-11e9-8005-d2e8acd289f8.png" alt="Song Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145009-9e524180-7c8b-11e9-9d33-cca16c81f722.png" alt="Song Page 2" width="400" />

**Song Page** shows detailed information about each song.

The artwork part on the top shows the artwork of the song's CD.

Below the artwork is the type and the CDs of this song, along with the information about creators like songwriters and MV directors.

A list of cards of members who perform this song will also be displayed here. By tapping on any card, it will lead you to the corresponding **Member Page**.

### Member List Page

<img src="https://user-images.githubusercontent.com/23146992/58145371-c8583380-7c8c-11e9-9606-306d065122e0.png" alt="Member List Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145372-cb532400-7c8c-11e9-89dc-f8556e042489.png" alt="Member List Page 2" width="400" />

**Member List Page** shows a grid of member cards (1st. gen to 4th. gen, graduated). By tapping on any member card, it will navigate to the corresponding **Member page**.

### Member Page

<img src="https://user-images.githubusercontent.com/23146992/58145679-f722d980-7c8d-11e9-9f04-13907a4df5c3.png" alt="Member Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145683-fa1dca00-7c8d-11e9-99cb-5f3bb8d11927.png" alt="Member Page 2" width="400" />

**Member page** shows detailed information about each member.

The gradient background behind the profile image is generated based on her glow stick colors.

Member's profile (e.g. name, sites / social networks, birthday, birthplace, etc.) is showed below the profile image.

**写真集/Photo Books** part lists photo albums /photo books information. 

**Position History** shows the records of members positions in each single.

- `C`: *Center* (センター)
- `F`: *Fukujin* (福神)
- `S`: *Selected* (選抜)
- `U`: *Under* (アンダー)

**Position Counter** shows how many times she has been in each position.

- *NOTE:* Technically, *"Center"* should be counted as both *"Fukujin"* and *"Selected"*, *"Fukujin"* should be counted as *"Selected"*. Therefore the actual *"Fukujin"* times should be `C` + `F` (in this case, `4 + 7 = 11`), the actual *"Selected"* times should be `C` + `F` + `S` (in this case, `4 + 7 + 5 = 16`).

**Gallery** shows the member's profile images from her first single to the latest one.

## File Structures

The components structure used in this application is based on [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/).

### src/

Main source code.

- `apis/`
  - API clients
  - Transform API responses to the data type the client needs
- `assets/`
  - Data like icons
- `components/`
  - `atoms/`
    - > smallest components unit, usually basic HTML elements
    - e.g. button
  - `molecules/`
    - > relatively simple groups of UI elements functioning together as a unit
    - e.g. search bar with a input field and button
  - `organisms/`
    - > relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms
    - e.g. header
  - `templates/`
    - > page-level objects that place components into a layout and articulate the design’s underlying content structure
- `containers/`
  - > specific instances of templates that show what a UI looks like with real representative content in place
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


## Data

Data in this application is hosted in [Nogizaka-lib Data](https://github.com/shawnrivers/nogizaka-data) repository.

Profile images and CD artworks © 乃木坂LLC.
