# Pakagify

Pakagify is a versatile tool designed to simplify the management of GitHub repositories and packages. It provides both a Command Line Interface (CLI) and a web-based dashboard for seamless interaction with repositories, releases, and packages.

## Features

- **CLI Commands**: Perform repository and package management tasks directly from the terminal.
- **Web Dashboard**: A user-friendly interface for managing repositories, releases, and packages.
- **GitHub Integration**: Leverages the GitHub API for repository and release management.
- **Cross-Platform**: Works on macOS, Linux, and Windows.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Yarn](https://yarnpkg.com/) (preferred for dependency management)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NukaWorks/Pakagify.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Pakagify
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```

## Usage

### Running the Development Server

To start the development server for the web dashboard:

```bash
yarn dev:pkdash
```

This will launch the application at `http://localhost:5123`.

### Building for Production

To create a production build of the web dashboard:

```bash
yarn build:pkdash
```

### Using the CLI

The CLI provides various commands for managing repositories and packages. Below are some examples:

- **Authentication**:
  ```bash
  node src/PkCli/Pakagify.cli.js auth <github-token>
  ```
- **Create a New Repository**:
  ```bash
  node src/PkCli/Pakagify.cli.js mkrepo <repository-name>
  ```
- **Create an Empty Package**:
  ```bash
  node src/PkCli/Pakagify.cli.js mkpkg <package-name> --arch=x64 --platform=linux
  ```
- **Push a Package to a Repository**:
  ```bash
  node src/PkCli/Pakagify.cli.js pushpkg <repository-name> <package-folder>
  ```
- **Retrieve a Repository**:
  ```bash
  node src/PkCli/Pakagify.cli.js retrieve <repository-name>
  ```
- **Delete a Package**:
  ```bash
  node src/PkCli/Pakagify.cli.js rmpkg <repository-name> <package-name>
  ```
- **Delete a Repository**:
  ```bash
  node src/PkCli/Pakagify.cli.js rmrepo <repository-name>
  ```

For a full list of commands, refer to the CLI documentation or run:

```bash
node src/PkCli/Pakagify.cli.js --help
```

## Technologies Used

- **Frontend**: React, TypeScript, SCSS
- **Backend**: Node.js
- **Build Tool**: Vite
- **Other Tools**: Axios, Chalk, Ora, Commander.js

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Support

If you encounter any issues, feel free to open an issue in the repository or contact the maintainers.
