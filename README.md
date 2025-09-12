# MD Notes

A modern, developer-focused note-taking application built with Next.js. MD Notes allows you to create organized notebooks, write rich-text notes, and manage your knowledge base with a clean, intuitive interface.

![MD Notes](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- 📝 **Rich Text Editor** - Powered by TipTap with full markdown support
- 📚 **Notebook Organization** - Create and manage notebooks to organize your notes
- 🔐 **Authentication** - Secure login with email/password and Google OAuth
- 🎨 **Modern UI** - Clean, responsive design with dark/light mode support
- 📧 **Email Verification** - Account verification and password reset via email
- 🗄️ **PostgreSQL Database** - Reliable data storage with Drizzle ORM
- 🚀 **Performance** - Built with Next.js 15 and Turbopack for fast development

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth with Google OAuth
- **Email**: Resend for transactional emails
- **Rich Text**: TipTap editor with extensions
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (local or hosted like Neon)
- Google OAuth credentials (for social login)
- Resend API key (for emails)

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd md-notes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Generate and run migrations
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Development with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Database operations
npx drizzle-kit generate    # Generate migrations
npx drizzle-kit migrate     # Run migrations
npx drizzle-kit studio      # Open Drizzle Studio
```

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard and authenticated routes
│   ├── login/             # Authentication pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   ├── emails/           # Email templates
│   └── rich-text-editor.tsx
├── db/                    # Database configuration
│   ├── schema.ts         # Drizzle schema definitions
│   └── drizzle.ts        # Database connection
├── lib/                   # Utility libraries
│   ├── auth.ts           # Better Auth configuration
│   └── utils.ts          # Utility functions
├── server/                # Server actions
│   ├── notebooks.ts     # Notebook operations
│   ├── notes.ts          # Note operations
│   └── users.ts          # User operations
└── migrations/            # Database migrations
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

- **Users**: User accounts with email verification
- **Sessions**: User session management
- **Notebooks**: Containers for organizing notes
- **Notes**: Rich-text content with JSON storage
- **Accounts**: OAuth account linking
- **Verification**: Email verification tokens

## 🔐 Authentication Flow

1. **Sign Up**: Email/password registration with verification email
2. **Email Verification**: Click verification link to activate account
3. **Sign In**: Email/password or Google OAuth
4. **Password Reset**: Secure password reset via email
5. **Session Management**: Automatic session handling with Better Auth

## 📝 Rich Text Editing

The note editor supports:
- **Markdown shortcuts**: Type `**bold**`, `*italic*`, `# headings`
- **Keyboard shortcuts**: `Ctrl+B` for bold, `Ctrl+I` for italic
- **Lists**: Bullet and numbered lists
- **Code blocks**: Syntax highlighting support
- **Auto-save**: Notes are automatically saved as you type

## 🎨 UI Components

Built with shadcn/ui components including:
- Form components with validation
- Modal dialogs and dropdowns  
- Toast notifications
- Theme switching (dark/light mode)
- Responsive sidebar navigation

## 📧 Email Templates

Custom React Email templates for:
- Account verification emails
- Password reset emails
- Styled with consistent branding

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:
- Database connection string
- Authentication secrets
- OAuth credentials
- Email service API key

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
