const ServiceCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="relative card card-compact shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="absolute z-10 top-2 left-10 bg-black text-white px-5 text-xl font-bold rounded-xl">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end my-2">
          <button className="btn text-yellow-600 border-b-4 uppercase border-0 hover:bg-black  border-yellow-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
