# Kingsmen Consultancy Website

A world-class, modern website for Kingsmen Consultancy showcasing expertise in software development, cloud architecture, and digital transformation solutions.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Dark Mode**: Professional dark theme toggle
- **Performance Optimized**: Fast loading with Next.js 15 and optimized assets
- **SEO Ready**: Meta tags, structured data, and performance optimization
- **Contact Forms**: Functional contact forms with email integration
- **Case Studies**: Comprehensive portfolio showcase
- **Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React and Heroicons
- **Email**: Nodemailer for contact form functionality
- **Deployment**: Optimized for Vercel/Netlify

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About us page
│   ├── case-studies/      # Portfolio showcase
│   ├── services/          # Services overview
│   ├── solutions/         # Industry solutions
│   ├── resources/         # Blog and resources
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── layout/            # Header, Footer, Layout
│   ├── sections/          # Page sections
│   └── ui/                # UI components
├── contexts/              # React contexts
└── hooks/                 # Custom hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kingsmen-consultancy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_APP_PASSWORD`: Gmail app password
   - `NEXT_PUBLIC_SITE_URL`: Your site URL

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form uses Gmail SMTP. To set up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password
3. Add to `.env.local`:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

## 🎨 Customization

### Brand Colors

The design system uses these primary colors:
- **Navy Blue**: `#1a365d` (Primary)
- **Electric Blue**: `#3182ce` (Secondary)  
- **Gold**: `#d69e2e` (Accent)

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold weights (700-900)
- **Body**: Regular weights (400-500)

### Components

All components are built with Tailwind CSS and can be customized in:
- `tailwind.config.ts` - Theme configuration
- `src/app/globals.css` - Custom styles and utilities

## 📱 Responsive Design

The website is built mobile-first with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory
3. Configure redirects for SPA routing

### Environment Variables

Remember to set environment variables in your deployment platform:
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

## 🧪 Testing

```bash
# Run tests
npm test

# Run Playwright tests
npm run test:e2e

# Build for production
npm run build
```

## 📊 Performance

The website is optimized for:
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test:e2e` - Run Playwright tests

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Component-based architecture

## 📈 Analytics & SEO

The website includes:
- Google Analytics 4 integration
- Meta tags and Open Graph
- Structured data markup
- Sitemap generation
- Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Kingsmen Consultancy.

## 🆘 Support

For support or questions:
- Email: ibrahimhaleeth@gmail.com
- Website: [kingsmenconsultancy.org](https://kingsmenconsultancy.org)

---

**Built with ❤️ by Kingsmen Consultancy**
