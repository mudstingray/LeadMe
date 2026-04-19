# LeadMe Web Application Structure

## 📁 Project Overview

This is a Next.js-based web application for the LeadMe leadership development program. The structure supports:
- **Student Leadership Development** through progressive challenges
- **Team Collaboration** and project-based learning
- **Mentor Oversight** and student progress tracking
- **Admin Content Management** for program customization

---

## 🗂️ Directory Structure

```
web/
├── src/
│   ├── app/                          # Next.js App Router (Page-based routing)
│   │   ├── (dashboard)/              # Protected dashboard routes (grouped layout)
│   │   │   ├── layout.tsx            # Dashboard layout (header, nav)
│   │   │   ├── dashboard/            # Main student dashboard
│   │   │   │   └── page.tsx          # Dashboard home page
│   │   │   ├── challenges/           # Challenge management
│   │   │   │   ├── page.tsx          # List all challenges
│   │   │   │   └── [id]/             # Individual challenge detail
│   │   │   │       └── page.tsx      # Challenge detail page
│   │   │   ├── teams/                # Team management
│   │   │   │   ├── page.tsx          # List user's teams
│   │   │   │   └── [id]/             # Team detail/management
│   │   │   ├── progress/             # Progress tracking
│   │   │   │   └── page.tsx          # Progress dashboard
│   │   │   ├── profile/              # User profile
│   │   │   │   └── page.tsx          # Edit user profile
│   │   │   └── admin/                # Admin-only features
│   │   │       ├── users/            # User management
│   │   │       ├── content/          # Content management
│   │   │       └── analytics/        # Analytics/reporting
│   │   ├── api/                      # API Routes (serverless endpoints)
│   │   │   ├── auth/                 # NextAuth.js auth endpoints
│   │   │   ├── challenges/           # Challenge CRUD operations
│   │   │   ├── teams/                # Team operations
│   │   │   ├── users/                # User management
│   │   │   └── progress/             # Progress tracking
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home/landing page
│   │   └── globals.css               # Global Tailwind styles
│   │
│   ├── components/                   # Reusable React components
│   │   ├── ui/                       # Base UI components (Button, Card, etc)
│   │   │   ├── button.tsx            # Button component
│   │   │   ├── card.tsx              # Card component
│   │   │   ├── input.tsx             # Input field
│   │   │   ├── form.tsx              # Form wrapper
│   │   │   └── ...                   # More UI components as needed
│   │   ├── layout/                   # Layout-specific components
│   │   │   ├── header.tsx            # Header/navbar
│   │   │   ├── sidebar.tsx           # Sidebar navigation
│   │   │   └── footer.tsx            # Footer
│   │   ├── forms/                    # Form components
│   │   │   ├── challenge-form.tsx    # Create/edit challenge
│   │   │   ├── team-form.tsx         # Create/edit team
│   │   │   └── profile-form.tsx      # Edit user profile
│   │   ├── challenges/               # Challenge-specific components
│   │   │   ├── challenge-card.tsx    # Challenge display card
│   │   │   ├── challenge-list.tsx    # List of challenges
│   │   │   └── challenge-detail.tsx  # Challenge detail view
│   │   ├── progress/                 # Progress tracking components
│   │   │   ├── progress-card.tsx     # Progress summary card
│   │   │   ├── milestone-tracker.tsx # Milestone display
│   │   │   └── progress-chart.tsx    # Progress visualization
│   │   ├── teams/                    # Team collaboration components
│   │   │   ├── team-card.tsx         # Team display
│   │   │   ├── team-list.tsx         # List teams
│   │   │   └── team-members.tsx      # Team member management
│   │   └── admin/                    # Admin panel components
│   │       ├── user-management.tsx   # Manage users
│   │       ├── content-editor.tsx    # Edit content
│   │       └── analytics-view.tsx    # View analytics
│   │
│   ├── lib/                          # Utility functions and helpers
│   │   ├── utils.ts                  # General utilities (cn, etc)
│   │   ├── auth.ts                   # Authentication utilities
│   │   ├── db.ts                     # Database client setup
│   │   ├── validations.ts            # Zod validation schemas
│   │   ├── progress.ts               # Progress calculation logic
│   │   ├── gamification.ts           # Achievement/badge system
│   │   └── constants.ts              # App constants
│   │
│   └── types/                        # TypeScript type definitions
│       ├── index.ts                  # Exported types
│       ├── user.ts                   # User-related types
│       ├── challenge.ts              # Challenge types
│       └── team.ts                   # Team types
│
├── prisma/                           # Database schema and migrations
│   ├── schema.prisma                 # Prisma schema (database models)
│   ├── migrations/                   # Database migration history
│   └── seed.ts                       # Seed script for sample data
│
├── public/                           # Static assets
│   ├── images/                       # Images (logos, icons)
│   └── ...                           # Other static files
│
├── components.json                   # shadcn/ui configuration
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies and scripts
├── .env.local                        # Environment variables (local)
├── .env.example                      # Example environment variables
└── README.md                         # Project documentation
```

---

## 🔑 Key Files Explained

### Core Application Files

**`src/app/layout.tsx`** - Root layout
- Wraps all pages
- Sets up global providers (NextAuth, Zustand store, etc)
- Defines root HTML structure

**`src/app/(dashboard)/layout.tsx`** - Dashboard layout
- Shared layout for all dashboard pages
- Header, sidebar, navigation
- Role-based access control

**`src/components/ui/button.tsx`** - Base button component
- Reusable button with variants (primary, secondary, outline, etc)
- Built with shadcn/ui pattern
- Import and use: `<Button>Click me</Button>`

### Database

**`prisma/schema.prisma`** - Database schema
Defines all data models:
- **User** - Students, mentors, admins
- **Challenge** - Leadership challenges (individual/team)
- **Team** - Group of students
- **Progress** - Student progress tracking
- **Assessment** - Evaluations and feedback
- **TeamMember** - User-team relationships
- **ChallengeParticipant** - User-challenge relationships

### Configuration

**`components.json`** - shadcn/ui config
- Tells shadcn where to install components
- Aliases for imports

**`tailwind.config.ts`** - Tailwind CSS styling
- Color scheme
- Typography
- Custom utilities

**`tsconfig.json`** - TypeScript configuration
- @/* alias for clean imports

---

## 🚀 How to Add Features

### Add a New Page

1. Create file: `src/app/(dashboard)/your-feature/page.tsx`
2. Use the layout automatically (no need to recreate header/nav)
3. Example:
   ```typescript
   export default function YourFeaturePage() {
     return <div>Your content here</div>
   }
   ```

### Add a New API Endpoint

1. Create file: `src/app/api/your-feature/route.ts`
2. Export `GET`, `POST`, `PUT`, `DELETE` functions
3. Example:
   ```typescript
   export async function GET(request: Request) {
     return Response.json({ data: 'your data' })
   }
   ```

### Add a New Component

1. Create file: `src/components/features/my-component.tsx`
2. Export component
3. Import in pages: `import { MyComponent } from '@/components/features/my-component'`

### Add Database Model

1. Edit `prisma/schema.prisma`
2. Add new model with fields
3. Run: `npx prisma migrate dev --name your_migration_name`
4. Prisma generates types automatically

---

## 🔐 Authentication

Uses **NextAuth.js** with email/password:
- Session-based authentication
- Role-based access control (STUDENT, MENTOR, ADMIN)
- Automatic user type safety with TypeScript

**Setup needed:**
1. Create `src/app/api/auth/[...nextauth]/route.ts`
2. Configure NextAuth with Prisma adapter
3. Add `NEXTAUTH_SECRET` to `.env.local`

---

## 📊 Database Relationships

```
User
  ├── has many Progress (tracks milestones)
  ├── has many Teams (via TeamMember)
  ├── has many Challenges (via ChallengeParticipant)
  └── has many Assessments (as assessor or subject)

Team
  ├── has many TeamMembers
  └── has many Users (via TeamMember)

Challenge
  ├── has many ChallengeParticipants
  └── has many Users (via ChallengeParticipant)
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework with routing |
| `react` / `react-dom` | UI library |
| `tailwindcss` | Styling |
| `@prisma/client` | Database ORM |
| `next-auth` | Authentication |
| `react-hook-form` | Form state management |
| `zod` | Schema validation |
| `zustand` | Light state management |
| `recharts` | Data visualization |
| `lucide-react` | Icon library |

---

## 🎨 Styling

Uses **Tailwind CSS** with **shadcn/ui** components.

To add a shadcn component:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

Custom styling using Tailwind classes:
```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Styled content
</div>
```

---

## 🛠️ Common Development Tasks

### Start dev server
```bash
npm run dev
# Visit http://localhost:3000
```

### Create database migration
```bash
npx prisma migrate dev --name description_of_change
```

### Open database GUI
```bash
npx prisma studio
```

### Build for production
```bash
npm run build
npm start
```

### Format code
```bash
npm run lint
```

---

## 🔄 Development Workflow

1. **Plan** - What feature to build?
2. **Database** - Update `schema.prisma` if needed, run migration
3. **API** - Create endpoint in `src/app/api/`
4. **UI** - Create components in `src/components/`
5. **Pages** - Create pages in `src/app/(dashboard)/`
6. **Test** - Use dev server to test
7. **Deploy** - Push to GitHub, deploy to Vercel

---

## 📝 Editing This Structure

This structure is **fully customizable**:

- **Don't like a folder name?** Rename it and update imports
- **Want different organization?** Move components around
- **Need a new feature section?** Create new folder under `(dashboard)` or `components`
- **Database changes?** Edit `schema.prisma` and migrate

The main constraint is keeping API routes in `src/app/api/` and pages in `src/app/`.

---

## ✅ Next Steps

1. ✅ Structure created
2. ⏳ Install dependencies (running `npm install`)
3. ⏳ Set up environment variables (`.env.local`)
4. ⏳ Set up NextAuth authentication
5. ⏳ Initialize database with Prisma
6. ⏳ Create first features

You can now edit any file in this structure to customize it for your needs!
