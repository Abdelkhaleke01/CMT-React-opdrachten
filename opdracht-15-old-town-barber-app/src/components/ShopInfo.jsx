const ShopInfo = () => {
  const services = [
    { name: 'Haar knippen', price: 25, duration: '30 min' },
    { name: 'Baard trimmen', price: 15, duration: '15 min' },
    { name: 'Haar + Baard', price: 35, duration: '45 min' },
    { name: 'Wassen & Stylen', price: 20, duration: '20 min' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Old Town Barber</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Openingstijden</h3>
        <p>Ma - Vr: 9:00 - 18:00</p>
        <p>Za: 8:00 - 16:00</p>
        <p>Zo: Gesloten</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Onze Services</h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex justify-between border-b pb-2">
              <span>{service.name} ({service.duration})</span>
              <span>€{service.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopInfo;