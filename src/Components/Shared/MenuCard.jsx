const MenuCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="flex space-x-2">
        <div>
          <img
            className="w-48 rounded-tr-full rounded-b-full"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <h3 className="text-xl md:text-2xl uppercase font-light">
              {name}---
            </h3>
            <p className="text-xs md:text-lg">{recipe}</p>
          </div>
          <p className="text-xl text-yellow-500"> ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
