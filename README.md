# VirtusCo - Robotics & Automation Solutions

## Overview
VirtusCo is a leading robotics and automation solutions provider based in India. Our platform showcases cutting-edge robotics solutions, automation systems, and innovative technology implementations for manufacturing and industry.

## 🚀 Tech Stack
- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Analytics:** Google Analytics
- **SEO:** Next.js Metadata, JSON-LD

## 📁 Project Structure
```
virtusco/
├── app/
│   ├── components/
│   │   ├── JsonLd.tsx         # Structured data for SEO
│   │   └── ...               # Other components
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx             # Homepage
│   └── sitemap.ts           # Dynamic sitemap generator
├── public/
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt          # Search engine crawling rules
│   └── images/             # Static images and icons
└── styles/
    └── globals.css         # Global styles
```

## 🛠 Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/virtusco.git
cd virtusco
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

## 🔑 Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
# Add other environment variables as needed
```

## 🌐 SEO Implementation
The project includes comprehensive SEO optimization:

- **Metadata Configuration:** Dynamic metadata in `app/layout.tsx`
- **Structured Data:** JSON-LD implementation for better search visibility
- **Sitemap:** Automatic sitemap generation at `/sitemap.xml`
- **Robots.txt:** Custom crawling rules
- **Manifest:** PWA support with `manifest.json`

## 📱 Progressive Web App (PWA)
The website is configured as a Progressive Web App with:
- Installable capability
- Offline support
- App-like experience
- Custom icons and splash screens

## 🔍 Google Search Console
To verify your site:
1. Register at Google Search Console
2. Add your domain
3. Verify ownership
4. Submit the sitemap URL: `https://virtusco.in/sitemap.xml`

## 📈 Performance Optimization
- Image optimization using Next.js Image component
- Lazy loading implementation
- Route prefetching
- Static page generation where applicable
- CSS and JavaScript minification

## 🧪 Testing
Run tests using:
```bash
npm run test
# or
yarn test
```

## 📦 Deployment
The project is configured for deployment on Vercel:
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with `git push` to main branch

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact
- Website: [https://virtusco.in](https://virtusco.in)
- Email: virtusco.tech@gmail.com
- LinkedIn: [VirtusCo LinkedIn](https://linkedin.com/company/virtusco)

## 🙏 Acknowledgments
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- All contributors and supporters

---
Built with ❤️ by VirtusCo Team