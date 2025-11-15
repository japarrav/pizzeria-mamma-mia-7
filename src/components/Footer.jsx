import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          © 2021 - Pizzería Mamma Mía! - Todos los derechos reservados
        </p>
        <p className="mb-0 small text-muted">
          Desarrollado con React y Vite • Desafío Latam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
