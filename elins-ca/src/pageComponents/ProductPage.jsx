import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ProductPage() {

  const { id } = useParams(); // Get the product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const result = await response.json();
        setProduct(result.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <main>
		<Header />
		< main className="products">
			<div className="product-card">
					<img 
						className="product-image"
						src={product.image.url} 
						alt={product.title}
					/>
      				<h1 className="product-title" >{product.title}</h1>
	 			<div className="info-container">
					<p>{product.description}</p>
				</div>
				<div className="info-container">
  				{product.discountedPrice < product.price ? (
   				<>
    				<p className="original-price"><s>Price: ${product.price}</s></p>
					<p className="discounted-price">Discounted Price:${product.discountedPrice}</p>
    			</>
  				) : (
					<p className="regular-price">Price: ${product.price}</p>
  				)}
				</div>
	  			<div className="info-container">
					<button className="add-to-cart-button">Add to cart</button>
				</div>
			</div>
			</main>
	  	<Footer />
	</main>
  );
}
