import Button from "./Button";

const ProductCard = ({ id, title, description, image, price, category }) => {
  return (
    <div className="card flex flex-col max-w-sm flex-grow h-[500px] bg-base-200 w-[90%] sm:w-[40%] lg:w-72 xl:w-96 shadow-md dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800">
      <figure className="h-[200px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body gap-4">
        <h2 className="card-title">{title}</h2>
        <p className="h-[75px] overflow-y-scroll flex-grow text-pretty leading-relaxed">
          {description}
        </p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-xl badge-neutral rounded-sm">
            R{price}
          </div>
          <Button
            title={"Enquire"}
            to={`/contact/${id}`}
            state={{
              productId: id,
              productTitle: title,
              productDiscription: description,
              productImage: image,
              productPrice: price,
              productCategory: category,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
