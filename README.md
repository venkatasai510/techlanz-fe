This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Folder Structure

    projectname
    │
    │
    └───assets
    |   └───images (Directory to store all image files, gif and icons)
    |   └───icons (Directory to store all icons)
    |
    |
    └───components (Parent directory for app components)
    │   └───formElements (all form related input elements)
    │   └───uiElements (all UI related elements)
    |   └───modals (all modal related elements)
    |
    |
    └───constants (Parent directory for constant data)
    │   └───common.js (common constants used all over the application)
    │   └───home.js (constants used in specific page, (Ex: home page))
    |
    |
    └───containers (Parent directory for all sections - non reusable components)
    |   └───banner (directory for section - Ex: banner)
    |       └───index.js (banner section)
    |       └───banner.module.scss (banner styles)
    |
    |
    └───hooks (Parent directory for all custom hooks)
    |   └───debounce.js (debounce hook)
    |
    |
    └───pages (Parent directory for react pages)
    |   └───index.js (Router structure & default loading page)
    |   └───home.module.scss (Home page styles are mentioned)
    |   └───resource folders (Each specific resource page folder)
    |   └───[subject] (Dynamic pages are specified in this folder)
    |
    |
    └───public
    |   └───docs (pdf, docs etc)
    |   └───fonts (all custom font files)
    |   └───videos (mp4 etc)
    |
    |
    └───services
    |   └───apiUrl (API Endpoints and Base URL)
    |   └───httpHelper (All CRUD request helpers)
    |   └───customService
    |
    |
    └───styles (Directory to wrap all style dependencies of the application)
    |   └───global.scss (Parent style sheet where application level common styles are mentioned)   
    |   └───variable.scss (all variables are mentioned here)
    |   └───mixins.scss (all mixins are mentioned here)
    |
    |
    └───utils (Directory to common resource files)
    |   └───applicationHelper.js (all reusable functions are declared here)
    |   └───storageHelper.js (all storage functions declared here)
    |
    |
    └───resource files (to list common files)

## Design Link
[Design Link](https://www.figma.com)
## Testing Link
[Testing Link]()
## Developer Best Practice
- Maintain proper namespacing for folders, files, variable and function declarations.
- Always create feature or bug branches and then merge with stable master branch.
- Provide proper commit messages & split commits meaningfully.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
