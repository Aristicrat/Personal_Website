interface ExperienceItem {
    title: string;
    company: string;
    logoUrl: string;
    logoAlt: string;
    logoScale?: number;
    logoShiftX?: number;
    location: string;
    period: string;
    details: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Entity Operations Analyst",
        company: "Middesk",
        logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=middesk.com",
        logoAlt: "Middesk logo",
        location: "Manhattan, NY",
        period: "Nov. 2025 - Dec. 2025",
        details: [
            "Built and optimized JavaScript and SQL-driven internal tools to resolve edge cases in automated entity-verification pipelines, improving data accuracy and reducing manual review workload.",
            "Partnered with Product and Engineering to debug data inconsistencies and refine verification logic in production workflows.",
            "Queried and reconciled multi-state entity data across internal databases and third-party systems to support business onboarding at scale.",
        ],
    },
    {
        title: "Quality Assurance / Data Collector",
        company: "Applause",
        logoUrl: "https://www.applause.com/wp-content/uploads/applause-logo-1.svg",
        logoAlt: "Applause logo",
        logoScale: 0.5,
        logoShiftX: 24,
        location: "Manhattan, NY",
        period: "Sep. 2025 - Oct. 2025",
        details: [
            "Collected and validated data from 50+ smart devices daily for confidential MAANG-level technology clients, maintaining 100% data accuracy and integrity.",
            "Trained and mentored 5+ new team members, standardizing data validation procedures and QA workflows that improved team productivity by 25%.",
        ],
    },
    {
        title: "Risk Modeling Services: Life Associate",
        company: "PricewaterhouseCoopers",
        logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=pwc.com",
        logoAlt: "PwC logo",
        location: "Manhattan, NY",
        period: "Sep. 2024 - Oct. 2024",
        details: [
            "Performed data-driven recalculations for a major audit client using SQL and Excel, leveraging QuickSight dashboards to validate accuracy and ensure data integrity.",
            "Built and maintained a VBA-based group reinsurance product model supporting financial projections for a $250M line of business.",
        ],
    },
    {
        title: "Web Developer",
        company: "The Juilliard School",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Juilliard_School_logo.svg",
        logoAlt: "The Juilliard School logo",
        logoScale: 0.4,
        logoShiftX: 30,
        location: "Manhattan, NY",
        period: "June 2024 - Aug. 2024",
        details: [
            "Designed Excel VBA dashboards to track FY24 grants and donations, improving reporting efficiency.",
            "Assisted in the development and maintenance of the school's official website using HTML, CSS, and JavaScript.",
            "Built SQL queries and Python-based data pipelines to extract, clean, and integrate multi-source data into dynamic web dashboards.",
        ],
    },
    {
        title: "Risk Modeling Services: Life Intern",
        company: "PricewaterhouseCoopers",
        logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=pwc.com",
        logoAlt: "PwC logo",
        location: "Manhattan, NY",
        period: "June 2023 - Aug. 2023",
        details: [
            "Leveraged AWS QuickSight to visualize and present dashboards to a large-scale client.",
            "Automated Variable Annuity UMA testing with Excel VBA, applying Martingale and Black-Scholes models to improve accuracy and reduce processing time by 20%.",
            "Led a SQL-based dashboard project for a life insurer, cutting manual reporting time by 35%.",
            "Created Tableau and Power BI dashboards for executive and client-facing reporting.",
        ],
    },
    {
        title: "Marketing & Development Intern",
        company: "Bloomberg Philanthropies & Studio Institute",
        logoUrl: "https://ncdalliance.org/sites/default/files/styles/organisation_hero_medium/public/2025-06/bloomberg_philanthropies-logo-1340x756_0.jpg.webp?itok=OQCNO0XE",
        logoAlt: "Bloomberg logo",
        logoScale: 1.5,
        logoShiftX: -12,
        location: "Manhattan, NY",
        period: "June 2019 - Aug. 2019",
        details: [
            "Collaborated on a grant proposal that secured $150,000 in funding from M&T Bank.",
            "Supported budgeting and timeline development for 5+ active grant proposals under the Director of Development.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-shell experience-shell">
            <div className="section-inner">
                <div className="section-header">
                    <div>
                        <span className="section-kicker">Career</span>
                        <h2 className="section-title">Experience</h2>
                    </div>
                </div>

                <div className="experience-list">
                    {experiences.map((role) => (
                        <article key={`${role.company}-${role.title}-${role.period}`} className="experience-card is-visible">
                            <div className="experience-header-row">
                                <h3 className="experience-title">{role.title}</h3>
                                <span className="experience-logo-white" aria-hidden>
                                    <img
                                        src={role.logoUrl}
                                        alt={role.logoAlt}
                                        className="experience-logo-img"
                                        loading="lazy"
                                        style={{ transform: `translateX(${role.logoShiftX ?? 0}%) scale(${role.logoScale ?? 1})` }}
                                    />
                                </span>
                            </div>
                            <p className="experience-team">{role.company} · {role.location}</p>
                            <p className="experience-period">{role.period}</p>
                            <ul className="experience-details">
                                {role.details.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
