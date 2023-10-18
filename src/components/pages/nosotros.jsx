export const AboutUs = () => {
  const aboutUs = [
    {
      title: 'Misión',
      text: `Somos una empresa con proyección regional, sólida y sostenible;
    producimos, y comercializamos productos piscícolas de agua dulce
    entre los cuales tenemos Bocachico, Cachama; productos
    agropecuarios y del campo de excelente calidad e higiene, para
    brindar el más alto grado de satisfacción a nuestros clientes y
    garantizar un óptimo nivel de rentabilidad para nuestra
    Asociación.`,
    },
    {
      title: 'Visión',
      text: `Para el año 2025 nos convertiremos en una de las principales
    empresas piscícolas y agropecuarias de la región, llevando a
    disposición de nuestra distinguida clientela productos de
    excelente calidad, con valor agregado y responsabilidad con el
    medio ambiente; generadora desarrollo y empleo para nuestra
    asociación y la comunidad.`,
    },
  ];

  return (
    <>
      <section className="text-gray-800 body-font">
        {aboutUs.map((item, i) => (
          <div
            key={i}
            className="container p-5 my-5 mx-auto rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden"
          >
            <span className="bg-indigo-500 text-white px-3 py-2 tracking-widest text-lg absolute top-0 rounded-bl">
              {item.title}
            </span>
            <div className="container px-5 py-3 mt-5 mx-auto text-lg bg-gray-200 rounded-lg">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <p className="leading-relaxed text-lg">{item.text}</p>
                <span className="inline-block h-1 w-20 rounded bg-indigo-500"></span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
