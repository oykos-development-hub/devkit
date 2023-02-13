# Devkit module

This module represents a customized, tailor made library of reusable components.
Goal of this module is to make front-end development faster and more scalable, by reducing time and effort needed to create the same components all over again and just focusing on the implementation and business logic of the application.
On the other side, second main goal of this module is to eliminate the need for importing large, not-so-optimized and hard to learn libraries and modules such as MaterialUI, TailwindCSS etc.

## Setup
- Run the command `npm install` in order to install all required `node_modules`
- Run command `npm run prepare` in order to set up Husky commands for pre-commit and pre-push

## Development

Branches are created only from `develop` branch, after pulling the latest changes.

`develop` branch is merged to `main` only when the code is ready to be bundled and released.

- To run Storybook and test components locally, run the command: `npm run storybook:dev`
- To update Typescript types, run the command: `npm run ts:declarations`

*Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.*

### Branch naming convention
1. state the type of change you are making: `build, fix, refactor, feat`
2. add forward slash `/`
3. state the task ID (if applicable) - TSK-123
4. add 2-3 words separated by `-` that describe changes you are making
5. Example: `fix/TSK-123-fixing-border-radius`

### Commit & Push

We use the same convention as for Branch naming.

Only difference is that we use `:` instead of `/` in the commit message. And we describe in the message what we did without `-` between words.

Example: `fix: changed border radius from 4px to 2px`

**NOTE #1**: When you want to make commit, please run `npm run git:commit` if it's not run automatically by Husky for any reason.

**NOTE #2**: When you want to push the branch, please run `npm run git:push` if it's not run automatically by Husky for any reason.

This ensures we use the same style of writing code and thus avoid unnecessary styling changes and merge issues.
