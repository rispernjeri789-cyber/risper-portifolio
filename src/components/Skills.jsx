const SKILL_GROUPS = [
  {
    title: 'Frontend Development',
    items: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'React Router',
      'Responsive Web Design',
      'Component-Based Development',
      'API Integration',
    ],
  },
  {
    title: 'Backend Development',
    items: [
      'Python',
      'Flask',
      'Node.js',
      'RESTful APIs',
      'Express.js',
      'Authentication',
      'CRUD Operations',
      'Server-Side Development',
    ],
  },
  {
    title: 'Database',
    items: [
      'SQL',
      'SQLite',
      'Database Design',
      'CRUD Operations',
      'Relationships and Queries',
    ],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Postman', 'REST APIs', 'JSON'],
  },
];

const Skills = () => (
  <section id="skills">
    <div className="container">
      <span className="section-kicker">My Skills</span>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        Technologies I Work With
      </h2>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="card skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
