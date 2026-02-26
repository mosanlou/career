


export default function ProductCard({ product, onPlay }) {
  return (
    <article className="product">
      <img src={product.image} alt={product.title} />
      <div className="product-content">
        <div>
          <h3>{product.title}</h3>
          <strong className="product-price">
            Salary: ${product.price.toLocaleString()}
          </strong>
          <p>{product.description}</p>
        </div>

        <p className="product-actions">
          <button onClick={() => onPlay(product.video)}>More Info</button>
        </p>
      </div>
    </article>
  );
}
