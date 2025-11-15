import './Header.css';

const Header = () => {
  return (
    <div 
      className="header"
      style={{
        backgroundImage: 'url(/Header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="header-content">
        <h1>¡Pizzería Mamma Mía!</h1>
        <p>¡Tenemos las mejores pizzas que podrías encontrar!</p>
      </div>
    </div>
  );
};

export default Header;
