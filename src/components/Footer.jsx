export default function Footer() {
  return (
    <footer className="site-footer" data-reveal>
      <p>
        © {new Date().getFullYear()} Julius Kasanga{" "}
        <span className="footer-alias">:: stoic</span>
      </p>
    </footer>
  );
}
