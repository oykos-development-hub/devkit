# Overview

This module represents a customized, tailor made library of reusable components. Goal of this module is to make front-end development faster and more scalable, by reducing time and effort needed to create the same components all over again and just focusing on the implementation and business logic of the application. On the other side, second main goal of this module is to eliminate the need for importing large, not-so-optimized and hard to learn libraries and modules such as MaterialUI, TailwindCSS etc.


# Installation

To use our devkit, you can install it via npm and yarn:

**npm:**
```
npm i @oykos-development/devkit-react-ts-styled-components
```
**yarn:**
```
yarn add @oykos-development/devkit-react-ts-styled-components
```

## Usage

To use a some component from devkit, you can import it and render it in your project. This is an example:

    import { Typography } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Typography content="Some content" variant="primary" size="md" />
      );
    }


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
    import { Alert } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Alert variant="success" content="Some content" size="md" />
      );
    }


## Avatar

`Avatar` component are commonly used to show circular user profile pictures in applications, providing a visually appealing way to represent users. These avatars use images as their content, typically user profile pictures or object image which can represent actions, statuses, or objects in the user interface. It has the following props:

| Name           | Type                               | Default | Description                                                                             |
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
    import { Avatar } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Avatar size="xl" name="Sinisa Becic" email="sinisa.becic@oykos.me" src="https://eu.ui-avatars.com/api/?name=Sinisa+Becic" />
      );
    }


## Badge

The `Badge` component is a versatile element that can be used to display notifications, provide additional information, highlight content, and customize visual styles within an application. It has the following props:

| Name    | Type                                                                 | Default   | Description                                                                             |
|---------|----------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------------------|
| content | `ReactNode`                                                          |           | The content rendered within the badge.                                                  |
| variant | `'primary'` `'error'` `'success'` `'info'` `'warning'` `'secondary'` | 'primary' | The variant to use.                                                                     |
| size    | `'sm'` `'md'` `'lg'`                                                 | 'md'      | The size of the component.                                                              |
| theme   | `DefaultTheme`                                                       | object    | If applied, custom theme is used                                                        |
| style   | `CSSProperties`                                                      | object    | The system prop that allows defining system overrides as well as additional CSS styles. |


#### Example usage:
    import { Badge } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Badge variant="warning" content="Some content" size="xs" />
      );
    }

## Breadcrumbs

The `Badge` component is a versatile element that can be used to display notifications, provide additional information, highlight content, and customize visual styles within an application. It has the following props:

| Name      | Type                                                         | Default | Description                                                                |
|-----------|--------------------------------------------------------------|---------|----------------------------------------------------------------------------|
| items     | Array<{ name: string; to: string; icon?: ReactElement }>    |         | An array of objects representing the menu items.                           |
| separator | `ReactElement<any, string \| JSXElementConstructor<any>> \| null` |         | A custom separator element to be rendered between menu items.               |
| onClick   | ((e?: MouseEvent<HTMLAnchorElement, MouseEvent>) => any)    |         | A callback function to be called when a menu item is clicked.              |
| theme     | DefaultTheme                                                 | object  | An object representing the custom theme to be applied to the menu component. |
| style     | CSSProperties                                                | object  | A system prop that allows defining additional CSS styles for the menu.     |


#### Example usage:
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

## Button

The `Button` is a reusable component with customizable properties, making it easier to maintain a consistent look and feel across your application. Also you can pass event handlers, attributes, and styles through props. This component has the following props:

| Name          | Type                                                        | Default   | Description                                                                             |
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
    import { Button } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Button variant="tertiary" content="Some content" size="md" />
      );
    }


## Checkbox

The possibilities of the `Checkbox` component from the devkit refer to the different ways you can customize, style, and use the `Checkbox` component to create a rich and engaging user experience. This component has the following props:

| Name     | Type                                               | Default | Description                                                                             |
|----------|----------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| size     | `'sm'` `'md'`                                      | 'sm'    | The size of the component.                                                              |
| checked  | `boolean`                                          | false   | If `true`, the component is checked.                                                    |
| onClick  | `(e: MouseEvent<HTMLElement, MouseEvent>) => void` |         | `onClick` event.                                                                        |
| disabled | `boolean`                                          | false   | If `true`, the component is disabled.                                                   |
| theme    | `DefaultTheme`                                     | object  | If applied, custom theme is used                                                        |
| style    | `CSSProperties`                                    | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
    import { Checkbox } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Checkbox size="md" />
      );
    }

## Datepicker

A simple and reusable `Datepicker` component for React. In this table will be showed some of basic props:

| Name       | Type                                                        | Default | Description                                                                             |
|------------|-------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------|
| dateFormat | `'dd/MM/yyyy'` `'MM/dd/yyyy'` `'yyyy/MM/dd'` `'yyyy/dd/MM'` |         | The date format.                                                                        |
| error      | `string`                                                    |         | If `error` prop is applied, the `input` will indicate an error.                         |
| onChange   | `(date: Date) => void`                                      |         | `onChange` event.                                                                       |
| disabled   | `boolean`                                                   | false   | If `true`, the component is disabled.                                                   |
| theme      | `DefaultTheme`                                              | object  | If applied, custom theme is used                                                        |
| style      | `CSSProperties`                                             | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

>Note: This component is essentially 'react-datepicker' module, but additionaly customized and optimized for our devkit. If you want to explore the other features(props, events etc.) go [here](https://github.com/Hacker0x01/react-datepicker).

#### Example usage:
    import { Checkbox } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Datepicker dateFormat='dd/MM/yyyy' />
      );
    }


## Divider

The `Divider` component is a simple yet versatile UI element that can be used to visually separate content in a list or layout. This component includes the following props:

| Name   | Type            | Default | Description                                                                             |
|--------|-----------------|---------|-----------------------------------------------------------------------------------------|
| width  | `string`        |         | The width of the component.                                                             |
| height | `string`        |         | The height of the component.                                                            |
| color  | `string`        |         | The color of the component.                                                             |
| theme  | `DefaultTheme`  | object  | If applied, custom theme is used                                                        |
| style  | `CSSProperties` | object  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
    import { Divider } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Divider width="240px" height="1px" />
      );
    }

## Dropdown

A reusable `Dropdown` component allows you to create a customizable and flexible dropdown menu that can be used throughout your application. This component has the following props:

| Name            | Type                         | Default                                                                 | Description                                                                             |
|-----------------|------------------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| options         | `Array<{value: string        | number, label: string}>`                                                |                                                                                         | Array of dropdown items.    |
| defaultValue    | `Object<{value: string       | number, label: string}>`                                                |                                                                                         |The default value. Use when the component is not controlled.|
| value           | `Object<{value: string       | number, label: string}>`                                                |                                                                                         |The value of the `input` element.|
| label           | `string`                     || The short hint displayed in the `input` before the user enters a value. |
| noOptionsText   | `string`                     | 'No options'                                                            | No items message displayed on menu.                                                     |
| placeholder     | `string`                     || The short hint displayed in the `input` before the user enters a value. |
| leftOptionIcon  | `ReactElement<any, string  ` | ` JSXElementConstructor<any>>`                                          |                                                                                         |                                                                                        |                                                                                         |                                                                                         | The `icon` element rendered within the dropdown on left side. |
| rightOptionIcon | `ReactElement<any, string    | JSXElementConstructor<any>>`                                            |                                                                                         |                                                                                         | The `icon` element rendered within the dropdown on right side. |
| controlIcon     | `ReactElement<any, string    | JSXElementConstructor<any>>`                                            |                                                                                         |                                                                                         | The `icon` element rendered within the dropdown. |
| menuIsOpen      | `boolean`                    |                                                                         | If `true`, menu is open.                                                                |
| isMulti         | `boolean`                    | false                                                                   | If `true`, dropdown becomes multi select menu.                                          |
| isSearchable    | `boolean`                    | false                                                                   | If `true`, you can search items from menu.                                              |
| showArrow       | `boolean`                    | true                                                                    | If `false`, arrow icon is removed.                                                      |
| isDisabled      | `boolean`                    | false                                                                   | If `true`, the component is disabled.                                                   |
| onChange        | `((e: ValueType) => void)`   |                                                                         | `onChange` event.                                                                       |
| onBlur          | `() => void`                 |                                                                         | `onBlur` event.                                                                         |
| onFocus         | `() => void`                 |                                                                         | `onFocus` event.                                                                        |
| theme           | `DefaultTheme`               | object                                                                  | If applied, custom theme is used                                                        |
| style           | `CSSProperties`              | object                                                                  | The system prop that allows defining system overrides as well as additional CSS styles. |

#### Example usage:
    import { Dropdown } from '@oykos-development/devkit-react-ts-styled-components';

    function MyComponent() {
      return (
        <Dropdown label="Dropdown label" leftOptionIcon={<CircleCheckIcon fill="grey" size="24px" />} controlIcon={<CircleCheckIcon fill="grey" size="24px" />} placeholder="Select item" />
      );
    }