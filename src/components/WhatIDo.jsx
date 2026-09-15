const ITEMS = [
  {
    title: 'Frontend Development',
    text: 'I build responsive and interactive user interfaces using React.js, JavaScript, HTML, CSS and Tailwind CSS.',
  },
  {
    title: 'Backend Development',
    text: 'I develop backend applications and REST APIs using Python, Flask and Node.js.',
  },
  {
    title: 'Database Development',
    text: 'I work with SQL databases, design schemas, write queries and connect applications to databases.',
  },
  {
    title: 'Full-Stack Development',
    text: 'I connect frontend applications with backend APIs and databases to create complete web applications.',
  },
];

const WhatIDo = () => (
  <section id="what-i-do">
    <div className="container">
      <span className="section-kicker">What I Do</span>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        How I Can Help
      </h2>

      <div className="what-i-do-grid">
        {ITEMS.map((item) => (
          <div className="card what-i-do-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
