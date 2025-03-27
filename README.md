## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)


## Getting Started

### Dependencies

1. Initialize the Node.js project:
    - Run `npm init`

2. Install project dependencies:
    - Run `npm install`

3. Install Playwright and related dependencies:
    - Run `npm install playwright` or `npm init playwright@latest`


### Running Playwright Tests

1. Running All Tests
    - Run `npx playwright test`

2. Running a Specific Test File
    - Run `npx playwright test tests/[File Name].spec.ts`   
    // Replace [File Name] with the name of the test file you want to run (e.g., Login, Home, etc.)


## Developer Guide

### Committing

This repo uses a commit convention. A typical commit message might read:

<pre> <code> add: new login test case </code> </pre>

The first part of this is the commit "type". The most common types are "feat" for new features, and "fix" for bug fixes. Using these commit types helps us correctly manage our version numbers and changelogs. Since our release process calculates new version numbers from our commits, it is very important to get this right.

- `feat/add` is for introducing a new adding new test cases or feature
- `edit/update` is for editing or updating existing test cases
- `fix` is for bug fixes
- `style` is for code formatting only
- `refactor` is for changes to code which should not be detectable by users or testers
- `test` is for changes that only touch test files or related tooling
- `build` is for changes that only touch our develop/release tools
- `ci` is for changes to the continuous integration files and scripts

After the type and scope, there should be a colon.

The "subject" of the commit follows. It should be a short indication of the change. The commit convention prefers that this be written in the present-imperative tense.


### Project Structure
    /tests                  # Test files for different modules/features
    /utils                  # Utility files for configuration and test helpers
      /browserConfig.ts     # Browser configuration (extension path, user profiles)
    /node_modules           # Installed dependencies
    package.json            # Project metadata and dependency management
