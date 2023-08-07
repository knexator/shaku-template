# shaku-template

Simple example of using Shaku on a modern typescript project.

To try this template:
- `git clone --recurse-submodules https://github.com/knexator/shaku-template.git`
- `cd shaku-template`
- Build Shaku:
  - `cd Shaku`
  - `npm install`
  - `npm run bundle`
  - `cd ..`
- `npm install`
- `npm run dev`, to start the development server

While the development server is up, the page will autoreload with any changes to the files in `src`

To make your own Shaku game:
- `npm create vite@latest`, select vanilla typescript and choose a name, such as `project-name`
- `cd project-name`
- `git init`
- `git submodule add https://github.com/knexator/Shaku.git -b typescript`
- `npm i ./Shaku` to add Shaku as a local dependency
- Build Shaku:
  - `cd Shaku`
  - `npm install`
  - `npm run bundle`
  - `cd ..`
- `npm install`
- `npm run dev`, to start the development server

These instructions will get easier as Shaku's tooling improves
