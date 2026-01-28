# Quick Start Guide

## Get Your Site Running in 10 Minutes

### Step 1: Install (2 minutes)
```bash
cd face-painter-astro
npm install
```

### Step 2: Start Development Server (1 minute)
```bash
npm run dev
```
Open http://localhost:4321 in your browser

### Step 3: Customize Content (5 minutes)

#### Update Business Info
1. Open `src/pages/contact.astro`
2. Replace email, phone, and location with your details

#### Add Your First Blog Post
1. Create `src/content/blog/my-first-post.md`
2. Copy this template:
```markdown
---
title: "Welcome to My Face Painting Business"
description: "Introducing our services"
pubDate: 2024-01-27
tags: ["announcement"]
---

Welcome to Rainbow Faces! We're excited to bring color and joy to your events.
```

#### Add Your First Gallery
1. Create `src/content/galleries/my-first-event.json`
2. Copy this template:
```json
{
  "title": "My First Event",
  "description": "Description of the event",
  "category": "kids-parties",
  "coverImage": "/images/placeholder.jpg",
  "images": [
    {
      "url": "/images/placeholder.jpg",
      "alt": "Description",
      "caption": "Optional caption"
    }
  ],
  "date": "2024-01-27",
  "featured": true
}
```

### Step 4: Deploy (2 minutes)

#### Option A: Netlify (Recommended - Free)
1. Push code to GitHub
2. Go to netlify.com
3. Click "Add new site" → "Import from Git"
4. Select your repo
5. Click "Deploy"
6. Your site is live!

#### Option B: Vercel (Free Alternative)
1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

### Step 5: Set Up CMS (Optional - 5 minutes)

After deploying to Netlify:
1. Enable Netlify Identity (Site Settings → Identity)
2. Enable Git Gateway (Identity → Services)
3. Invite yourself (Identity → Invite users)
4. Go to yoursite.com/admin
5. Start managing content visually!

## Common Customizations

### Change Colors
Edit `tailwind.config.mjs`:
```js
primary: {
  pink: '#YOUR_COLOR',
  purple: '#YOUR_COLOR',
}
```

### Change Business Name
Find and replace "Rainbow Faces" in:
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`

### Add Social Media Links
Edit footer in `src/layouts/BaseLayout.astro`

## Need Help?

- Astro Docs: https://docs.astro.build
- Decap CMS Docs: https://decapcms.org/docs/
- Netlify Docs: https://docs.netlify.com

## Cost Breakdown

- **Domain**: £8-12/year (Namecheap, Porkbun)
- **Hosting**: £0 (Netlify free tier)
- **CMS**: £0 (Decap CMS is free)
- **Total**: £8-12/year (just the domain!)

Compare to Wix at £108/year + £15/year for domain = £123/year

**You save £100+ per year!**
