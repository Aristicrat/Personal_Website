import GlassSurface from "./ui/GlassSurface";

interface Certification {
    name: string;
    issuer: string;
    date?: string;
    status: "completed" | "in-progress" | "planned";
    credentialUrl?: string;
}

const certifications: Certification[] = [
    // Add your certifications here. Examples:
    // {
    //     name: "AWS Certified Cloud Practitioner",
    //     issuer: "Amazon Web Services",
    //     date: "2024",
    //     status: "completed",
    //     credentialUrl: "https://...",
    // },
    // {
    //     name: "SOA Exam P - Probability",
    //     issuer: "Society of Actuaries",
    //     status: "in-progress",
    // },
];

const actuarialExams = [
    // Track your actuarial exam progress:
    // { exam: "Exam P", status: "passed", date: "2023" },
    // { exam: "Exam FM", status: "studying", date: null },
];

export default function Certifications() {
    // Only render if there are certifications to show
    if (certifications.length === 0 && actuarialExams.length === 0) {
        return null;
    }

    return (
        <section id="certifications" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Certifications & <span className="gradient-text">Credentials</span>
                </h2>

                {certifications.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {certifications.map((cert, index) => (
                            <GlassSurface key={index} className="p-6 hover-glow" borderRadius={16}>
                                <div className="flex items-start gap-4">
                                    {/* Status indicator */}
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                            cert.status === "completed"
                                                ? "bg-green-500/20"
                                                : cert.status === "in-progress"
                                                ? "bg-yellow-500/20"
                                                : "bg-gray-500/20"
                                        }`}
                                    >
                                        {cert.status === "completed" ? (
                                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        ) : cert.status === "in-progress" ? (
                                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                                                <p className="text-primary-400 text-sm">{cert.issuer}</p>
                                            </div>
                                            <span
                                                className={`px-2 py-0.5 text-xs rounded-full ${
                                                    cert.status === "completed"
                                                        ? "bg-green-500/15 text-green-300 border border-green-500/30"
                                                        : cert.status === "in-progress"
                                                        ? "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30"
                                                        : "bg-gray-500/15 text-gray-300 border border-gray-500/30"
                                                }`}
                                            >
                                                {cert.status === "completed" ? "Earned" : cert.status === "in-progress" ? "In Progress" : "Planned"}
                                            </span>
                                        </div>
                                        {cert.date && <p className="text-gray-500 text-sm mt-1">{cert.date}</p>}
                                        {cert.credentialUrl && (
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300 mt-2"
                                            >
                                                View Credential
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </GlassSurface>
                        ))}
                    </div>
                )}

                {/* Actuarial Exam Progress - uncomment when you have exams to show */}
                {/* {actuarialExams.length > 0 && (
                    <GlassSurface className="p-6 hover-glow" borderRadius={16}>
                        <h3 className="text-lg font-semibold text-white mb-4">Actuarial Exam Progress</h3>
                        <div className="flex flex-wrap gap-3">
                            {actuarialExams.map((exam, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                                        exam.status === "passed"
                                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                    }`}
                                >
                                    {exam.exam} {exam.status === "passed" ? "✓" : "📖"}
                                </span>
                            ))}
                        </div>
                    </GlassSurface>
                )} */}
            </div>
        </section>
    );
}
