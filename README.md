# Pakagify

Pakagify is a powerful tool for managing packages and repositories, offering both a Command Line Interface (CLI) and a web-based dashboard for seamless interaction.

## Project Structure

The project is organized as follows:

- **src/**: The main source code of the application.
  - **Common/**: Shared components and utilities.
  - **PkCli/**: Implementation of the CLI interface.
  - **PkDash/**: Web-based dashboard for managing packages.
- **public/**: Static assets.
- **tools/**: Helper scripts and utilities.

## Features

- **CLI Commands**: Manage packages and repositories directly from the terminal.
- **Web Dashboard**: A user-friendly interface for managing your projects.
- **Cross-Platform**: Works on Windows, macOS, and Linux.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Pakagify
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Development Server

To start the development server:
```bash
npm run dev
```

This will launch the application at `http://localhost:3000` (default port).

### Building for Production

To create a production build:
```bash
npm run build
```

### Previewing the Production Build

To preview the production build locally:
```bash
npm run preview
```

### Using the CLI

The CLI provides various commands for managing packages and repositories. Below are some examples:

- **Authentication**:
  ```bash
  node Pakagify.cli.js auth
  ```
- **Create an Empty Package**:
  ```bash
  node Pakagify.cli.js mk-empty-pkg
  ```
- **Delete a Package**:
  ```bash
  node Pakagify.cli.js delete
  ```

For a full list of commands, refer to the CLI documentation or run:
```bash
node Pakagify.cli.js --help
```

## Technologies Used

- **Frontend**: React, TypeScript, SCSS
- **Backend**: Node.js
- **Build Tool**: Vite
- **Other Tools**: Isomorphic-fetch for HTTP requests

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Support

If you encounter any issues, feel free to open an issue in the repository or contact the maintainers.
