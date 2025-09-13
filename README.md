# Vayu 🚀

A beautiful, modern web application for planning your perfect weekends with integrated calendar management and activity suggestions.

![Vayu Weekend Planner](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)

[![CI](https://github.com/DhairyaMajmudar/vayu/actions/workflows/ci.yml/badge.svg)](https://github.com/DhairyaMajmudar/vayu/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Features

### Smart Calendar Management

- Interactive drag-and-drop calendar interface
- Create, edit, and delete events with ease
- Support for both all-day and timed events
- Event categorization (Personal, Work, Family, Travel, Other)
- Color-coded events for better visual organization

### Activity Suggestions

- Curated activity suggestions for 2, 3, or 4-day weekends
- Filter activities by weekend duration
- One-click event creation from suggestions
- Categories include hiking, cooking, family time, and more

### Long Weekend Detection

- Automatic detection of Indian holidays
- Smart identification of long weekend opportunities
- Suggestions for potential 4-day weekends
- Plan ahead with 6-month holiday preview

### Share Your Plans

- Export your weekend plans as beautiful, shareable cards
- Professional design with app branding
- PNG download for social media sharing
- Preview before export

### Analytics & Performance

- Integrated Vercel Analytics for real-time usage insights
- Performance monitoring and optimization
- User experience tracking
- Privacy-focused analytics without cookies

## Getting Started

### Prerequisites

- **Bun** (v1.2.4 or higher) - [Install Bun](https://bun.sh/)
- **Node.js** (v18 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DhairyaMajmudar/vayu.git
   cd vayu
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start the development server**

   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command               | Description                             |
| --------------------- | --------------------------------------- |
| `bun dev`             | Start development server with Turbopack |
| `bun build`           | Build production application            |
| `bun start`           | Start production server                 |
| `bun lint`            | Run BiomeJS linter                      |
| `bun lint-fix`        | Fix linting issues automatically        |
| `bun format`          | Format code with BiomeJS                |
| `bun type-check`      | Run TypeScript type checking            |
| `bun test`            | Run test suite                          |
| `bun test-coverage`   | Run tests with coverage report          |
| `bun storybook`       | Start Storybook development server      |
| `bun build-storybook` | Build Storybook for production          |

## Project Structure

```
vayu/
├── src/
│   ├── app/                    # Next.js 15 app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── planner/           # Planner page
│   │       └── page.tsx
│   ├── components/            # Reusable React components
│   │   ├── home/             # Homepage components
│   │   ├── planner/          # Planner-specific components
│   │   └── icons/            # Custom icon components
│   ├── constants/            # App constants and data
│   ├── lib/                  # Utility functions and helpers
│   ├── styles/              # Global styles and CSS
│   └── fonts/               # Custom fonts
├── storybook-static/         # Built Storybook files
├── biome.json               # BiomeJS configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### Calendar & Date

- **React Big Calendar** - Full-featured calendar component
- **date-fns** - Modern JavaScript date utility library

### Development Tools

- **BiomeJS** - Fast formatter and linter
- **Storybook** - Component development environment
- **Bun** - Fast JavaScript runtime and package manager

### Additional Libraries

- **Heroicons** - Beautiful hand-crafted SVG icons
- **clsx** - Utility for constructing className strings

### Analytics & Deployment

- **Vercel Analytics** - Privacy-focused web analytics
- **Vercel** - Deployment and hosting platform

## Component Library

The project includes a comprehensive Storybook setup with stories for all major components:

```bash
bun storybook
```

Visit [http://localhost:6006](http://localhost:6006) to explore components in isolation.

## Deployment & Analytics

### Vercel Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if needed)
3. **Deploy** - Vercel will automatically build and deploy your app

### Analytics

The application includes Vercel Analytics for:

- **Real-time visitor tracking** - Monitor user activity
- **Performance insights** - Core web vitals and page load times
- **Privacy-first** - No cookies, GDPR compliant
- **Zero configuration** - Works out of the box when deployed to Vercel

To view analytics:

1. Deploy your application to Vercel
2. Visit your Vercel dashboard
3. Navigate to the Analytics tab for your project

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Dhairya Majmudar**

- GitHub: [@DhairyaMajmudar](https://github.com/DhairyaMajmudar)

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Big Calendar](https://jquense.github.io/react-big-calendar/) for the calendar component
- [Heroicons](https://heroicons.com/) for beautiful icons
- [Storybook](https://storybook.js.org/) for component documentation

---

<div align="center">
    <b>Made with ❤️ by <a href="https://github.com/DhairyaMajmudar">DhairyaMajmudar</a>
</b>
</div>
