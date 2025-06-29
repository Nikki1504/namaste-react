###  Q: What is a NPM?
**Ans:**  It is a tool used for package management and the default package manager for Node projects.
NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.
An alternative to NPM is **Yarn**

###  Q: What is Parcel/Webpack? Why do we need it?
**Ans:** **Parcel** and **Webpack** are modern **web application bundlers** used during both **development** and **production**. They help power your application by combining various assets (JS, CSS, images) and adding important features such as optimization, minification, and browser compatibility.

---

### 🚀 Why use a bundler like Parcel or Webpack?

- Combine and bundle multiple modules/files into one
- Transpile modern JavaScript for older browser support
- Optimize images and code (minify, compress)
- Automatically refresh changes during development (HMR)
- Provide production-ready builds

---

### ⚡ About Parcel

Parcel is a **zero-configuration bundler** known for its **blazing-fast performance** using multicore processing. It can accept any file as an entry point — usually an HTML or JavaScript file.

---

### 🔧 Parcel Features:
- ♻️ **HMR (Hot Module Replacement)** – auto-refresh on file changes
- 🧠 **File watcher algorithm** – built in **C++** for performance
- 🧹 Minification and code cleaning
- 🛠️ Builds for both **development** and **production**
- ⚡ Super-fast build process
- 🖼️ Image optimization
- 💾 Caching during development
- 📦 Compression
- 🌐 Browser compatibility (older versions)
- 🔒 HTTPS support in development
- 🔢 Custom port support
- 🧮 Consistent hashing algorithm
- 🛠️ Zero configuration needed
- 🚀 Automatic code splitting

---

### 📦 Installation & Commands

#### 🔧 Install Parcel:
```bash
npm install -D parcel
-D means it's a development dependency.

Parcel Commands :
For development build:
  npx parcel <entry_point> 
For production build :
  npx parcel build <entry_point> 
```

###  Q: What is .parcel-cache?
**Ans:** 
- Parcel caches code all the time.
- When we run the application, a build is created which takes some time in ms.
- If we make any code changes and save the application, another build will be triggered which might take even less time than the previous build.
- This reduction of time is due to parcel cache.
- Parcel immediately loads the code from the cache every time there is a subsequent build.
- On the very first build parcel creates a folder .parcel-cache where it stores the caches in binary codeformat.
- Parcel gives faster build, faster developer experience because of caching.

###  Q: What is npx?
**Ans:** npx is a tool that is used to execute the packages.
It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

###  Q: What is difference between dependencies vs devDependencies?
**Ans:** In a Node.js project, packages listed in `package.json` are categorized into two main types:

---

### 📦 `dependencies`
- These are the **packages your application needs to run** in **production**.
- They're required at runtime.
- Examples: `react`, `express`, `axios`

✅ **Used in:**
- Production build
- Client-facing or server-side execution

---

### 🧪 `devDependencies`
- These are packages needed **only during development**.
- Not required in the production environment.
- Examples: `parcel`, `webpack`, `eslint`, `jest`

✅ **Used for:**
- Code bundling
- Testing
- Linting
- Formatting

---

### 🛠️ How to install:
```bash
# Install a production dependency
npm install react

# Install a development dependency
npm install -D parcel
```

###  Q: What is Tree Shaking?
**Ans:** Tree shaking is a process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

###  Q: What is Hot Module Replacement?
**Ans:** 
- It means that parcel will keep a track of all the files which you are updating.
- There is **File Watcher Algorithm** (written in C++). It keeps track of all the files which are changing realtime and it tells the server to reload.
- These are all done by PARCEL.

###  Q: List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
**Ans:** 5 superpowers of Parcel:

- HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.
- File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- Minification - Minification is the process of minimizing code and markup in your web pages and script files.
- Image optimization
- Caching while development

###  Q:  What is .gitignore? What should we add and not add into it?
**Ans:** `.gitignore` is a special file used by **Git** to tell it which files or folders to **ignore** (not track) in version control.

It helps keep your repository clean by **excluding unnecessary or sensitive files** from being committed.

### ❌ What **not** to add:

- Your **source code** (like `src/`, `index.html`, etc.)
- Project configuration files (`package.json`, `.eslintrc`, `babel.config.js`)
- Public assets that are needed in deployment
- Documentation files like `README.md`, `solution.md`

---

### 📝 Example `.gitignore`:

```gitignore
# Dependency folder
node_modules/

# Build output
dist/
.parcel-cache/
```
###  Q:  What is the difference between package.json and package-lock.json?
**Ans:** Both `package.json` and `package-lock.json` are essential files used in Node.js projects to manage dependencies, but they serve different purposes:

---

### 📦 `package.json`
- The **manifest file** for your project.
- Lists all your **project dependencies** and metadata.
- Includes info like:
  - Project name, version, scripts
  - Dependencies and devDependencies (with version ranges like `^1.2.0`)
- It's the file you manually edit or generate using `npm init`.

✅ Used for:
- Defining what your project needs.
- Sharing your project with others.

---

### 🔒 `package-lock.json`
- Automatically generated by npm when dependencies are installed.
- **Locks exact versions** of every installed package (and their sub-dependencies).
- Ensures **consistent installs** across different environments.

✅ Used for:
- Reproducible builds
- Version locking of entire dependency tree
- Faster `npm install`

###  Q: Why should I not modify package-lock.json?
**Ans:** You should **not manually edit `package-lock.json`** because:

---

### 🔒 It’s auto-generated by npm
- This file is created and maintained **automatically** by npm when you run `npm install`, `npm add`, etc.
- It contains a **precise record of every installed package** and their sub-dependencies, including exact versions, URLs, and integrity checks.

---

### 🚫 Manually editing it can:
- ❌ Break your dependency tree
- ❌ Cause install errors or mismatches across environments
- ❌ Make the app unstable or unpredictable
- ❌ Interfere with caching, integrity checks, or reproducible builds

---

### ✅ What to do instead:
- Let **npm manage it**
- If it gets corrupted or outdated:
  1. Delete `node_modules/` and `package-lock.json`
  2. Run `npm install` to regenerate

###  Q: What is node_modules ? Is it a good idea to push that on git?
**Ans:** 
- Which gets installed is like a database for the npm.
- Every dependency in node_module will have its package.json.
- Node modules are very heavy so we should always put this in git ignore.

NOTE: Never touch node_modules

### Q: What is the dist folder?
**Ans:** When using a bundler like **Parcel**, it helps optimize and prepare your code for deployment by creating a **build** of your project.

---

### 📁 What is the `/dist` folder?

- The `/dist` (short for **distribution**) folder contains the **minified**, **optimized**, and **bundled** version of your source code.
- It is generated during the **build process** and is what you deploy to production.
- It includes:
  - Minified JavaScript, CSS, and HTML
  - Compiled modules
  - Optimized assets (images, fonts, etc.)
  - Code transformed for browser compatibility

---

### 🚀 Parcel in Development

To start a development server:

```bash
npx parcel index.html
```
- Runs your app on a local development server
- Fast build with features like Hot Module Replacement (HMR)
- Not minified or optimized — meant for debugging

To create a production build:
```bash
npx parcel build index.html
```
Generates a fully optimized build:
✅ Minifies the code
✅ Compresses assets
✅ Cleans unnecessary code
✅ Outputs everything into the /dist folder

### Q: What is browserslist?
**Ans:** Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

