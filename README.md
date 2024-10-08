<h1 align="center">
A React TS Redux weather website from scratch.
</h1>
<h4 align="center">
In Progress...
</h4>

 ## Content
- [Overview](#overview)
  - [Used Technologies](#user-technologies)
  - [Architecture](#architecture)
- [Getting Started with Create React App](#getting-started-with-create-react-app)

# Overview
This is a simple React Redux project from scratch.

## Used Technologies
   - React
   - TypeScript
   - Redux
   - lodash
   - Storybook
   - bootstrap

## Architecture

```
src
├── App.css
├── App.test.tsx
├── App.tsx
├── assets
│   └── images
│       ├── 
│       ├── 
│      
├── components
│   ├── Common
│   │   ├── Container
│   │   │   ├── Container.module.css
│   │   │   └── Container.tsx
│   │   ├── FieldValidation
│   │   │   ├── FieldValidationMsg.module.css
│   │   │   └── FieldValidationMsg.tsx
│   │   ├── Input
│   │   │   ├── InputField.module.css
│   │   │   ├── InputField.stories.ts
│   │   │   └── InputField.tsx
│   │   └── WeatherCard
│   │       ├── components
│   │       │   ├── AdditionalInfoCards
│   │       │   │   ├── AdditionalCardInfo.module.css
│   │       │   │   └── AdditionalInfoCards.tsx
│   │       │   └── WeeklyDaysItem
│   │       │       ├── WeeklyDaysItem.module.css
│   │       │       └── WeeklyDaysItem.tsx
│   │       ├── WeatherCard.module.css
│   │       └── WeatherCard.tsx
│   ├── Header
│   │   ├── components
│   │   │   └── NavList
│   │   │       ├── NavList.module.css
│   │   │       └── NavList.tsx
│   │   ├── Header.module.css
│   │   └── Header.tsx
│   └── SearchBar
│       ├── Button
│       │   ├── Button.module.css
│       │   └── Button.tsx
│       ├── SearchBar.module.css
│       ├── SearchBar.stories.tsx
│       └── SearchBar.tsx
├── helpers
│   ├── helperTypes.ts
│   ├── Validators
│   │   ├── maxValidator.tsx
│   │   └── minValidator.tsx
│   └── weatherDate.ts
├── index.css
├── index.tsx
├── Pages
│   └── Main
│       ├── components
│       │   ├── HeroComponent
│       │   │   ├── HeroComponent.module.css
│       │   │   └── HeroComponent.tsx
│       │   └── Result
│       │       ├── Result.module.css
│       │       └── Result.tsx
│       ├── Main.module.css
│       ├── Main.stories.tsx
│       ├── Main.test.tsx
│       └── Main.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── states
    ├── actions
    │   ├── suggestionsActions.ts
    │   └── weatherActions.ts
    ├── api.ts
    ├── index.ts
    ├── reducers
    │   ├── sugestionsReducers.ts
    │   └── weatherReducers.ts
    ├── selectors.ts
    └── types.ts
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
