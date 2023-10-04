# Insurance Quote Tech Test

A quick tech test built with Next.js, TypeScript, Styled Components.

File structure includes /templates for the page template, /styles for colors/breakpoints/globalstyles, /data for page data (not everything uses this but that's the goal).

## Future Work

I spent a few hours on the setup and initial components, but the next steps would be:
- Add a useContext to pull data (in useStates) between pages
- Make the site much more responsive with the breakpoints in /styles/index.ts, and reducing columns to rows
- Have data flowing through the pages to the components (flexible for CMS)
- Add typography to styles/index.ts to standardize fontSizes
- Set up Next.js for styled components so page.module.css can be removed
- ternarys to check for 'Covered' and if so, pass gold to styled component, otherwise use blue

## Setup

- git clone this project
- install Node
- navigate to the frontend directory using "cd frontend"
- run "npm install"
- use "npm run dev" to run the development server
- visit 'http://localhost:3000'
