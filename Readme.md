## Local development
When cloning the repo, run following commands:
- `npm install`
- `npm run prepare`

Branch naming strategy we use is:
1. state the type of change you are making
2. build, fix, refactor, feat
3. add semicolon - :
4. state the task ID (if applicable) - TSK-123
5. add 2-3 words separated by - that describe changes you are making:
`fix:TSK-123-fixing-border-radius`

Branches are created only from `development` branch, after pulling the latest changes.

To run Storybook and test components locally, run the command:
`npm run storybook:dev`

To update Typescript types, run the command:
`npm run ts:declarations`

When you finish making changes, before pushing and making Pull request be sure to run this command:
`npm run git:pull-request`