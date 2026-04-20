<p align="center">
  <a href=".">
    <img alt="LeadMe Logo" src="assets/pictures/LeadMeLogo.png" width="200">
  </a>
</p>

<div align="center">
  <h3>LeadMe - The Program Helping Students To Be The Great Leaders</h3>
</div>


<div align="center">
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/pypi/l/deepagents" alt="PyPI - License"></a>
  <a href="https://github.com/gmtigrisva123" target="_blank"><img src="https://img.shields.io/badge/github-contributor1-blue?logo=github" alt="Github Contributors 1"></a>
  <a href="https://github.com/mudstingray" target="_blank"><img src="https://img.shields.io/badge/github-contributor2-blue?logo=github" alt="Github Contributors"></a>

</div>

##### The name “LeadMe” reflects the dual essence of the program: learning to lead others while also being guided through the process of becoming a leader. On one level, it represents the idea of being led—where students are initially supported, guided, and structured through progressively challenging leadership experiences. On another level, it embodies the transformation toward becoming a leader, where learners gradually develop the confidence and capability to lead themselves and others independently. Ultimately, “LeadMe” captures a journey rather than a destination: a continuous process of growth where guidance evolves into self-direction, and participation evolves into leadership.

## 🧠 Overview
### Student-Centered Approach
This program is designed to guide students toward becoming effective leaders across various domains, with a strong emphasis on hands-on learning and real-world application rather than heavy theoretical instruction.
Instead of focusing solely on abstract leadership theories, the program prioritizes experiential learning, where students actively practice decision-making, collaboration, and responsibility in realistic team-based environments.

### Core Philosophy
Leadership is not taught—it is developed through action, reflection, and continuous improvement.

Students are gradually introduced to leadership concepts starting from the smallest, most fundamental tasks, and progressively advance toward managing larger, more complex responsibilities.

### 🚀 Leadership Model
The program aims to help students cultivate leadership qualities inspired by globally recognized leaders such as:

[Donald Trump](https://www.forbes.com/sites/pklein/2025/03/08/donald-trump-founder-leader-or-failure/),

[Steve Jobs](https://hbr.org/2012/04/the-real-leadership-lessons-of-steve-jobs),

[Elon Musk](https://marriottstudentreview.byu.edu/leadership-development-a-study-of-elon-musk),

CEOs and founders of major global corporations

However, the focus is not on imitation, but on understanding the underlying traits that define impactful leadership, including:

+ Strategic thinking

+ Vision and innovation

+ Decision-making under uncertainty

+ Communication and influence

+ Resilience and adaptability

### 📈 Progressive Learning Path
Students will be guided through a structured, step-by-step development journey:

#### Foundational Stage
- Understanding teamwork roles
- Learning responsibility in small group tasks
- Building communication confidence
#### Intermediate Stage
- Leading small teams
- Managing simple projects
- Practicing delegation and coordination
#### Advanced Stage
- Leading complex team projects
- Handling real-time decision-making
- Managing performance and accountability

## 🎯 Motivation
Vietnam is a country with strong student potential in academics, research, and project-based learning. However, opportunities for students to develop authentic, practice-based leadership skills remain limited within many traditional educational environments.

In most cases, students operate within highly structured systems where success is defined by task completion rather than initiative, leadership, or independent decision-making. As a result, leadership development often occurs indirectly, without sufficient exposure to real responsibility, ambiguity, or team-based problem-solving.

While this limitation does not apply uniformly to all students, there remains a clear and persistent gap between students’ potential and their access to meaningful leadership experiences—particularly those grounded in practice rather than theory.

LeadMe is designed to address this gap by providing a structured, experiential framework for leadership development for students aged 14–17, emphasizing real-world decision-making, collaboration, and progressive responsibility.

## ⚙️ Methodology / Approach
LeadMe adopts a learning-by-reading + learning-by-doing methodology, combining curated content with interactive engagement to foster practical leadership development.

1. Content-Centered Learning (Reading-Based Approach)

At the core of the platform are structured lesson articles, where each lesson is designed as a carefully crafted reading experience rather than passive instruction.

* Each lesson functions as a short-form article focused on a specific leadership concept (e.g., decision-making, communication, accountability).
* Content is written in a clear, engaging, and context-driven style, allowing students to internalize ideas through real-world scenarios.
* Articles may include:
    * Case studies
    * Real-life examples
    * Reflective questions embedded within the text

👉 The goal is not just to “teach”, but to build understanding through interpretation and critical thinking.

⸻

2. Active Reflection Layer

To avoid passive consumption, each lesson integrates reflection mechanisms:

* Guided questions after reading
* Open-ended prompts (e.g., “What would you do in this situation?”)
* Personal journaling space

This encourages students to:

* Process information deeply
* Form their own perspectives
* Connect lessons to real-life experiences

⸻

3. Progressive Skill Development

The curriculum follows a progressive structure, where:

* Lessons are organized from foundational → intermediate → advanced
* Each stage introduces more complex scenarios and responsibilities
* Students gradually transition from:
    * Understanding concepts → Applying them → Leading independently

⸻

4. Gamified Engagement System

To maintain motivation and consistency, LeadMe integrates lightweight gamification:

* Progress tracking (lesson completion)
* Achievement badges for milestones
* Streaks or consistency indicators

👉 This transforms learning into a continuous and rewarding journey, rather than a one-time activity.

⸻

5. Real-World Application Layer

Beyond reading, the platform emphasizes action-based learning:

* Mini challenges (e.g., lead a small group task, make a decision plan)
* Scenario simulations
* Optional peer collaboration features (future development)

This ensures students don’t just understand leadership — they practice it.

⸻

6. Scalable & Modular Architecture

From a system design perspective, the platform is built with scalability in mind:

* Each lesson is stored as a modular content unit (e.g., Markdown or database-driven)
* Easy to:
    * Add new lessons
    * Update content
    * Personalize learning paths in the future

⸻

🎯 Core Philosophy

Leadership is not learned through theory alone, but through exposure, reflection, and action.

LeadMe operationalizes this by turning simple reading into a multi-layered learning experience:

* Read → Think → Reflect → Apply

## 🧩 Tech Stack

### Web Application
The LeadMe program includes a modern, full-stack web application built with:

**Frontend & Framework:**
- **Next.js 16** - React-based framework with server-side rendering and static generation
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling framework

**Backend & Database:**
- **Next.js API Routes** - Serverless backend endpoints
- **Prisma ORM** - Database abstraction with automatic migrations
- **SQLite** (Development) / **PostgreSQL** (Production) - Database storage
- **NextAuth.js** - Authentication and session management

**State Management & Forms:**
- **Zustand** - Lightweight client-side state management
- **React Hook Form** - Efficient form state handling
- **Zod** - Runtime type validation for forms and API data

**UI & Visualization:**
- **shadcn/ui** - Pre-built, accessible React components
- **Recharts** - Data visualization for progress tracking
- **Lucide React** - Icon library

**Development Tools:**
- **ESLint & TypeScript** - Code quality and type checking
- **Tailwind CSS** - Modern responsive design utilities

### Project Structure

```
LeadMe/
├── web/                          # Next.js web application
│   ├── src/
│   │   ├── app/                  # Pages and API routes
│   │   │   ├── (auth)/          # Authentication pages
│   │   │   ├── (dashboard)/     # Protected dashboard
│   │   │   ├── api/             # Backend endpoints
│   │   │   └── page.tsx         # Landing page
│   │   ├── components/           # React components
│   │   │   ├── ui/              # Base UI components
│   │   │   ├── challenges/      # Challenge features
│   │   │   ├── teams/           # Team features
│   │   │   └── progress/        # Progress tracking
│   │   └── lib/                 # Utilities and helpers
│   ├── prisma/
│   │   └── schema.prisma        # Database models
│   ├── public/                  # Static assets
│   └── package.json             # Dependencies
├── README.md                     # Main documentation (you are here)
├── CONTRIBUTING.md              # Contribution guidelines
└── LICENSE                      # MIT License
```

### Web Application Features

**Core Features Implemented:**
- ✅ Database schema with User, Challenge, Team, Progress, Assessment models
- ✅ API endpoints for challenge management (CRUD operations)
- ✅ Reusable UI components (Button, Card, Badge, ChallengeCard)
- ✅ Progress tracking with milestone system
- ✅ Authentication framework with NextAuth.js
- ✅ Form validation with Zod schemas
- ✅ Dashboard layout with navigation
- ✅ Beautiful landing page

**Progressive Learning System:**
- Three-stage leadership development path:
  - **Foundational** - Basic teamwork and communication
  - **Intermediate** - Team leadership and decision-making
  - **Advanced** - Strategic thinking and organizational leadership

**Key Documentation Files:**
- `web/QUICKSTART.md` - Quick reference guide
- `web/STRUCTURE.md` - Detailed architecture documentation
- `web/README.md` - Web app getting started guide

## 🚀 How to run

Follow these steps to launch the web application locally. For detailed web-specific setup and architecture, see `web/README.md`.

```bash
cd web
npm install
# Copy environment variables
cp .env.example .env.local   # Update DATABASE_URL inside .env.local
# Run database migrations (uses SQLite by default)
npx prisma migrate dev --name init
npm run dev
```

Then open:
```bash
Then open http://localhost:3000

You should see the LeadMe homepage with lesson modules.
```

If you need a faster reference for commands, use `web/QUICKSTART.md`. If you want the full project architecture and folder guide, use `web/STRUCTURE.md`.
