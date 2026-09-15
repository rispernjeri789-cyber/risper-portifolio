const GITHUB_URL = 'https://github.com/rispernjeri789-cyber';
const EMAIL = 'rispernjeri789@gmail.com';
const PHONE = '0718660597';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>&copy; {new Date().getFullYear()} Risper Njeri. All Rights Reserved.</p>
      <ul className="footer-links">
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </li>
        <li>
          <a href={`tel:+254${PHONE.slice(1)}`}>{PHONE}</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
