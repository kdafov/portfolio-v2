# Portfolio project (web platform)
**Note:** This is not a new project. An old version can be found in my GitHub project. This version aims to improve key features and the design, as well as comply with changes that occured in the main technologies used.

**Tools:** The following tools and frameworks were used in this project.
```
{
    "@fontsource/open-sans": "^5.0.28",
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
}
```

## Patch [a 0.0.1 base]
**Overview:** In this patch the basic project structure was created and the required libraries were installed and configured. A version control system was attached, utility first css-framework was configured in order to provide responsive design, and a favicon file was added. Global css class was edited to satisfy the needs of the project and the layout file, that will be automatically applied to all pages, was edited so that it supports the desired font **Open-Sans**. The title and description of the project were also adjusted accordingly. A temporary placeholder file was added in the public directory so that GitHub uploads it to the repo, as if it was empty it would not have been uploaded.

**Files edited:**
```
    /app
        - favicon.ico
        - globals.css
        - layout.js
        - page.js
    / public
        - file.placeholder
    package-lock.json
    package.json
    README.md
```

**Type:** SETUP