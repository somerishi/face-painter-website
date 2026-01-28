# Rainbow Faces - Face Painter Website

A beautiful, modern website for a professional face painting business built with Astro and Decap CMS.

## Features

✨ **Modern Design** - Colorful, playful design that captures the joy of face painting
🖼️ **Gallery System** - Categorized galleries for different event types
📝 **Blog** - Built-in blog for sharing tips and stories
📧 **Contact Form** - Netlify Forms integration for easy client inquiries
🎨 **CMS Integration** - Decap CMS for easy content management
📱 **Responsive** - Fully responsive design for all devices
⚡ **Fast** - Built with Astro for optimal performance
🎯 **SEO Friendly** - Optimized for search engines

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **CMS**: [Decap CMS](https://decapcms.org) (formerly Netlify CMS)
- **Hosting**: [Netlify](https://netlify.com) (recommended)
- **Forms**: Netlify Forms

## Project Structure

```
face-painter-astro/
├── public/
│   ├── admin/              # Decap CMS admin interface
│   │   ├── config.yml      # CMS configuration
│   │   └── index.html      # CMS entry point
│   └── images/             # Static images
├── src/
│   ├── content/            # Content collections
│   │   ├── blog/           # Blog posts (Markdown)
│   │   ├── galleries/      # Gallery collections (JSON)
│   │   └── config.ts       # Content schema definitions
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout template
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Homepage
│   │   ├── gallery.astro   # Gallery listing
│   │   ├── blog.astro      # Blog listing
│   │   ├── about.astro     # About page
│   │   ├── contact.astro   # Contact page
│   │   ├── blog/
│   │   │   └── [slug].astro # Dynamic blog posts
│   │   └── gallery/
│   │       └── [id].astro   # Dynamic gallery pages
│   └── styles/
│       └── global.css       # Global styles
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
└── package.json            # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   cd face-painter-astro
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## Content Management

### Adding Blog Posts

You can add blog posts in two ways:

#### 1. Via CMS (Recommended after deployment)
- Access the CMS at `/admin` after deploying
- Click "Blog Posts" → "New Blog Post"
- Fill in the details and publish

#### 2. Manually
Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2024-01-27
image: "/images/blog/your-image.jpg"
tags: ["tag1", "tag2"]
---

Your post content here...
```

### Adding Galleries

#### 1. Via CMS (Recommended after deployment)
- Access the CMS at `/admin`
- Click "Gallery Collections" → "New Gallery Collection"
- Upload images and add details

#### 2. Manually
Create a new JSON file in `src/content/galleries/`:

```json
{
  "title": "Event Name",
  "description": "Event description",
  "category": "kids-parties",
  "coverImage": "/images/gallery/cover.jpg",
  "images": [
    {
      "url": "/images/gallery/image1.jpg",
      "alt": "Description",
      "caption": "Optional caption"
    }
  ],
  "date": "2024-01-27",
  "featured": true
}
```

## Deployment to Netlify

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

### Step 2: Deploy to Netlify

1. **Sign up/Login** to [Netlify](https://netlify.com)

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Step 3: Set Up Decap CMS

1. **Enable Netlify Identity**
   - In your Netlify site dashboard
   - Go to "Site settings" → "Identity"
   - Click "Enable Identity"

2. **Enable Git Gateway**
   - Still in Identity settings
   - Scroll to "Services" → "Git Gateway"
   - Click "Enable Git Gateway"

3. **Invite Yourself**
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter your email
   - Check your email and accept the invitation

4. **Access CMS**
   - Go to `https://yoursite.netlify.app/admin`
   - Login with your credentials
   - Start managing content!

### Step 4: Custom Domain (Optional)

1. Purchase your domain (Namecheap, Porkbun, etc.)
2. In Netlify:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Follow the DNS configuration instructions
3. Enable HTTPS (automatic with Netlify)

## Customization

### Update Site Information

1. **Update site URL** in `astro.config.mjs`:
   ```js
   site: 'https://yourdomain.com',
   ```

2. **Update business name and details** in:
   - `src/layouts/BaseLayout.astro` (logo, footer)
   - `src/pages/about.astro` (story and details)
   - `src/pages/contact.astro` (contact information)

3. **Update colors** in `tailwind.config.mjs`:
   ```js
   colors: {
     primary: {
       pink: '#FF6B9D',
       // Add your colors
     }
   }
   ```

### Add Your Images

1. Place images in `public/images/`
2. Reference them as `/images/your-image.jpg`
3. For blog/gallery images uploaded via CMS, they'll go to `public/images/uploads/`

### Modify Design

- Global styles: `src/styles/global.css`
- Layout: `src/layouts/BaseLayout.astro`
- Individual pages: `src/pages/*.astro`

## Building for Production

```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Environment Variables

No environment variables needed for basic setup. All configuration is in the files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse scores 90+ across all categories
- Fast page loads with static generation
- Optimized images
- Minimal JavaScript

## Support

For issues or questions:
1. Check the [Astro documentation](https://docs.astro.build)
2. Check the [Decap CMS documentation](https://decapcms.org/docs/)
3. Review the [Netlify documentation](https://docs.netlify.com)

## License

This template is free to use for your business. Customize it as needed!

## Next Steps

1. ✅ Install dependencies
2. ✅ Customize content and colors
3. ✅ Add your own images
4. ✅ Test locally
5. ✅ Push to GitHub
6. ✅ Deploy to Netlify
7. ✅ Set up CMS access
8. ✅ Add custom domain
9. ✅ Start adding content!

---

Built with ❤️ using Astro and Decap CMS
