// Work experience data for the Experience timeline.
// Add future roles as new objects at the START of this array (most recent first).

export const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Info Tech Soft",
    companyType: "Software Development Firm",
    location: "London, UK (HQ)",
    teamLocation: "Chattogram, Bangladesh",
    workMode: "Hybrid",
    // TODO: replace with your real start date, e.g. "Jan 2024"
    startDate: "JAN 2026",
    endDate: "Present",
    highlights: [
      "Contributed to 3 completed projects as a frontend developer on the core product team.",
      "Helped drive a 23% increase in revenue by shipping conversion-focused UI features.",
      "Reduced development turnaround time by 40% through reusable components and AI.",
      "Impact: Optimize the SEO to improve search engine ranking.",
      "Collaborated daily across a hybrid, cross-border team spanning London and Chattogram.",
    ],
    tags: ["Cursor","Claude Code" , "NextJS", "TypeScript", "REST APIs", "Git"],
  },
  {
    id: 2,
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    companyType: "Freelance / Remote Contractor",
    // No single company HQ for freelance work, so `location` describes
    // how the work was done instead of where an office is.
    location: "Remote — worked directly with clients",
    workMode: "Remote",
    employmentType: "Freelancer",
    // TODO: replace with your real dates, e.g. "Jun 2025" — "Dec 2025"
    startDate: "JUNE 2025",
    endDate: "DEC 2025",
    highlights: [
      "Shipped 2 complete client projects end-to-end as a solo full stack developer.",
      "Owned the full project lifecycle — requirements, Full project build, and deployment — for each client.",
      "Helped a client increase signups by 45% through a new product launch.",
      "Delivered both projects ahead of the agreed deadline.",
      "Communicated directly with clients to turn business requirements into a working, responsive product.",
    ],
    tags: ["Next.js", "ExpressJs", "PostGreSQL", "Prisma", "TypeScript"],
  },
];