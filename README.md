# Introduction

This project is the client for the application form for both applicants and guarantors.

# TLDR: 
1. `cd ./ApplyJourney`
2. `npm install`
3. `dotnet run`

# Getting Started

1. Software dependencies
   1. NodeJS v16.13.0 or later
   2. .NET 6
2. Installation process
   1. `cd ./ApplyJourney`
   2. Install node modules `npm install`

# Build and Test

## Building

This application can be run through dotnet. Locally, it is recommended to run this through IIS Express in Visual Studio or your IDE.

This application uses the build configuration to determine which node scripts to run.

- Development
  - `dev`
- Production
  - `prod`

In development mode, the application uses SpaServices to run the webpack development server.

If you have made any changes to the [LINK TO APPLYFAPI] ApplyFapi, the API for this application, you must run the command `npm run gen-client`. This will run nswag, a tool which will consume the swagger page of the API and generate client code to use.

## Testing

This application uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [Jest](https://jestjs.io/) for testing. React Testing Library provides handy methods for working with the DOM and rendering components in tests. Jest is our test runner and provides the test() and assertion functions.

To create a test, name a file [name].test.js, for example string.test.js, or component.test.js. Then begin adding test() functions and filling them in.

To run tests, run the command `npm run test`.

# Contribute

TODO: Explain how other users and developers can contribute to make your code better.

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
