# NPM

- [**Notes**](#npm---notes)
- [**Resources**](#npm---resources)

## NPM - Notes

To install ***NPM***, simply install [***Node.js](https://nodejs.org).

### Commands

- Install
  - without arguments

        npm i       # option 1
        npm install # option 2
    Running **npm install** without arguments installs modules defined in the dependencies section of the **package.json** file.
  - with arguments

        npm install <package>             # install specified package
        npm install <package1> <package2> # install multiple packages
        npm install <package>@<version>   # install specified version of package
  - Options
    - (with ***--global***)

          npm install -g       # option 1
          npm install --global # option 2
      When run with **--global** or **-g**, **npm install** installs the package globally. This means the package is installed in two places. The first is at the root directory where **package.json** is defined. The second is the global node_modules folder on the user system.
    - (with ***--save***)

          npm install <package> -S     # option 1
          npm install <package> --save # option 2
      When run with **--save**, **npm install** modifies the **package.json** file to include the specified package as a dependency. In this case, the express package will be added as a dependency to **package.json**.
    - (with ***--save-dev***)

      The **--save-dev** flag specifies that the package should be added to the devDependencies section of the **package.json** rather than the dependencies section.
    - (with ***--production***)

          npm install -p           # option 1
          npm install --production # option 2
      The **--production** flag specifies to exclude devDependencies from the install. This means any dependency listed under the devDependencies section of package.json won't get installed when this flag is present.
- Uninstall

      npm (-g) un <package>
      npm (-g) uninstall <package>
- List installed packages

      npm list -g --depth=0 # global
      npm list              # local
- Update (global) packages

      npm up (-g) <package1> <package2> <package3>     # option 1
      npm update (-g) <package1> <package2> <package3> # option 2
- Update ***NPM***

      npm install -g npm@latest # multiplatform
      npm-windows-upgrade       # for windows
- Fix issues (for example, when you move a project to another machine)

      npm audit fix
      npm audit fix --force

## NPM - Resources

- [NPM documentation](https://docs.npmjs.com)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [⬆ Back to top](#npm)
