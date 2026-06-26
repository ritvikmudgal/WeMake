# Wemake - Premium Agency Website

A modern, production-ready website for Wemake web development agency.

## 🚀 Quick Start

### Local Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wemake-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📧 Email Configuration

### Option 1: Using Resend (Recommended)

1. **Sign up at [Resend](https:
2. **Get your API key**
3. **Create `.env` file in root directory:**
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
4. **Update the form submission in `src/components/ConsultationForm.tsx`:**
   ```typescript
   const response = await fetch('/api/send-email', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data),
   });
   ```

### Option 2: Using EmailJS

1. **Sign up at [EmailJS](https:
2. **Create an email template**
3. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```
4. **Update form submission:**
   ```typescript
   import emailjs from '@emailjs/browser';

   emailjs.send(
     'your_service_id',
     'your_template_id',
     data,
     'your_public_key'
   );
   ```

### Option 3: Using Gmail SMTP

1. **Enable 2-Factor Authentication on your Gmail**
2. **Generate App Password:**
   - Go to Google Account → Security → App Passwords
   - Generate new password for "Mail"
3. **Create `.env` file:**
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```
4. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   ```

## 🎨 Customization Guide

### Changing Layout, Margins, and Padding

**Section Spacing:**
- Find the `py-24` class in each section component
- Change to `py-16` for less padding or `py-32` for more
- Example: `<section className="py-24 bg-white">`

**Container Width:**
- The `container-custom` class controls max width
- Modify in `src/index.css`:
  ```css
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  ```

**Grid Layouts:**
- Services: Change `lg:grid-cols-4` to `lg:grid-cols-3` for 3 columns
- Projects: Change `md:grid-cols-2` to `md:grid-cols-3` for 3 columns
- Testimonials: Change `md:grid-cols-3` to `md:grid-cols-2` for 2 columns

### Adding Project Links

1. **Open `src/components/Projects.tsx`**
2. **Find the projects array:**
   ```typescript
   const projects = [
     {
       title: 'MT Kitchen',
       description: 'Tiffin service website...',
       image: 'https://images.unsplash.com/...',
       tags: ['React', 'Node.js', 'MongoDB'],
       link: 'https://your-actual-project-link.com', // ← Replace this
     },
     // ... more projects
   ];
   ```
3. **Replace `link: '#'` with your actual project URLs**

### Replacing Founder Information

1. **Open `src/components/Founder.tsx`**
2. **Update the following:**
   - Name: Change `Ritvik Mudgal`
   - Bio: Update the description paragraphs
   - Social Links:
     ```typescript
     href="https://linkedin.com/in/yourprofile"  // ← Your LinkedIn
     href="https://github.com/yourprofile"      // ← Your GitHub
     href="mailto:your-email@email.com"         // ← Your Email
     href="https://instagram.com/yourprofile"   // ← Your Instagram
     ```
   - Profile Image: Replace the placeholder div with:
     ```typescript
     <img
       src="/path-to-your-image.jpg"
       alt="Ritvik Mudgal"
       className="w-48 h-48 rounded-2xl object-cover"
     />
     ```

### Updating Social Media Links

**Footer Social Links:**
1. Open `src/components/Footer.tsx`
2. Find the `socialLinks` array:
   ```typescript
   const socialLinks = [
     { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
     { icon: Github, href: 'https://github.com/yourprofile', label: 'GitHub' },
     { icon: Mail, href: 'mailto:hello@wemake.dev', label: 'Email' },
     { icon: Instagram, href: 'https://instagram.com/yourprofile', label: 'Instagram' },
   ];
   ```
3. Replace URLs with your actual profiles

### Changing Colors

**Primary Color:**
1. Open `tailwind.config.js`
2. Modify the primary color palette:
   ```javascript
   colors: {
     primary: {
       50: '#f0f9ff',
       500: '#0ea5e9',  // ← Main brand color
       600: '#0284c7',
       // ...
     },
   },
   ```

**Gradient Colors:**
- Hero section: Edit `from-primary-600 to-purple-600` in `src/components/Hero.tsx`
- Update in DotField component for background effect

### Modifying Content

**Hero Section:**
- `src/components/Hero.tsx` - Main headline and subheadline

**About Section:**
- `src/components/About.tsx` - Company description and statistics

**Services:**
- `src/components/Services.tsx` - Service cards and descriptions

**Process:**
- `src/components/Process.tsx` - Workflow steps

**FAQ:**
- `src/components/FAQ.tsx` - Questions and answers

**Testimonials:**
- `src/components/Testimonials.tsx` - Client testimonials

## 🔌 External Component Integration

### React Bits Components

1. **Create folder structure:**
   ```
   src/
     components/
       react-bits/
         DotField.tsx
         DotField.css
   ```

2. **Copy component files to the folder**

3. **Import and use:**
   ```typescript
   import DotField from './components/react-bits/DotField';
   ```

### 21st.dev Components

1. **Install the component:**
   ```bash
   npx shadcn@latest add "https://21st.dev/r/..."
   ```

2. **Import and use in your components**

### Aceternity UI Components

1. **Install Aceternity UI:**
   ```bash
   npm install framer-motion clsx tailwind-merge
   npx aceternity-ui init
   ```

2. **Add components:**
   ```bash
   npx aceternity-ui add [component-name]
   ```

### Magic UI Components

1. **Install Magic UI:**
   ```bash
   npx shadcn@latest add "https://magicui.design/..."
   ```

2. **Import and use in your components**

## 🌐 Deployment

### Frontend Deployment (Vercel)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts and your site will be live!**

### Frontend Deployment (Netlify)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Drag and drop the `dist` folder to Netlify**

3. **Or connect your GitHub repo for auto-deployment**

### Backend Deployment (For Email)

**Option 1: Vercel Serverless Functions**
1. Create `api/send-email.ts` in root
2. Deploy with Vercel

**Option 2: Railway**
1. Create a simple Express server
2. Deploy to Railway.app

**Option 3: Render**
1. Create a web service
2. Deploy your backend

### Domain Connection

1. **Purchase a domain** (Namecheap, Google Domains, etc.)
2. **In Vercel/Netlify:**
   - Go to Project Settings → Domains
   - Add your custom domain
3. **Update DNS records:**
   - A Record: Point to Vercel/Netlify IP
   - CNAME: Point to your deployment URL

## ✅ Production Checklist

- [ ] Replace all placeholder images with actual images
- [ ] Update all social media links
- [ ] Add real project links
- [ ] Configure email service
- [ ] Update founder information
- [ ] Add real testimonials
- [ ] Update FAQ content
- [ ] Add Google Analytics (optional)
- [ ] Test all form submissions
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images for web
- [ ] Add favicon
- [ ] Update meta tags in index.html
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Test page speed (Google PageSpeed Insights)

## 🐛 Troubleshooting

### Common Issues

**1. Build fails with TypeScript errors:**
```bash
# Run type check
npx tsc --noEmit
```

**2. Styles not applying:**
- Ensure Tailwind CSS is properly configured
- Check that `src/index.css` imports Tailwind directives

**3. Images not loading:**
- Verify image URLs are correct
- Check CORS settings for external images

**4. Form not submitting:**
- Check browser console for errors
- Verify