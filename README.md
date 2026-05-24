<p align="center">
  <img src="public/logo.png" alt="Prept Logo" width="180" />
</p>

<h1 align="center">Prept</h1>

<p align="center">
  <strong>Ace your next interview — with real experts.</strong>
</p>

<p align="center">
  A modern, full-stack interview preparation platform that connects candidates with experienced professionals for 1:1 mock interviews, powered by AI feedback and real-time video sessions.
</p>

<p align="center">
  <a href="#-features"><img src="https://img.shields.io/badge/Features-8-amber?style=for-the-badge" alt="Features" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
</p>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [How It Works](#-how-it-works)
- [Pricing Plans](#-pricing-plans)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧐 About

**Prept** is a platform that bridges the gap between job-seeking engineers and industry professionals. Candidates (Interviewees) can browse and book mock interview sessions with experienced professionals (Interviewers) across multiple domains — **Frontend, Backend, Fullstack, DSA, System Design, Behavioral, DevOps, and Mobile**.

Each session includes HD video calling, real-time chat, AI-generated interview questions, and a comprehensive AI-powered feedback report after the interview concludes. The platform operates on a **credit-based economy**, where interviewees use credits to book sessions and interviewers earn credits they can withdraw.

---

## ✨ Features

| Feature | Description |
|---|---|
| **🎥 HD Video Calls** | Real-time video sessions powered by Stream with screen sharing and recording support |
| **🤖 AI Question Generator** | Live, role-specific interview questions generated on demand using Google Gemini |
| **📊 AI Feedback Reports** | Post-interview analysis covering technical skills, communication, problem-solving, strengths & improvements |
| **💬 Persistent Chat** | In-app messaging between interviewers and interviewees — before, during, and after sessions |
| **🗓️ Slot-Based Scheduling** | Interviewers set availability; interviewees pick from open slots with one-click booking |
| **💰 Credit Economy** | Subscription-based credit system with interviewers earning and withdrawing credits |
| **🔒 Security by Arcjet** | Bot protection, rate limiting, and abuse prevention on all API routes |
| **📧 Transactional Emails** | Automated email notifications for bookings, payouts, and more via Resend |

---

## 🚀 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | App Router, Server Components, React 19 |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | Accessible component primitives |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Stream Video React SDK](https://getstream.io/video/) | Video call UI components |
| [Stream Chat React](https://getstream.io/chat/) | Chat UI components |
| [Shiki](https://shiki.matsu.io/) | Syntax highlighting (code demos) |

### Backend & Infrastructure
| Technology | Purpose |
|---|---|
| [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) | Server-side mutations & data fetching |
| [PostgreSQL](https://www.postgresql.org/) | Relational database |
| [Prisma](https://www.prisma.io/) | Type-safe ORM |
| [Clerk](https://clerk.com/) | Authentication, user management & subscription billing |
| [Stream Node SDK](https://getstream.io/) | Video & chat backend |
| [Google Gemini AI](https://ai.google.dev/) | AI-powered feedback & question generation |
| [Resend](https://resend.com/) + [React Email](https://react.email/) | Transactional emails |
| [Arcjet](https://arcjet.com/) | Bot protection & rate limiting |

---

## 📁 Project Structure

```
prept/
├── actions/                  # Server actions
│   ├── aiQuestions.js        # AI question generation via Gemini
│   ├── appointments.js       # Appointment management
│   ├── booking.js            # Booking logic & credit handling
│   ├── call.js               # Video call management
│   ├── dashboard.js          # Interviewer dashboard data
│   ├── explore.js            # Browse interviewers
│   ├── onboarding.js         # User onboarding flow
│   ├── payout.js             # Payout/withdrawal requests
│   └── user.js               # User operations
├── app/
│   ├── (auth)/               # Auth routes (sign-in, sign-up)
│   ├── (main)/               # Protected app routes
│   │   ├── appointments/     # View & manage appointments
│   │   ├── call/             # Video call session page
│   │   ├── dashboard/        # Interviewer dashboard
│   │   ├── explore/          # Browse interviewers
│   │   ├── interviewers/     # Interviewer profile pages
│   │   ├── onboarding/       # Role selection & profile setup
│   │   └── payout/           # Withdrawal management
│   ├── api/webhooks/         # Clerk webhook handlers
│   ├── globals.css           # Global styles & design tokens
│   ├── layout.js             # Root layout with providers
│   └── page.jsx              # Landing page
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── animate-ui/           # Animation components
│   ├── AppointmentCard.jsx   # Appointment display card
│   ├── FeedbackModal.jsx     # AI feedback viewer modal
│   ├── Header.jsx            # Navigation header
│   └── ...                   # Other reusable components
├── emails/                   # React Email templates
├── hooks/                    # Custom React hooks
├── lib/
│   ├── arcjet.js             # Arcjet security config
│   ├── checkUser.js          # User verification utility
│   ├── data.js               # Constants & static data
│   ├── helpers.js            # Shared helper functions
│   ├── prisma.js             # Prisma client singleton
│   └── utils.js              # General utilities
├── prisma/
│   ├── schema.prisma         # Database schema
│   ├── migrations/           # Database migrations
│   └── seed.jsx              # Database seed script
├── public/                   # Static assets (logos, images)
└── package.json
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm**, **yarn**, or **pnpm**
- A **PostgreSQL** database (e.g., [Supabase](https://supabase.com/), [Neon](https://neon.tech/), or local instance)
- Accounts & API keys for: [Clerk](https://clerk.com/), [Stream](https://getstream.io/), [Google AI Studio](https://aistudio.google.com/), [Resend](https://resend.com/), [Arcjet](https://arcjet.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Manvendra0023/prept.git
cd prept
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) below).

### 4. Set Up the Database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# ── Clerk Authentication ───────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# ── Database (PostgreSQL) ─────────────────────────────
DATABASE_URL="postgresql://user:password@host:6543/dbname?pgbouncer=true"
DIRECT_URL="postgresql://user:password@host:5432/dbname"

# ── Stream (Video & Chat) ─────────────────────────────
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# ── Google Gemini AI ───────────────────────────────────
GEMINI_API_KEY=your_gemini_api_key

# ── Resend (Email Service) ─────────────────────────────
RESEND_API_KEY=re_xxxxx

# ── Arcjet (Security) ─────────────────────────────────
ARCJET_KEY=ajkey_xxxxx

# ── App Config ─────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_PAYOUT_PASSWORD=your_secure_password
```

> **⚠️ Note:** Never commit your `.env` file. It is already included in `.gitignore`.

---

## 🗄️ Database Setup

Prept uses **PostgreSQL** with **Prisma ORM**. The schema includes the following core models:

```
User ─────────── Stores both Interviewees and Interviewers
Availability ─── Interviewer time slots
Booking ──────── Scheduled interview sessions
Feedback ─────── AI-generated post-interview reports
CreditTransaction ── Credit purchase/deduction/earning history
Payout ────────── Interviewer withdrawal requests
```

### Key Enums

| Enum | Values |
|---|---|
| `UserRole` | `UNASSIGNED`, `INTERVIEWEE`, `INTERVIEWER` |
| `BookingStatus` | `SCHEDULED`, `COMPLETED`, `CANCELLED` |
| `InterviewCategory` | `FRONTEND`, `BACKEND`, `FULLSTACK`, `DSA`, `SYSTEM_DESIGN`, `BEHAVIORAL`, `DEVOPS`, `MOBILE` |
| `FeedbackRating` | `POOR`, `AVERAGE`, `GOOD`, `EXCELLENT` |

### Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to the database
npx prisma db push

# Open Prisma Studio (database GUI)
npx prisma studio

# Run database seed (optional)
npx prisma db seed
```

---

## 🔄 How It Works

```
┌─────────────────────────────────────────────────────────┐
│                    USER SIGNS UP                        │
│              (Clerk Authentication)                     │
└────────────────────────┬────────────────────────────────┘
                         │
              ┌──────────▼──────────┐
              │   SELECT A ROLE     │
              └──────┬────────┬─────┘
                     │        │
         ┌───────────▼─┐  ┌──▼────────────┐
         │ INTERVIEWEE  │  │  INTERVIEWER   │
         └───────┬──────┘  └──────┬────────┘
                 │                │
    ┌────────────▼─────┐   ┌─────▼──────────────┐
    │  Browse & Book   │   │  Set Availability  │
    │  Interviewers    │   │  & Credit Rate     │
    └────────┬─────────┘   └─────────┬──────────┘
             │                       │
             └───────────┬───────────┘
                         │
              ┌──────────▼──────────┐
              │  JOIN VIDEO CALL    │
              │  (Stream SDK)       │
              │  + Live AI Questions│
              │  + In-App Chat      │
              └──────────┬──────────┘
                         │
              ┌──────────▼──────────┐
              │  AI FEEDBACK REPORT │
              │  (Google Gemini)    │
              └──────────┬──────────┘
                         │
              ┌──────────▼──────────┐
              │  CREDITS TRANSFER   │
              │  Interviewee → Pool │
              │  Pool → Interviewer │
              └─────────────────────┘
```

### Step-by-Step

1. **Sign Up & Onboard** — Users authenticate via Clerk and select their role (Interviewee or Interviewer)
2. **Set Availability** *(Interviewers)* — Define time slots and set credit rates for sessions
3. **Explore & Book** *(Interviewees)* — Browse interviewers by category, view profiles, and book available slots using credits
4. **Join the Session** — Both parties join the HD video call powered by Stream; interviewers get AI-generated questions in real time
5. **Get AI Feedback** — After the session, Google Gemini generates a comprehensive feedback report with ratings, strengths, and improvement areas
6. **Earn & Withdraw** *(Interviewers)* — Credits are transferred to the interviewer's balance; they can request payouts anytime

---

## 💳 Pricing Plans

| Plan | Price | Credits/Month | Key Features |
|---|---|---|---|
| **Free** | $0 | 1 | 1 mock session, HD video, chat |
| **Starter** | $29 | 5 | AI feedback, credits roll over |
| **Pro** | $49 | 15 | All features + recording & playback |

> Credits roll over monthly. Each credit = one interview session.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style and project structure
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation if needed

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>Manvendra</strong>
</p>
