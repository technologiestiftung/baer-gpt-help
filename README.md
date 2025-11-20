![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# BärGPT Help Center

A comprehensive help center and documentation website for [BärGPT](https://github.com/technologiestiftung/baergpt/), the AI assistant for Berlin's public administration. This website provides video tutorials, FAQs, and guides to help users get started with and make the most of BärGPT.

## Features

- **Video Tutorials**: Step-by-step video guides for using BärGPT
- **FAQ Section**: Comprehensive answers to frequently asked questions
- **Interactive Components**: Accordion sections, video players, and navigation
- **Cookie Banner**: GDPR-compliant cookie consent management
- **Analytics Integration**: Matomo analytics for usage tracking
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Accessibility**: Built with accessibility in mind (a11y testing included)

## Tech Stack

- **Framework**: [React Router v7](https://reactrouter.com/) (with SSR support)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **Animations**: [react-scroll-parallax](https://github.com/jscottsmith/react-scroll-parallax)
- **Testing**: Playwright (E2E & A11y), Vitest (Unit)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/technologiestiftung/baer-gpt-help.git

# Navigate to the project directory
cd baer-gpt-help

# Install dependencies
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Lint code with ESLint
- `npm run prettier` - Format code with Prettier
- `npm run prettier:ci` - Check code formatting
- `npm run test:unit` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:a11y` - Run accessibility tests

## Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `build/` directory. The application can be deployed to any Node.js hosting platform.

Start the production server:

```bash
npm run start
```

## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://annaeschenbacher.com"><img src="https://avatars.githubusercontent.com/u/56318362?v=4?s=64" width="64px;" alt="aeschi"/><br /><sub><b>Anna Eschenbacher</b></sub></a><br /><a href="https://github.com/technologiestiftung/baergpt/commits?author=aeschi" title="Code">💻</a> <a href="https://github.com/technologiestiftung/baergpt/pulls?q=is%3Apr+reviewed-by%3Aaeschi" title="Reviewed Pull Requests">👀</a> <a href="#a11y-aeschi" title="Accessibility">️️️️♿️</a> <a href="https://github.com/technologiestiftung/baergpt/commits?author=aeschi" title="Documentation">📖</a> 
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zainab-tariq"><img src="https://avatars.githubusercontent.com/u/15946816?v=4?s=64" width="64px;" alt="Zainab Tariq"/><br /><sub><b>Zainab Tariq</b></sub></a><br /><a href="https://github.com/technologiestiftung/baergpt/commits?author=zainab-tariq" title="Code">💻</a> <a href="https://github.com/technologiestiftung/baergpt/pulls?q=is%3Apr+reviewed-by%3Azainab-tariq" title="Reviewed Pull Requests">👀</a> <a href="#a11y-zainab-tariq" title="Accessibility">️️️️♿️</a></td>
     <td align="center" valign="top" width="14.28%"><a href="https://github.com/raphael-arce"><img src="https://avatars.githubusercontent.com/u/8709861?v=4?s=64" width="64px;" alt="Rapha"/><br /><sub><b>Raphael Arce</b></sub></a><br /><a href="https://github.com/technologiestiftung/baergpt/commits?author=raphael-arce" title="Code">💻</a> <a href="https://github.com/technologiestiftung/baergpt/pulls?q=is%3Apr+reviewed-by%3Araphael-arce" title="Reviewed Pull Requests">👀</a> <a href="#a11y-raphael-arce" title="Accessibility">️️️️♿️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits

<table>
  <tr>
    <td>
      Made by <a href="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-color.svg" alt="Link to the CityLAB Berlin website" />
      </a>
    </td>
    <td>
      A project by <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg" alt="Link to the Technologiestiftung Berlin website" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senatskanzelei-de.svg" alt="Link to the Senate Chancellery of Berlin"/>
      </a>
    </td>
  </tr>
</table>

## Contact

For questions or further inquiries, please contact us at [support@baergpt.berlin](mailto:support@baergpt.berlin).
