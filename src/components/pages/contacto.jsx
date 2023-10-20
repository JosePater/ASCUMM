export const Contact = () => {
  const contact = {
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15754.761200180268!2d-75.39250560948456!3d9.182383537019875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e596a4f699f42af%3A0x8c19ce9c1c49e5c2!2zU2FtcHXDqXMsIFN1Y3Jl!5e0!3m2!1ses-419!2sco!4v1697646322704!5m2!1ses-419!2sco',
    email: 'ascumm@gmail.com',
    phone: '310 000 0000',
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src={contact.location}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              frameBorder: '0',
              width: '600',
              height: '450',
              marginHeight: '0',
              marginWidth: '0',
              scrolling: 'no',
            }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">Sampués, Sucre. Colombia</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                CORREO
              </h2>
              <a className="text-indigo-500 leading-relaxed">{contact.email}</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                TÉFONO
              </h2>
              <p className="leading-relaxed">{contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contáctenos
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Contácteneos por este medio o a través de los otros canales de
            comunicación
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};
