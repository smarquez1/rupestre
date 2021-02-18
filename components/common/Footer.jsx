const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <h1>Contacto</h1>

        <p className="block">
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-pin"></i>
            </span>
            <span>Mar del Plata, Argentina</span>
          </span>
        </p>

        <p className="block">
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-email"></i>
            </span>
            <span>lucas@rupestrehuevos.com</span>
            {/* <span>contacto@rupestrehuevos.com</span> */}
          </span>
        </p>

        <p className="block">
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>
            <span>+(123) 456-7890-456-7890 </span>
          </span>
        </p>

        <p className="block">
          <a className="icon">
            <i className="fas fa-linked-in"></i>
          </a>
        </p>

        <p className="block">
          <a className="icon">
            <i className="fas fa-instagram"></i>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
