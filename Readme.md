# Overview

This module represents a customized, tailor made library of reusable components. Goal of this module is to make front-end development faster and more scalable, by reducing time and effort needed to create the same components all over again and just focusing on the implementation and business logic of the application. On the other side, second main goal of this module is to eliminate the need for importing large, not-so-optimized and hard to learn libraries and modules such as MaterialUI, TailwindCSS etc.


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

## Usage

To use a some component from devkit, you can import it and render it in your project. This is an example:
```jsx
import { Typography } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Typography content="Some content" variant="primary" size="md" />
  );
}
```

## Alert

The `Alert` component is a super cool component that can be used for notification purpose. It has the following props:

| Name        | Type(s)                                      | Default   | Description                                                                             |
|-------------|----------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content     | `ReactNode`                                  |           | The content of the component. Can be DOM element or string                              |
| variant     | `'primary'` `'error'` `'success'` `'info'`   | 'success' | The variant to use. Default value is success                                            |
| size        | `'sm'`  `'md'`  `'lg'`                       | `'md'`    | There are three variants to use.                                                        |
| icon        | `ReactNode`, `Element`                       |           | DOM element                                                                             |
| description | `ReactNode`                                  |           | Some description text aligned below the content                                         |
| closeIcon   | `boolean`                                    | true      | If `false`, close icon is removed                                                       |
| onClose     | `((e?: MouseEvent<any, MouseEvent>) => any)` |           | Callback fired when the component requests to be closed (closeIcon is clicked)          |
| theme       | `DefaultTheme`                               | object    | If applied, custom theme is used                                                        |
| style       | `CSSProperties`                              | object    | The system prop that allows defining system overrides as well as additional CSS styles. |



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

`Avatar` component are commonly used to show circular user profile pictures in applications, providing a visually appealing way to represent users. These avatars use images as their content, typically user profile pictures or object image which can represent actions, statuses, or objects in the user interface. It has the following props:

| Name           | Type(s)                            | Default | Description                                                                             |
|----------------|------------------------------------|---------|-----------------------------------------------------------------------------------------|
| name           | `ReactNode`                        |         | The display `name` of user in component. Can be DOM element or string.                  |
| email          | `ReactNode`                        |         | The display `email` of user in component. Can be DOM element or string.                 |
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
| content | `ReactNode`                                                          |           | The content rendered within the badge.                                                  |
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

The `Badge` component is a versatile element that can be used to display notifications, provide additional information, highlight content, and customize visual styles within an application. It has the following props:

| Name      | Type(s)                                                    | Default | Description                                                                             |
|-----------|------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| items     | `Array<{name: string, to: string, icon?: ReactElement}>`   |         | Array of items.                                                                         |
| separator | `ReactElement<any, string or JSXElementConstructor<any>>`  |         | Custom separator element.                                                               |
| onClick   | `((e?: MouseEvent<HTMLAnchorElement, MouseEvent>) => any)` |         | `onClick` event.                                                                        |
| theme     | `DefaultTheme`                                             | object  | If applied, custom theme is used.                                                       |
| style     | `CSSProperties`                                            | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

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

| Name          | Type(s)                                                     | Default   | Description                                                                             |
|---------------|-------------------------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content       | `ReactNode`                                                 |           | The content rendered within the button.                                                 |
| variant       | `'primary'` `'secondary'` `'tertiary'`                      | 'primary' | The variant to use.                                                                     |
| size          | `'xs'` `'sm'` `'md'` `'lg'` `'xl'`                          | 'lg'      | The size of the component.                                                              |
| onClick       | `((e?: MouseEvent<HTMLButtonElement, MouseEvent>) => void)` |           | `onClick` event.                                                                        |
| customContent | `ReactNode`                                                 |           | If is set, ****content**** will be overwritten.                                         |
| disabled      | `boolean`                                                   | false     | If `true`, the component is disabled.                                                   |
| theme         | `DefaultTheme`                                              | object    | If applied, custom theme is used                                                        |
| style         | `CSSProperties`                                             | object    | The system prop that allows defining system overrides as well as additional CSS styles. |


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

>Note: This component is essentially 'react-datepicker' module, but additionaly customized and optimized for our devkit. If you want to explore the other features(props, events etc.) go [here](https://github.com/Hacker0x01/react-datepicker).

#### Example usage:
```jsx
import { Checkbox } from '@oykos-development/devkit-react-ts-styled-components';

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

A reusable `Dropdown` component allows you to create a customizable and flexible dropdown menu that can be used throughout your application. This component has the following props:

| Name            | Type(s)                                                   | Default | Description                                                                             |
|-----------------|-----------------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| options         | `Array<{ value: string or number; label: string }>`       |         | Array of dropdown items.                                                                |
| defaultValue    | `Object<{ value: string or number; label: string }>`      |         | The default value. Use when the component is not controlled.                            |
| value           | `Object<{ value: string or number; label: string }>`      |         | The value of the `input` element.                                                       |
| label           | `string`                                                  |         | The text displayed above the `input`.                                                   |
| noOptionsText   | `string`                                                  |         | No items message displayed on menu.                                                     |
| placeholder     | `string`                                                  |         | The short hint displayed in the `input` before the user enters a value.                 |
| leftOptionIcon  | `ReactElement<any, string or JSXElementConstructor<any>>` |         | The `icon` element rendered within the dropdown on left side.                           |
| rightOptionIcon | `ReactElement<any, string or JSXElementConstructor<any>>` |         | The icon element rendered within the dropdown on the right side.                        |
| controlIcon     | `ReactElement<any, string or JSXElementConstructor<any>>` |         | The icon element rendered within the dropdown.                                          |
| menuIsOpen      | `boolean`                                                 |         | If true, menu is open.                                                                  |
| isMulti         | `boolean`                                                 | false   | If true, dropdown becomes a multi-select menu.                                          |
| isSearchable    | `boolean`                                                 | false   | If true, you can search items from the menu.                                            |
| showArrow       | `boolean`                                                 | true    | If false, arrow icon is removed.                                                        |
| isDisabled      | `boolean`                                                 | false   | If true, the component is disabled.                                                     |
| onChange        | `(e: ValueType) => void`                                  |         | onChange event.                                                                         |
| onBlur          | `() => void`                                              |         | onBlur event.                                                                           |
| onFocus         | `() => void`                                              |         | onFocus event.                                                                          |
| theme           | `DefaultTheme`                                            | object  | If applied, custom theme is used.                                                       |
| style           | `CSSProperties`                                           | object  | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
```jsx
import { Dropdown, CircleCheckIcon } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Dropdown label="Dropdown label" leftOptionIcon={<CircleCheckIcon fill="grey" size="24px" />} controlIcon={<CircleCheckIcon fill="grey" size="24px" />} placeholder="Select item" />
  );
}
```


## File Upload

`FileUpload` component allows you to create a customizable and flexible file upload feature that can be used throughout your application. This component has the following props:

| Name          | Type(s)                                                              | Default   | Description                                                                                |
|---------------|----------------------------------------------------------------------|-----------|--------------------------------------------------------------------------------------------|
| variant       | `'primary'` `'secondary'`                                            | 'primary' | The variant to use.                                                                        |
| multiple      | `boolean`                                                            | false     | If `true`, you can select multiple files.                                                  |
| note          | `ReactNode` `Element`                                                |           | The `note` is content on drop zone. ****Example:**** "Select a file or drag and drop here" |
| hint          | `ReactNode` `Element`                                                |           | The `hint` is content on drop zone positioned below the `note`.                            |
| onUpload      | `(files: FileList) => void`                                          |           | `onUpload` event.                                                                          |
| customContent | `ReactNode` `Element`                                                |           | Custom content of drop zone.                                                               |
| buttonVariant | `'primary'` `'secondary'` `'tertiary'`                               |           | `Button` variant to use.                                                                   |
| icon          | `Element or ReactElement<any, string or JSXElementConstructor<any>>` |           | DOM element                                                                                |
| theme         | `DefaultTheme`                                                       | object    | If applied, custom theme is used                                                           |
| style         | `CSSProperties`                                                      | object    | The system prop that allows defining system overrides as well as additional CSS styles.    |


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
| leftContent  | `ReactElement<any, string or JSXElementConstructor<any>>`           |         | The `content` rendered within the dropdown on left side.                                |
| rightContent | `ReactElement<any, string or JSXElementConstructor<any>>`           |         | The `content` rendered within the dropdown on right side.                               |
| textarea     | `boolean`                                                           | false   | If true, the `input` is transforming to textarea.                                       |
| disabled     | `boolean`                                                           | false   | If true, the component is disabled.                                                     |
| inputRef     | `Ref<HTMLInputElement>`                                             |         | Pass a ref to the `input` element.                                                      |
| inputMode    | `'text'` `'none'` `'tel'` `'url'` `'email'` `'numeric'` `'decimal'` |         |                                                                                         |
| maxLength    | `number'`                                                           |         | Maximum length of characters.                                                           |
| rows         | `number'`                                                           |         | Number of rows to display when **textarea** option is set to true.                      |
| cols         | `number'`                                                           |         | Number of cols to display when **textarea** option is set to true.                      |
| pattern      | `string'`                                                           |         |                                                                                         |
| onChange     | `ChangeEventHandler<any>`                                           |         | onChange event.                                                                         |
| onBlur       | `FocusEventHandler<Element>`                                        |         | onBlur event.                                                                           |
| onFocus      | `FocusEventHandler<Element>`                                        |         | onFocus event.                                                                          |
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

| Name         | Type(s)                                       | Default   | Description                                                                             |
|--------------|-----------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content      | `ReactNode`                                   |           | The content rendered within the leading badge.                                          |
| badgeContent | `ReactNode`                                   |           | The badge content rendered within the badge.                                            |
| variant      | `'primary'` `'error'` `'success'` `'warning'` | 'primary' | The variant to use.                                                                     |
| size         | `'md'` `'lg'`                          | 'md'      | The size of the component.                                                              |
| theme        | `DefaultTheme`                                | object    | If applied, custom theme is used                                                        |
| style        | `CSSProperties`                               | object    | The system prop that allows defining system overrides as well as additional CSS styles. |


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

| Name    | Type(s)                                                             | Default | Description                                                                             |
|---------|---------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| variant | `'light'` `'dark'`                                                  | 'light' | The variant to use.                                                                     |
| title   | `string`                                                            |         | Modal title.                                                                            |
| content | `string or ReactElement<any, string or JSXElementConstructor<any>>` |         | The content rendered within the modal.                                                  |
| open    | `boolean`                                                           |         | If true, the component will be shown.                                                   |
| onClose | `any`                                                               |         | onClose event.                                                                          |
| theme   | `DefaultTheme`                                                      | object  | If applied, custom theme is used.                                                       |
| style   | `CSSProperties`                                                     | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

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

| Name                 | Type(s)                                                             | Default  | Description                                                                             |
|----------------------|---------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------------|
| variant              | `'dotted'` `'filled'` `'outlined'` `'underlined'`                   | 'filled' | The variant to use.                                                                     |
| itemsPerPage         | `number`                                                            |          | The total items per pages.                                                              |
| pageCount            | `number`                                                            |          | The total number of pages.                                                              |
| pageRangeDisplayed   | `number`                                                            | 3        |                                                                                         |
| displayPages         | `boolean`                                                           | true     |                                                                                         |
| marginPagesDisplayed | `number`                                                            | 3        |                                                                                         |
| previousLabel        | `string or ReactElement<any, string or JSXElementConstructor<any>>` |          | The previous label content rendered within the component.                               |
| nextLabel            | `string or ReactElement<any, string or JSXElementConstructor<any>>` |          | The next label content rendered within the component.                                   |
| fullWidth            | `boolean`                                                           | true     | If true component width will be 100%.                                                   |
| renderPaginationText | `((selected: number, total: number) => string)`                     |          | Render the pagination text.                                                             |
| onChange             | `(page: number) => void`                                            |          | onChange event.                                                                         |
| theme                | `DefaultTheme`                                                      | object   | If applied, custom theme is used.                                                       |
| style                | `CSSProperties`                                                     | object   | The system prop that allows defining system overrides as well as additional CSS styles. |


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

| Name        | Type(s)                   | Default    | Description              |
|-------------|---------------------------|------------|--------------------------|
| type        | `'numeric'` `'password'`  | 'password' | The input type to use.   |
| handleInput | `(value: string) => void` |            | Handle `input` function. |
| length      | `number`                  | 4          | A length of characters.  |


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
import { Radio } from '@oykos-development/devkit-react-ts-styled-components';

function MyComponent() {
  return (
    <Loader variant="one" width="100px" height="100px" primaryColor="#b2a422" secondaryColor="#7199aa" />
  );
}
```