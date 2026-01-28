# Complete Deployment Guide

## Overview

This guide will walk you through deploying your face painter website from start to finish. Total time: ~30 minutes.

## What You'll Need

- [ ] GitHub account (free)
- [ ] Netlify account (free)
- [ ] Domain name (£8-12/year) - optional for now, can add later
- [ ] Your project files

## Part 1: Local Setup (5 minutes)

### 1. Install Node.js
If you don't have Node.js installed:
- Go to https://nodejs.org
- Download and install the LTS version (18.x or higher)
- Verify installation: Open terminal and type `node --version`

### 2. Set Up Your Project
```bash
# Navigate to your project folder
cd face-painter-astro

# Install dependencies
npm install

# Start development server
npm run dev
```

Your site should now be running at http://localhost:4321

### 3. Test Everything
- Browse all pages
- Check that navigation works
- Verify contact form displays correctly
- Look at sample blog posts and galleries

## Part 2: Version Control with GitHub (10 minutes)

### 1. Create a GitHub Account
- Go to https://github.com
- Click "Sign up"
- Follow the registration process

### 2. Create a New Repository
- Click the "+" icon → "New repository"
- Name it: `face-painter-website` (or your business name)
- Description: "My face painting business website"
- Choose "Public" (free hosting requires public repo)
- DON'T initialize with README (you already have one)
- Click "Create repository"

### 3. Push Your Code to GitHub

In your project folder terminal:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial website setup"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your details
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Refresh your GitHub page - you should see all your files!

## Part 3: Deploy to Netlify (10 minutes)

### 1. Create Netlify Account
- Go to https://netlify.com
- Click "Sign up"
- Choose "Sign up with GitHub" (easier integration)
- Authorize Netlify to access your GitHub

### 2. Deploy Your Site
1. Click "Add new site" → "Import an existing project"
2. Click "Deploy with GitHub"
3. Authorize Netlify (if prompted)
4. Search for and select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Leave other settings as default
6. Click "Deploy site"

### 3. Wait for Deployment
- Netlify will build your site (2-3 minutes)
- You'll see a randomly generated URL like `random-name-123456.netlify.app`
- Click the URL to view your live site!

### 4. Customize Your Netlify Site Name (Optional)
1. Go to "Site settings"
2. Under "Site details" → "Site name"
3. Change to something like `yourname-facepainting.netlify.app`
4. Click "Save"

## Part 4: Set Up Content Management System (10 minutes)

### 1. Enable Netlify Identity
1. In your Netlify dashboard, go to your site
2. Click "Site settings" → "Identity"
3. Click "Enable Identity"
4. Scroll down to "Registration preferences"
   - Choose "Invite only" (recommended)
5. Scroll to "External providers" (optional)
   - You can enable Google/GitHub login if you want

### 2. Enable Git Gateway
1. Still in Identity settings
2. Scroll to "Services" → "Git Gateway"
3. Click "Enable Git Gateway"
4. Select "Use GitHub as backend" (if prompted)

### 3. Create Your CMS User
1. Go to "Identity" tab (top navigation)
2. Click "Invite users"
3. Enter your email address
4. Click "Send"
5. Check your email
6. Click the invitation link
7. Set your password

### 4. Access Your CMS
1. Go to `https://yoursite.netlify.app/admin`
2. Login with your email and password
3. You're in! You can now:
   - Add blog posts
   - Create gallery collections
   - Upload images
   - Manage all content visually

## Part 5: Custom Domain (Optional - £8-12/year)

### Option A: Buy Domain Through Netlify
1. In Netlify, go to "Domain settings"
2. Click "Add or register domain"
3. Search for available domains
4. Purchase through Netlify
5. DNS is automatically configured
6. SSL certificate automatically enabled

### Option B: Use External Domain (Recommended - Cheaper)

#### Step 1: Buy Domain
Popular registrars:
- **Namecheap**: namecheap.com (~£8-10/year)
- **Porkbun**: porkbun.com (~£8-10/year)
- **Google Domains**: domains.google (~£12/year)

#### Step 2: Connect to Netlify
1. In Netlify: "Domain settings" → "Add custom domain"
2. Enter your domain (e.g., `rainbowfaces.com`)
3. Click "Verify"
4. Netlify will show DNS instructions

#### Step 3: Update DNS
In your domain registrar:
1. Find "DNS Settings" or "Name Servers"
2. Add these Netlify name servers:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
3. Save changes
4. Wait 24-48 hours for propagation (usually faster)

#### Step 4: Enable HTTPS
1. Netlify automatically enables HTTPS
2. Wait for SSL certificate (5-10 minutes)
3. Your site is now secure with `https://`

## Part 6: Final Touches

### 1. Update Site URL
Edit `astro.config.mjs`:
```js
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourdomain.com', // Your actual domain
});
```

Commit and push:
```bash
git add .
git commit -m "Update site URL"
git push
```

Netlify will automatically redeploy.

### 2. Set Up Email
For `info@yourdomain.com`:

**Option A: Use Email Forwarding (Free)**
- In your domain registrar, set up email forwarding
- Forward `info@yourdomain.com` to your personal email

**Option B: Use Google Workspace (£4-6/month)**
- Professional email with your domain
- Get Google Suite tools

**Option C: Use Zoho Mail (Free for 1 user)**
- Free professional email
- 5GB storage

### 3. Add Google Analytics (Optional)
1. Create Google Analytics account
2. Get tracking ID
3. Add to `src/layouts/BaseLayout.astro` in the `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## Ongoing Maintenance

### Adding Content
Two ways to add content:

**Via CMS (Easy)**
1. Go to `yoursite.com/admin`
2. Login
3. Add blog posts or galleries
4. Click "Publish"
5. Changes go live automatically

**Via Code (Advanced)**
1. Create new markdown/JSON files locally
2. Commit and push to GitHub
3. Netlify auto-deploys

### Making Design Changes
1. Edit files locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Netlify automatically rebuilds

### Backups
Your content is safe:
- Stored in GitHub (version controlled)
- Netlify keeps deployment history
- Can restore previous versions anytime

## Troubleshooting

### Build Failed
- Check build log in Netlify
- Verify `package.json` has correct dependencies
- Make sure `npm run build` works locally

### CMS Not Working
- Verify Identity is enabled
- Check Git Gateway is enabled
- Make sure you've accepted invitation email
- Clear browser cache and try again

### Images Not Loading
- Check image paths start with `/`
- Verify images are in `public/` folder
- Check file names match exactly (case-sensitive)

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify name servers are correct
- Check Netlify DNS settings

## Cost Summary

| Item | Cost |
|------|------|
| Domain Name | £8-12/year |
| Hosting (Netlify) | £0 |
| CMS (Decap) | £0 |
| SSL Certificate | £0 (included) |
| **Total** | **£8-12/year** |

Compare to Wix:
- Wix: £108/year + £15 domain = £123/year
- **Your savings: £100+/year**

## Support Resources

- **Astro Docs**: https://docs.astro.build
- **Decap CMS Docs**: https://decapcms.org/docs/
- **Netlify Docs**: https://docs.netlify.com
- **Tailwind Docs**: https://tailwindcss.com/docs

## Next Steps Checklist

After deployment:
- [ ] Test all pages on mobile and desktop
- [ ] Add your actual business content
- [ ] Upload real photos to galleries
- [ ] Write your first blog post
- [ ] Update contact information
- [ ] Add your social media links
- [ ] Set up email
- [ ] Test contact form
- [ ] Share your site with friends/clients!

Congratulations! Your professional face painting website is now live! 🎨✨
