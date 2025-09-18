# Vindhya Banda - Personal Portfolio Website

A modern, responsive portfolio website showcasing my work as a Technical Product Manager at Microsoft, with expertise in Digital Twin Builder, Azure IoT, and AI-powered product development.

## 🌟 Features

- **Responsive Design**: Optimized for all devices with modern UI/UX
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Interactive Sections**: Hero, About, Experience, Education, Skills, Projects, and Contact
- **Static Site Generation**: Built with Next.js for optimal performance
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (static export)
- **Analytics**: Vercel Analytics integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vindhyabanda/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### For GitHub Pages

1. Build the static export:
```bash
npm run build
npm run export
```

2. The static files will be generated in the `out/` directory.

3. Deploy to GitHub Pages using the included GitHub Actions workflow or manually upload the `out/` folder.

## 🎨 Customization

The website uses a custom pink accent color theme defined in `app/globals.css`. Key customization areas:

- **Colors**: Modify CSS custom properties in `app/globals.css`
- **Content**: Update component files in the `components/` directory
- **Metadata**: Edit `app/layout.tsx` for SEO and meta information

## 📁 Project Structure

```
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utility functions
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions for deployment
└── out/                    # Generated static files (after build)
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).