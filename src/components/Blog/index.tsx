import SectionTitle from "../Common/SectionTitle";



const Blog = () => {
  return (
    <section
    id="productos"
    className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
  >
    <div className="container">
      <SectionTitle
        title="Nuestros Productos"
        paragraph="Descubre nuestra selección de productos y accesorios de alta calidad para tus dispositivos Apple."
        center
      />
  
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-8 xl:grid-cols-3">
        {/* Card 1 */}
        <div className="w-full bg-white rounded-lg shadow-lg p-5 dark:bg-gray-dark">
          <div className="relative mb-4">
            <img src="/images/product1.jpg" alt="Producto 1" className="w-full h-56 object-cover rounded-md" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Reparación de Pantalla</h3>
          <p className="text-sm text-body-color dark:text-gray-300">Reparación profesional de pantallas de iPhone y iPad.</p>
          
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
            Ver detalles
          </button>
        </div>
  
        {/* Card 2 */}
        <div className="w-full bg-white rounded-lg shadow-lg p-5 dark:bg-gray-dark">
          <div className="relative mb-4">
            <img src="/images/product2.jpg" alt="Producto 2" className="w-full h-56 object-cover rounded-md" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Cargador Inalambrico</h3>
          <p className="text-sm text-body-color dark:text-gray-300">Cargador inalámbrico para todos los modelos de iPhone.</p>
         
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
            Ver detalles
          </button>
        </div>
  
        {/* Card 3 */}
        <div className="w-full bg-white rounded-lg shadow-lg p-5 dark:bg-gray-dark">
          <div className="relative mb-4">
            <img src="/images/product3.jpg" alt="Producto 3" className="w-full h-56 object-cover rounded-md" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Funda de Silicona</h3>
          <p className="text-sm text-body-color dark:text-gray-300">Funda de silicona para iPhone, protección y estilo.</p>
          
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Blog;
