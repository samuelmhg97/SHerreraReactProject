import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-white text-sm">
              &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Términos y condiciones
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Política de privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
