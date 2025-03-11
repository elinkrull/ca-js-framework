import Searchbar from "../components/Searchbar"
import Product from "../components/Product"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//import image from images

export default function HomePage() {

//API URL
const urlOnlineShop = "https://v2.api.noroff.dev/online-shop"

const [products, setProducts] = useState([]); //store the API response

useEffect(() => {

	const fetchData = async () => {
		try {
		  const response = await fetch(urlOnlineShop); // Replace with your API URL
		  const result = await response.json(); // Convert response to JSON
		  console.log(result); // Log the data to check structure
	
		     // Check if result contains a 'data' key
			 if (result && result.data) {
				setProducts(result.data); // Save the products in state
			  } else {
				console.error("Unexpected API response format:", result);
			  }
			} catch (error) {
			  console.error("Error fetching data:", error);
			}
		  };

	fetchData();
}, []);

    return (
        <main className="homepage">
			<Header />
			<Searchbar />
			<div className="products">
				{products.length > 0? (
					products.map((product) => (
				<Product 
				key={product.id}
				image={product.image.url}
				title={product.title}
				description={product.description}
				reviews="Reviews here"
				price={product.price}
				discountedPrice={product.discountedPrice}
				/>
			))
		  ) : (
			<p>Loading products...</p>
		  )}
			</div>
			<Footer />
        </main>
    );
}