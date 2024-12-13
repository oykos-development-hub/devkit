# Client Library for SSS

This module represents a customized, tailor made library of reusable components.
Goal of this module is to make front-end development faster and more scalable, by reducing time and effort needed to create the same components all over again and just focusing on the implementation and business logic of the application.
On the other side, second main goal of this module is to eliminate the need for importing large, not-so-optimized and hard to learn libraries and modules such as MaterialUI, TailwindCSS etc.
This library uses open-source, public NPM module `@oykos-development/devkit-react-ts-styled-components`, found at https://www.npmjs.com/package/@oykos-development/devkit-react-ts-styled-components

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

# Installation

To use our devkit, you can install it via npm and yarn:

**npm:**
```npm
npm install @oykos-development/devkit-react-ts-styled-components
```

**yarn:**
```
yarn add @oykos-development/devkit-react-ts-styled-components
```


## Accordion

The `Accordion` element that allows the user to toggle between hiding and displaying content in a vertical list or panel format.

```jsx
interface AccordionData {
  title: ReactNode | JSX.Element | string;
  content?: ReactNode | JSX.Element | string;
  customIcon?: ReactElement;
  style?: CSSProperties;
  theme?: DefaultTheme;
}
```

It has the following props:

| Name       | Type(s)              | Default            | Description                                                                             |
|------------|----------------------|--------------------|-----------------------------------------------------------------------------------------|
| data       | `AccordionData[]`    |                    | Array of ```AccordionData``` object.                                                    |
| customIcon | `ReactElement`       | `<ChevronUpIcon/>` | SVG element                                                                             |
| theme      | `DefaultTheme`       | object             | If applied, custom theme is used                                                        |
| style      | `CSSProperties`      | object             | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { Accordion } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    const accordionData = [
        {
            title: <Typography variant={"bodySmall"} content={"Accordion Title"} />,
            content:  <Typography variant={"bodySmall"} content={"Lorem ipsum dolor sit amet consequuntur a culpa itaque!"} style={{ color: "#616161" }} />
        },
        {
            title: <Typography variant={"bodySmall"} content={"Accordion 1"} />,
            content: <Typography variant={"bodySmall"} content={"Accordion 1 content."} style={{ color: "#616161" }} />,
        },
    ];    
    
  return (
    <Accordion data={accordionData} />
  );
}
```


## Alert

The `Alert` component is a super cool component that can be used for notification purpose. It has the following props:

| Name        | Type(s)                                    | Default   | Description                                                                             |
|-------------|--------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content     | `ReactNode`                                |           | The content of the component. Can be DOM element or string                              |
| variant     | `'primary'` `'error'` `'success'` `'info'` | 'success' | The variant to use. Default value is success                                            |
| size        | `'sm'`  `'md'`  `'lg'`                     | `'md'`    | The size of the component.                                                              |
| icon        | `JSX.Element` or `React.ReactNode`         |           | DOM element                                                                             |
| description | `ReactNode`                                |           | Some description text aligned below the content                                         |
| closeIcon   | `boolean`                                  | true      | If `false`, close icon is removed                                                       |
| onClose     | `(e?: React.MouseEvent<any>) => any`       |           | Callback fired when the component requests to be closed (closeIcon is clicked)          |
| theme       | `DefaultTheme`                             | object    | If applied, custom theme is used                                                        |
| style       | `CSSProperties`                            | object    | The system prop that allows defining system overrides as well as additional CSS styles. |



#### Example usage:
```jsx
import { Alert } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Alert variant="success" content="Some content" size="md" />
  );
}
```


## Avatar

`Avatar` component is commonly used to show circular user profile pictures in applications, providing a visually appealing way to represent users. These avatars use images as their content, typically user profile pictures or object image which can represent actions, statuses, or objects in the user interface. It has the following props:

| Name           | Type(s)                            | Default | Description                                                                             |
|----------------|------------------------------------|---------|-----------------------------------------------------------------------------------------|
| name           | `ReactNode` or `string`            |         | The display `name` of user in component. Can be DOM element or string.                  |
| email          | `ReactNode` or `string`            |         | The display `email` of user in component. Can be DOM element or string.                 |
| size           | `'xs'` `'sm'` `'md'` `'lg'` `'xl'` | 'xl'    | The size of the component.                                                              |
| src            | `string`                           |         | The  `src`  attribute for the  `img`  element.                                          |
| alt            | `string`                           |         | The  `alt`  attribute for the  `img`  element.                                          |
| statusIcon     | `boolean`                          | true    | If `false`, status(online/offline) icon is removed.                                     |
| supportingText | `boolean`                          | true    | If `false`, supporting text(name & email) is removed.                                   |
| online         | `boolean`                          | true    | Switch to offline/online status.                                                        |
| theme          | `DefaultTheme`                     | object  | If applied, custom theme is used                                                        |
| style          | `CSSProperties`                    | object  | The system prop that allows defining system overrides as well as additional CSS styles. |



#### Example usage:
```jsx
import { Avatar } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Avatar size="xl" name="Sinisa Becic" email="sinisa.becic@oykos.me" src="https://eu.ui-avatars.com/api/?name=Sinisa+Becic" />
  );
}
```


## Badge

The `Badge` component is a versatile element that can be used to display notifications, provide additional information, highlight content, and customize visual styles within an application. It has the following props:

| Name    | Type(s)                                                              | Default   | Description                                                                             |
|---------|----------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content | `ReactNode` or `string`                                              |           | The content rendered within the badge.                                                  |
| variant | `'primary'` `'error'` `'success'` `'info'` `'warning'` `'secondary'` | 'primary' | The variant to use.                                                                     |
| size    | `'sm'` `'md'` `'lg'`                                                 | 'md'      | The size of the component.                                                              |
| theme   | `DefaultTheme`                                                       | object    | If applied, custom theme is used                                                        |
| style   | `CSSProperties`                                                      | object    | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { Badge } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Badge variant="warning" content="Some content" size="xs" />
  );
}
```

## Breadcrumbs

The `Breadcrumbs` component that helps users visualize a page's location within the hierarchical structure of a website or web application.

```typescript
interface Item {
  name: string;
  to: string;
  icon?: ReactElement;
}
```

This component has the following props:

| Name      | Type(s)                                      | Default | Description                                                                             |
|-----------|----------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| items     | `Item[]`                                     |         | Array of items.                                                                         |
| separator | `ReactElement`                               |         | Custom separator element.                                                               |
| onClick   | `(e?: MouseEvent<HTMLAnchorElement>) => any` |         | `onClick` event.                                                                        |
| theme     | `DefaultTheme`                               | object  | If applied, custom theme is used.                                                       |
| style     | `CSSProperties`                              | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Breadcrumbs } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

  const links = [
    { name: "link1", to: "" },
    { name: "link2", to: "" },
    { name: "link3", to: "" },
    { name: "link4", to: "" },
    { name: "link5", to: "" },
  ];

  return (
    <Breadcumbs items={links} separator={<span>&gt;</span>} />
  );
}
```

## Button

The `Button` is a reusable component with customizable properties, making it easier to maintain a consistent look and feel across your application. Also you can pass event handlers, attributes, and styles through props. This component has the following props:

| Name          | Type(s)                                       | Default   | Description                                                                             |
|---------------|-----------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content       | `ReactNode` or `string`                       |           | The `content` rendered within the button.                                               |
| variant       | `'primary'` `'secondary'` `'tertiary'`        | 'primary' | The variant to use.                                                                     |
| size          | `'xs'` `'sm'` `'md'` `'lg'` `'xl'`            | 'lg'      | The size of the component.                                                              |
| onClick       | `(e?: MouseEvent<HTMLButtonElement>) => void` |           | `onClick` event.                                                                        |
| customContent | `ReactNode` or `string`                       |           | If is set, ****content**** will be overwritten.                                         |
| disabled      | `boolean`                                     | false     | If `true`, the component is disabled.                                                   |
| theme         | `DefaultTheme`                                | object    | If applied, custom theme is used                                                        |
| style         | `CSSProperties`                               | object    | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { Button } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Button variant="tertiary" content="Some content" size="md" />
  );
}
```


## Checkbox

The possibilities of the `Checkbox` component from the devkit refer to the different ways you can customize, style, and use the `Checkbox` component to create a rich and engaging user experience. This component has the following props:

| Name     | Type(s)                                            | Default | Description                                                                             |
|----------|----------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| size     | `'sm'` `'md'`                                      | 'sm'    | The size of the component.                                                              |
| checked  | `boolean`                                          | false   | If `true`, the component is checked.                                                    |
| onClick  | `(e: MouseEvent<HTMLElement, MouseEvent>) => void` |         | `onClick` event.                                                                        |
| disabled | `boolean`                                          | false   | If `true`, the component is disabled.                                                   |
| theme    | `DefaultTheme`                                     | object  | If applied, custom theme is used                                                        |
| style    | `CSSProperties`                                    | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Checkbox } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Checkbox size="md" />
  );
}
```

## Datepicker

A simple and reusable `Datepicker` component for React. In this table will be showed some of basic props:

| Name       | Type(s)                                                     | Default | Description                                                                             |
|------------|-------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| dateFormat | `'dd/MM/yyyy'` `'MM/dd/yyyy'` `'yyyy/MM/dd'` `'yyyy/dd/MM'` |         | The date format.                                                                        |
| error      | `string`                                                    |         | If `error` prop is applied, the `input` will indicate an error.                         |
| onChange   | `(date: Date) => void`                                      |         | `onChange` event.                                                                       |
| disabled   | `boolean`                                                   | false   | If `true`, the component is disabled.                                                   |
| theme      | `DefaultTheme`                                              | object  | If applied, custom theme is used                                                        |
| style      | `CSSProperties`                                             | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

>Note: This component is essentially 'react-datepicker' module, but additionally customized and optimized for our devkit. If you want to explore the other features(props, events etc.) go [here](https://github.com/Hacker0x01/react-datepicker).

#### Example usage:
```jsx
import { Datepicker } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Datepicker dateFormat='dd/MM/yyyy' />
  );
}
```

## Divider

The `Divider` component is a simple yet versatile UI element that can be used to visually separate content in a list or layout. This component includes the following props:

| Name   | Type(s)         | Default | Description                                                                             |
|--------|-----------------|---------|-----------------------------------------------------------------------------------------|
| width  | `string`        |         | The width of the component.                                                             |
| height | `string`        |         | The height of the component.                                                            |
| color  | `string`        |         | The color of the component.                                                             |
| theme  | `DefaultTheme`  | object  | If applied, custom theme is used.                                                       |
| style  | `CSSProperties` | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Divider } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Divider width="240px" height="1px" />
  );
}
```


## Dropdown

A reusable `Dropdown` component allows you to create a customizable and flexible dropdown menu that can be used throughout your application.

```typescript jsx
type ValueType = { value: string | number; label: string };
```

This component has the following props:

| Name            | Type(s)                  | Default | Description                                                                             |
|-----------------|--------------------------|---------|-----------------------------------------------------------------------------------------|
| options         | `ValueType[]`            |         | Array of dropdown items.                                                                |
| defaultValue    | `ValueType`              |         | The default value. Use when the component is not controlled.                            |
| value           | `ValueType`              |         | The value of the `input` element.                                                       |
| label           | `string`                 |         | The text displayed above the `input`.                                                   |
| noOptionsText   | `string`                 |         | No items message displayed on menu.                                                     |
| placeholder     | `string`                 |         | The short hint displayed in the `input` before the user enters a value.                 |
| leftOptionIcon  | `ReactElement`           |         | The `icon` element rendered within the dropdown on left side.                           |
| rightOptionIcon | `ReactElement`           |         | The icon element rendered within the dropdown on the right side.                        |
| controlIcon     | `ReactElement`           |         | The icon element rendered within the dropdown.                                          |
| menuIsOpen      | `boolean`                |         | If true, menu is open.                                                                  |
| isMulti         | `boolean`                | false   | If true, dropdown becomes a multi-select menu.                                          |
| isSearchable    | `boolean`                | false   | If true, you can search items from the menu.                                            |
| showArrow       | `boolean`                | true    | If false, arrow icon is removed.                                                        |
| isDisabled      | `boolean`                | false   | If true, the component is disabled.                                                     |
| onChange        | `(e: ValueType) => void` |         | onChange event.                                                                         |
| onBlur          | `() => void`             |         | onBlur event.                                                                           |
| onFocus         | `() => void`             |         | onFocus event.                                                                          |
| theme           | `DefaultTheme`           | object  | If applied, custom theme is used.                                                       |
| style           | `CSSProperties`          | object  | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { Dropdown, CircleCheckIcon } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

    const icon = <CircleCheckIcon fill="grey" size="24px" />;

    return (
        <Dropdown label="Dropdown label" leftOptionIcon={icon} controlIcon={icon} placeholder="Select item" />
    );
}
```


## File Upload

`FileUpload` component allows you to create a customizable and flexible file upload feature that can be used throughout your application. This component has the following props:

| Name          | Type(s)                                  | Default   | Description                                                                                |
|---------------|------------------------------------------|-----------|--------------------------------------------------------------------------------------------|
| variant       | `'primary'` `'secondary'`                | 'primary' | The variant to use.                                                                        |
| multiple      | `boolean`                                | false     | If `true`, you can select multiple files.                                                  |
| note          | `ReactNode` or `JSX.Element` or `string` |           | The `note` is content on drop zone. ****Example:**** "Select a file or drag and drop here" |
| hint          | `ReactNode` or `JSX.Element` or `string` |           | The `hint` is content on drop zone positioned below the `note`.                            |
| onUpload      | `(files: FileList) => void`              |           | `onUpload` event.                                                                          |
| customContent | `ReactNode` or `JSX.Element` or `string` |           | Custom content of drop zone.                                                               |
| buttonVariant | `'primary'` `'secondary'` `'tertiary'`   |           | `Button` variant to use.                                                                   |
| icon          | `JSX.Element` or `ReactElement`          |           | DOM element                                                                                |
| theme         | `DefaultTheme`                           | object    | If applied, custom theme is used                                                           |
| style         | `CSSProperties`                          | object    | The system prop that allows defining system overrides as well as additional CSS styles.    |


#### Example usage:
```jsx
import { FileUpload } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

    const onFileUpload = (acceptedFiles) => {
        console.log("File(s) uploaded:", acceptedFiles);
    };

    return (
        <FileUpload onUpload={onFileUpload} note="Select a file or drag and drop here" hint="JPG, PNG or PDF, file size no more than 10MB" />
    );
}
```


## Icons

Standardized `icons` exported as React components. This component has the following props:

| Name     | Type(s)                                      | Default    | Description                                                                             |
|----------|----------------------------------------------|------------|-----------------------------------------------------------------------------------------|
| width    | `string`                                     |            | The width of the icon.                                                                  |
| height   | `string`                                     |            | The height of the icon.                                                                 |
| fill     | `string`                                     |            | The color of the component.                                                             |
| stroke   | `string`                                     |            | The stroke of the component.                                                            |
| onClick  | `((e?: MouseEvent<any, MouseEvent>) => any)` |            | `onClick` event.                                                                        |
| position | `'absolute'` `'relative'`                    | 'relative' | Position of the icon.                                                                   |
| theme    | `DefaultTheme`                               | object     | If applied, custom theme is used.                                                       |
| style    | `CSSProperties`                              | object     | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { ChevronUpIcon } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

    return (
        <ChevronUpIcon width="100px" height="100px" />
    );
}
```

## Input

This component streamlines the implementation of various input types, styles, event handlers, validation, and accessibility features in a React application. This component has the following props:

| Name         | Type(s)                                                             | Default | Description                                                                             |
|--------------|---------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| placeholder  | `string`                                                            |         | The short hint displayed in the `input` before the user enters a value.                 |
| name         | `string`                                                            |         | Name attribute of the `input` element.                                                  |
| value        | `string`                                                            |         | The value of the `input` element.                                                       |
| label        | `string`                                                            |         | The text displayed above the `input`.                                                   |
| error        | `string`                                                            |         | Error message.                                                                          |
| hint         | `string`                                                            |         | Message below the `input` field.                                                        |
| id           | `string`                                                            |         | The id of the `input` element.                                                          |
| type         | `string`                                                            |         | Type of the `input` element.                                                            |
| leftContent  | `ReactElement`                                                      |         | The `content` rendered within the dropdown on left side.                                |
| rightContent | `ReactElement`                                                      |         | The `content` rendered within the dropdown on right side.                               |
| textarea     | `boolean`                                                           | false   | If true, the `input` is transforming to textarea.                                       |
| disabled     | `boolean`                                                           | false   | If true, the component is disabled.                                                     |
| inputRef     | `Ref<HTMLInputElement>`                                             |         | Pass a ref to the `input` element.                                                      |
| inputMode    | `'text'` `'none'` `'tel'` `'url'` `'email'` `'numeric'` `'decimal'` |         |                                                                                         |
| maxLength    | `number'`                                                           |         | Maximum length of characters.                                                           |
| rows         | `number'`                                                           |         | Number of rows to display when **textarea** option is set to true.                      |
| cols         | `number'`                                                           |         | Number of cols to display when **textarea** option is set to true.                      |
| pattern      | `string'`                                                           |         |                                                                                         |
| onChange     | `ChangeEventHandler<any>`                                           |         | `onChange` event.                                                                       |
| onBlur       | `FocusEventHandler`                                                 |         | `onBlur` event.                                                                         |
| onFocus      | `FocusEventHandler`                                                 |         | `onFocus` event.                                                                        |
| theme        | `DefaultTheme`                                                      | object  | If applied, custom theme is used.                                                       |
| style        | `CSSProperties`                                                     | object  | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { Input } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    return (
        <Input placeholder="Type here..." />
    );
}
```

## Leading badge

This component is additional kind of badge component. It has the following props:

| Name              | Type(s)                                       | Default   | Description                                                                             |
|-------------------|-----------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content           | `ReactNode` or `string`                       |           | The content rendered within the leading badge.                                          |
| badgeContent      | `ReactNode` or `string`                       |           | The badge content rendered within the badge.                                            |
| variant           | `'primary'` `'error'` `'success'` `'warning'` | 'primary' | The variant to use.                                                                     |
| leadingBadgeTheme | `'medium'` `'dark'` `'light'`                 | 'light'   | The theme variant to use.                                                               |
| size              | `'md'` `'lg'`                                 | 'md'      | The size of the component.                                                              |
| theme             | `DefaultTheme`                                | object    | If applied, custom theme is used                                                        |
| style             | `CSSProperties`                               | object    | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { LeadingBadge } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    return (
        <LeadingBadge variant="success" leadingBadgeTheme="dark" size="lg"  badgeContent="This is badge content" content="Some content" />
    );
}
```


## Loader

`Loader` component used to indicate that some processing is ongoing and the current page, tab, section, etc. It has the following props:

| Name            | Type(s)         | Default | Description                                                                             |
|-----------------|-----------------|---------|-----------------------------------------------------------------------------------------|
| variant         | `'one'` `'two'` |         | The variant to use.                                                                     |
| width           | `string`        |         | The width of the primary circle spinner.                                                |
| height          | `string`        |         | The height of the primary circle spinner.                                               |
| primaryColor    | `string`        |         | The primary color of the component.                                                     |
| secondaryColor  | `string`        |         | The secondary color of the component.                                                   |
| primaryWidth    | `string`        |         | The width of the secondary circle spinner.                                              |
| secondaryHeight | `string`        |         | The height of the secondary circle spinner.                                             |
| theme           | `DefaultTheme`  | object  | If applied, custom theme is used.                                                       |


#### Example usage:
```jsx
import { Loader } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    return (
        <Loader variant="one" width="100px" height="100px" primaryColor="#b2a422" secondaryColor="#7199aa" />
    );
}
```


## Modal

`Modal` component is a self-contained, customizable, and reusable piece of devkit that can be used to display information or require user interaction. It has the following props:

| Name    | Type(s)                    | Default | Description                                                                             |
|---------|----------------------------|---------|-----------------------------------------------------------------------------------------|
| variant | `'light'` `'dark'`         | 'light' | The variant to use.                                                                     |
| title   | `string`                   |         | Modal title.                                                                            |
| content | `string` or `ReactElement` |         | The `content` rendered within the modal.                                                |
| open    | `boolean`                  |         | If `true`, the component will be shown.                                                 |
| onClose | `any`                      |         | `onClose` event.                                                                        |
| theme   | `DefaultTheme`             | object  | If applied, custom theme is used.                                                       |
| style   | `CSSProperties`            | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Modal, Typography } from '@oykos-development/devkit-react-ts-styled-components';

const customContent = (
    <>
        <div style={{ padding: "2em 0.5em", width: "300px" }}>
            <Typography content="This is modal content." variant="bodyLarge" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography content="This is footer text." variant="bodyMedium" />
            <div style={{ display: "flex", gap: "0.5em" }}>
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </>
);

function MyComponent() {
    return (
        <Modal title="Modal title" content={customContent} />
    );
}
```



## Pagination

A good reusable pagination component should allow users to navigate between pages easily, either by going to the next or previous page or jumping to a specific page. It has the following props:

| Name                 | Type(s)                                           | Default  | Description                                                                             |
|----------------------|---------------------------------------------------|----------|-----------------------------------------------------------------------------------------|
| variant              | `'dotted'` `'filled'` `'outlined'` `'underlined'` | 'filled' | The variant to use.                                                                     |
| itemsPerPage         | `number`                                          |          | The total items per pages.                                                              |
| pageCount            | `number`                                          |          | The total number of pages.                                                              |
| pageRangeDisplayed   | `number`                                          | 3        |                                                                                         |
| displayPages         | `boolean`                                         | true     |                                                                                         |
| marginPagesDisplayed | `number`                                          | 3        |                                                                                         |
| previousLabel        | `string` or `ReactElement`                        |          | The previous label content rendered within the component.                               |
| nextLabel            | `string` or `ReactElement`                        |          | The next label content rendered within the component.                                   |
| fullWidth            | `boolean`                                         | true     | If true component width will be 100%.                                                   |
| renderPaginationText | `((selected: number, total: number) => string)`   |          | Render the pagination text.                                                             |
| onChange             | `(page: number) => void`                          |          | `onChange` event.                                                                       |
| theme                | `DefaultTheme`                                    | object   | If applied, custom theme is used.                                                       |
| style                | `CSSProperties`                                   | object   | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { Pagination } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    const leftIcon = (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.8334 7H1.16675M1.16675 7L7.00008 12.8333M1.16675 7L7.00008 1.16667"
                stroke="#616161"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const rightIcon = (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.16666 7H12.8333M12.8333 7L7 1.16667M12.8333 7L7 12.8333"
                stroke="#616161"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const customPreviousLabel = (
        <p style={{ display: "flex", alignItems: "center", gap: "0.5em", margin: 0 }}>
            {leftIcon}
            Previous
        </p>
    );

    const customNextLabel = (
        <p style={{ display: "flex", alignItems: "center", gap: "0.5em", margin: 0 }}>
            {rightIcon}
            Next
        </p>
    );

    return (
        <Pagination itemsPerPage={4} pageRangeDisplayed={3} previousLabel={customPreviousLabel} nextLabel={customNextLabel} />
    );
}
```



## PIN input

A user interface component that is specifically designed to handle input of PIN (Personal Identification Number) or OTP (One-Time Password) codes. It has the following props:

| Name        | Type(s)                   | Default    | Description             |
|-------------|---------------------------|------------|-------------------------|
| type        | `'numeric'` `'password'`  | 'password' | The input type to use.  |
| handleInput | `(value: string) => void` |            | Handle input function.  |
| length      | `number`                  | 4          | A length of characters. |


#### Example usage:
```jsx
import { Pin } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    return (
        <Pin />
    );
}
```



## Radio

This component allows to manage radio button inputs, enabling users to make single-option selections from a list. It has the following props:

| Name     | Type(s)                                                | Default | Description                                                                             |
|----------|--------------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| size     | `'sm'` `'md'`                                          | 'sm'    | The size of the component.                                                              |
| onClick  | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |         | `onClick` event.                                                                        |
| disabled | `boolean`                                              | false   | If true, the component is disabled.                                                     |
| theme    | `DefaultTheme`                                         | object  | If applied, custom theme is used.                                                       |
| style    | `CSSProperties`                                        | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Radio } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    return (
        <Radio size="md" />
    );
}
```


## Switch

Component that enables toggling between two states, such as on and off. It has the following props:

| Name     | Type(s)                                        | Default | Description                                                                             |
|----------|------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| size     | `'sm'` `'md'`                                  | 'md'    | The size of the component.                                                              |
| content  | `ReactNode` or `string`                        |         | The `content` rendered within the switch button.                                        |
| onChange | `((e: ChangeEvent<HTMLInputElement>) => void)` |         | `onChange` event.                                                                       |
| disabled | `boolean`                                      | false   | If `true`, the component is disabled.                                                   |
| theme    | `DefaultTheme`                                 | object  | If applied, custom theme is used.                                                       |
| style    | `CSSProperties`                                | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Switch, Typography } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

    const customText = <Typography content={"Remember me"} style={{ marginLeft: "0.7rem" }} />;

    return (
        <Switch content={customText} />
    );
}
```


## Table

Component designed to display data in a tabular format, making it easy for users to scan and find patterns or insights. It has the following props:

| Name          | Type(s)                          | Default | Description                                                                             |
|---------------|----------------------------------|---------|-----------------------------------------------------------------------------------------|
| titleElement  | `ReactElement`                   |         | The `titleElement` rendered within the table.                                           |
| headerContent | `JSX.Element` or `JSX.Element[]` |         | The `headerContent` rendered within the table.                                          |
| bodyContent   | `JSX.Element` or `JSX.Element[]` |         | The `bodyContent` rendered within the table.                                            |
| noDataMessage | `string`                         |         | Custom message if there is no data in table.                                            |
| theme         | `DefaultTheme`                   | object  | If applied, custom theme is used.                                                       |
| style         | `CSSProperties`                  | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Table, CircleCheckIcon } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

    const tableHeadings = ["City", "Code", "Latitude", "Longitude"];

    const tableData = [
        { city: "London", code: "UK", latitude: 51.5285578, longitude: -0.2420242 },
        { city: "Manchester", code: "UK", latitude: 53.4722249, longitude: -2.2936739 },
    ];

    const titleElement = (
        <div>
            <h3 style={{ margin: 0, marginBottom: "0.25em" }}>This is table title</h3>
            <p style={{ margin: 0 }}>Additional content...</p>
        </div>
    );

    const headerContent = (
        <tr>
            {tableHeadings.map((heading, index) => (
                <th key={index}>
                    <div>
                        <span>{heading}</span>
                        <CircleCheckIcon size="1em" onClick={() => alert("Icon is clicked")} style={{ cursor: "pointer" }} />
                    </div>
                </th>
            ))}
        </tr>
    );

    const bodyContent = tableData.map((data, index) => (
        <tr key={index}>
            <td>{data.city}</td>
            <td>{data.code}</td>
            <td>{data.latitude}</td>
            <td>{data.longitude}</td>
        </tr>
    ));

    return (
        <Table titleElement={titleElement} headerContent={headerContent} bodyContent={bodyContent} />
    );
}
```



## Tabs

Component designed to break up complex interfaces into manageable subsections, allowing users to quickly switch between different categories of content.

```typescript
interface Tab {
    id: number | string;
    title: string;
    disabled?: boolean;
}
```

This component has the following props:

| Name     | Type(s)                | Default | Description                                                                             |
|----------|------------------------|---------|-----------------------------------------------------------------------------------------|
| tabs     | `Tab[]`                |         | Array of dropdown items.                                                                |
| onChange | `((tab: Tab) => void)` |         | `onChange` event.                                                                       |
| theme    | `DefaultTheme`         | object  | If applied, custom theme is used.                                                       |
| style    | `CSSProperties`        | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Tabs } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

    const tabsArr = [
        { id: 1, title: "Tab 1" },
        { id: 2, title: "Tab 2" },
        { id: 3, title: "Tab 3" },
        { id: 4, title: "Tab 4" },
    ];

    return (
        <Tabs tabs={tabsArr} />
    );
}
```



## Tooltip

Component that displays informative text when users hover over, focus on, or tap an element. It has the following props:

| Name     | Type(s)                                                        | Default    | Description                                                                             |
|----------|----------------------------------------------------------------|------------|-----------------------------------------------------------------------------------------|
| content  | `string` or `ReactElement`                                     |            | The `content` rendered within the tooltip.                                              |
| variant  | `'standard'` `'filled'`                                        | 'standard' | The tooltip variant to use.                                                             |
| position | `'bottom'` `'left'` `'right'` `'top'` `'topLeft'` `'topRight'` |            | Tooltip placement.                                                                      |
| title    | `string`                                                       |            | Tooltip title.                                                                          |
| arrow    | `boolean`                                                      |            | If true, adds an arrow to the tooltip.                                                  |
| theme    | `DefaultTheme`                                                 | object     | If applied, custom theme is used.                                                       |
| style    | `CSSProperties`                                                | object     | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Tooltip } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {

    const customTitle = "Tooltip title";
    const customContent = "This is a tooltip";

    return (
        <Tooltip title={customTitle} content={customContent}>
            <span>Hover over me!</span>
        </Tooltip>
    );
}
```



## Typography

Component that helps present design and content as clearly and efficiently as possible by providing a consistent set of text styles and sizes across the application. It has the following props:

| Name    | Type(s)                                                                                                                                                             | Default      | Description                                                                             |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-----------------------------------------------------------------------------------------|
| content | `ReactNode` or `string`                                                                                                                                             |              | The `content` rendered within the typography.                                           |
| variant | `'h1'` `'h2'` `'h3'` `'h4'` `'h5'` `'h6'` `'bodyLarge'` `'bodyMedium'` `'bodySmall'` `'linkLarge'` `'linkMedium'` `'linkSmall'` `'caption'` `'code'` `'helperText'` | 'bodyMedium' | The `typography` variant to use.                                                        |
| onClick | `((e?: MouseEvent<any, MouseEvent>) => any)`                                                                                                                        |              | `onClick` event.                                                                        |
| theme   | `DefaultTheme`                                                                                                                                                      | object       | If applied, custom theme is used.                                                       |
| style   | `CSSProperties`                                                                                                                                                     | object       | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
```jsx
import { Typography } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
    return (
        <Typography variant="h1" content="Headline" />
    );
}
```