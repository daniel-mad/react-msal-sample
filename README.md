# React MSAL Sample App

This is a sample React application demonstrating authentication using React MSAL and calling Microsoft Graph API. The project is bootstrapped using Vite.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js and npm
- Visual Studio Code or any other code editor of your choice

## Installation

1. Clone the repository:

```bash
  git clone https://github.com/daniel-mad/react-msal-sample.git
```

2. Navigate to the project directory:

```bash
cd react-msal-sample
```

3. Install dependencies:

```bash
npm install
```

## Configuration

1. **MSAL Configuration**:

Configure MSAL by providing your Azure AD application's client ID and authority. This configuration should be defined in `src/libs/auth/authConfig.js`, which is not included in the repository due to containing sensitive information. Ensure you create this file locally with the following content:

```javascript
import { Configuration, LogLevel } from "@azure/msal-browser";

export const authConfig: Configuration = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
      logLevel: LogLevel.Info,
    },
  },
};
```

Replace 'YOUR_CLIENT_ID' and 'YOUR_TENANT_ID' with your actual Azure AD application's values.

## Usage

To start the development server, run:

```bash
npm run dev
```

The application will be served at http://localhost:3000.

## Features

- **Authentication**: Authenticate users using React MSAL.
- **Microsoft Graph API**: Call Microsoft Graph API to retrieve user data.
