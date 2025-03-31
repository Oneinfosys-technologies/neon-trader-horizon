
# Cook.fund Documentation

This document provides comprehensive information about the Cook.fund application, including installation instructions for CyberPanel servers and a detailed explanation of the project structure.

## Table of Contents

1. [Installation on CyberPanel Server](#installation-on-cyberpanel-server)
2. [Project Structure Overview](#project-structure-overview)
3. [Key Components](#key-components)
4. [Styling Information](#styling-information)
5. [Adding New Features](#adding-new-features)
6. [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)

## Installation on CyberPanel Server

### Prerequisites

- CyberPanel installed on your server
- Node.js (v16.x or higher)
- npm (v7.x or higher)
- Git

### Step 1: Access Your CyberPanel Server

1. Log into your CyberPanel dashboard.
2. Navigate to "Websites" and select the domain where you want to host Cook.fund.

### Step 2: Set Up a NodeJS Application

1. In CyberPanel, go to "NodeJS" in the sidebar.
2. Click "Create Application".
3. Fill out the form:
   - Application Name: cook-fund (or your preferred name)
   - Domain: Select your domain from the dropdown
   - Application Path: /home/username/cook-fund (adjust username as needed)
   - Application URL: Your preferred URL path
   - Application Port: Choose an available port (e.g., 3000)

### Step 3: Clone and Install the Application

1. SSH into your server:
   ```bash
   ssh username@your-server-ip
   ```

2. Navigate to your application directory:
   ```bash
   cd /home/username/cook-fund
   ```

3. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cook-fund.git .
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Build the application:
   ```bash
   npm run build
   ```

### Step 4: Configure Proxy and Start the Application

1. In CyberPanel, navigate to "Websites" > your domain > "Proxy Settings".
2. Add a new proxy configuration:
   - Source: `/` (or your preferred path)
   - Destination: `http://localhost:YOUR_PORT`

3. Start the application:
   ```bash
   cd /home/username/cook-fund
   npm start
   ```

4. Set up a PM2 process to keep the application running:
   ```bash
   npm install -g pm2
   pm2 start npm --name "cook-fund" -- start
   pm2 save
   pm2 startup
   ```

5. Follow the instructions provided by the pm2 startup command to ensure the application starts on server boot.

## Project Structure Overview

### Root Directory Files

- **package.json**: Contains project dependencies and scripts
- **vite.config.ts**: Vite build configuration
- **tsconfig.json**: TypeScript configuration
- **index.html**: Entry HTML file
- **README.md**: Basic project information
- **DOCUMENTATION.md**: This detailed documentation file

### Source Code Files (`src/` directory)

#### Core Files

- **main.tsx**: Application entry point that renders the App component
- **App.tsx**: Main application component that sets up routing
- **index.css**: Global CSS styles
- **App.css**: Application-specific CSS styles

#### Components

Located in `src/components/`:

- **Header.tsx**: Navigation header with logo and links
- **Hero.tsx**: Hero section with main headline and CTA
- **MarketTerminal.tsx**: Interactive market data visualization
- **Features.tsx**: Feature showcase with icons and descriptions
- **About.tsx**: Company information and team details
- **Pricing.tsx**: Subscription plans and pricing information
- **Testimonials.tsx**: Customer reviews and testimonials
- **FAQ.tsx**: Frequently asked questions accordion
- **Contact.tsx**: Contact form and support information
- **Footer.tsx**: Footer with links and copyright information

#### Pages

Located in `src/pages/`:

- **Index.tsx**: Main landing page that combines all components
- **NotFound.tsx**: 404 error page

#### UI Components

Located in `src/components/ui/`:

These are reusable UI components built with Shadcn UI:
- **accordion.tsx**: Expandable accordion component
- **button.tsx**: Button component with various styles
- **card.tsx**: Card container component
- **dialog.tsx**: Modal dialog component
- **input.tsx**: Input field component
- **form.tsx**: Form components with validation
- **toast.tsx**: Toast notification component
- And many more UI components...

#### Hooks and Utilities

- **src/hooks/**: Custom React hooks
- **src/lib/utils.ts**: Utility functions

## Key Components

### Header Component

The Header component provides navigation for the application. It includes:
- Logo
- Navigation links
- Mobile responsive menu
- Authentication buttons

### MarketTerminal Component

This is a flagship feature that displays:
- Real-time market data visualizations
- Interactive charts
- AI-powered trade sentiment indicators

### Features Component

Showcases the key features of Cook.fund:
- AI-Powered Market Pulse
- Dark Pool Tracking
- Strategy Backtesting
- Social Sentiment Scanner

### Pricing Component

Displays the subscription options:
- Free Plan
- Pro Plan ($39/mo)
- Quant Elite Plan ($599/mo)

## Styling Information

- The application uses Tailwind CSS for styling
- Dark theme with neon accents
- `App.css` contains global animations and overrides
- Component-specific styles are included within their respective files

## Adding New Features

To add new features to Cook.fund:

1. Create a new component in `src/components/`
2. Import necessary UI components from `src/components/ui/`
3. Add the component to the relevant page in `src/pages/`
4. Add any necessary styles
5. Update tests if applicable

## Common Issues and Troubleshooting

### Build Errors

If you encounter build errors:

1. Check console for specific error messages
2. Verify all dependencies are installed: `npm install`
3. Clear the cache: `npm cache clean --force`
4. Rebuild the application: `npm run build`

### Deployment Issues

If the application doesn't start after deployment:

1. Check the Node.js logs: `pm2 logs cook-fund`
2. Verify the port configuration in CyberPanel matches your application
3. Check firewall settings to ensure the port is accessible
4. Verify the application builds successfully: `npm run build`

### Component Errors

If specific components fail to render:

1. Check browser console for error messages
2. Verify all required props are being passed to components
3. Check for missing dependencies
4. Test the component in isolation

For additional support, contact the development team or refer to the project's GitHub repository issues page.
