# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design** - Clean, professional design with dark/light mode toggle
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🎭 **Smooth Animations** - Framer Motion animations for enhanced user experience
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🌙 **Dark/Light Mode** - Theme switching with system preference detection
- 📧 **Contact Form** - Ready-to-use contact form (demo implementation)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section
│   │   ├── about.tsx      # About section
│   │   ├── projects.tsx   # Projects section
│   │   └── contact.tsx    # Contact section
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Button component
│   │   ├── input.tsx      # Input component
│   │   └── textarea.tsx   # Textarea component
│   ├── navigation.tsx     # Navigation component
│   └── theme-provider.tsx # Theme context provider
├── lib/                   # Utility functions
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── ...config files
```

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/sections/hero.tsx`):

   - Change name, title, and bio
   - Update profile image
   - Update social media links

2. **About Section** (`components/sections/about.tsx`):

   - Update bio text
   - Modify skills list

3. **Projects Section** (`components/sections/projects.tsx`):

   - Replace with your projects
   - Update project images, descriptions, and links

4. **Contact Section** (`components/sections/contact.tsx`):
   - Update social media links
   - Configure contact form (currently demo)

### Styling

- Colors and themes can be modified in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes

### Images

- Replace placeholder images in the `public/` directory
- Update image paths in components
- Optimize images for web (WebP format recommended)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Contact Form Setup

The contact form is currently set up as a demo. To make it functional:

1. **Option 1: EmailJS**

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Add your service credentials to `.env.local`
   - Update the form submission logic

2. **Option 2: Formspree**

   - Sign up at [Formspree](https://formspree.io/)
   - Update the form action URL
   - Add your form endpoint

3. **Option 3: Custom Backend**
   - Create an API route in `app/api/contact/route.ts`
   - Implement email sending logic

## Performance Optimization

- Images are optimized with Next.js Image component
- CSS is purged with Tailwind CSS
- JavaScript is code-split automatically
- Static generation for better SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Support

If you have any questions or need help, please open an issue or contact me directly.
