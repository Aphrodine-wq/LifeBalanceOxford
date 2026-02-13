I have analyzed the project structure and identified the likely causes of the "white screen" errors:

1.  **Version Mismatch**: `package.json` has `react` at version `18.3.1` but `react-dom` at version `^19.2.4`. These libraries must have matching major versions to work correctly.
2.  **HTML Issues**: `index.html` contains duplicate script tags for the entry point and an unnecessary `importmap` that conflicts with Vite's module handling. It also references a missing `index.css` file.

Here is the plan to fix these issues and get the website running:

1.  **Fix Dependencies**: Update `package.json` to align `react-dom` with `react` (version `18.3.1`).
2.  **Clean Entry Point**: Edit `index.html` to remove the duplicate script tag, the conflicting `importmap`, and the broken CSS link.
3.  **Install Dependencies**: Run `npm install` to install the corrected packages.
4.  **Start Server**: Run `npm run dev` to build and serve the application.
5.  **Preview**: Open the website in the browser to verify the fix.