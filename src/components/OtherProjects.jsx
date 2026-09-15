const GITHUB_PROFILE = 'https://github.com/rispernjeri789-cyber';

const PROJECTS = [
  {
    title: 'Safari Tour & Travel Platform',
    summary:
      'A full-stack platform for browsing safari tours, managing favorites, making bookings and leaving reviews.',
    tech: ['React.js', 'Flask', 'Python', 'SQLite'],
  },
  {
    title: 'Hospital Appointment System',
    summary:
      'A patient-facing appointment system with protected routes, a user dashboard and doctor/appointment management.',
    tech: ['React.js', 'React Router', 'REST API', 'SQLite'],
  },
  {
    title: 'Python Full-Stack Group Project',
    summary:
      'A collaborative team project with authentication, CRUD operations and a REST API connecting frontend to database.',
    tech: ['Python', 'Flask', 'React.js', 'SQL'],
  },
];

const OtherProjects = () => (
  <section id="other-projects">
    <div className="container">
      <span className="section-kicker">Other Projects</span>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        More Things I've Built
      </h2>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article className="card project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span className="pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <a
              className="btn btn-secondary"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OtherProjects;
