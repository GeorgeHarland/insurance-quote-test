# Insurance Quote Tech Test

A quick tech test built with Next.js, TypeScript, Styled Components.

File structure includes /templates for the page template, /styles for colors/breakpoints/globalstyles, /data for page data (not everything uses this but that's the goal)

Preppush script in package.json to handle prettier + lint

useContext to handle state between pages

## Future Work

I spent a few hours on the setup and initial components, but the next steps would be:
- Make the site much more responsive with the breakpoints in /styles/index.ts, and reducing columns to rows
- Have data flowing through the pages to the components (flexible for CMS)
- Add typography to styles/index.ts to standardize fontSizes
- add some tests, particularly for the PlansDetails component and checking the links work

## Setup

- git clone this project
- install Node
- navigate to the frontend directory using "cd frontend"
- run "npm install"
- use "npm run dev" to run the development server
- visit 'http://localhost:3000'

![image](https://github.com/GeorgeHarland/insurance-quote-test/assets/37070520/6dbfed22-6f30-4814-b44a-2e61cc25e5c2)

