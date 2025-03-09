import Searchbar from "./components/Searchbar"
import Product from "./components/Product"
import { urlOnlineShop } from "./components/api";
import { useEffect, useState } from "react";
//import image from images

export default function Homepage() {
	const [data, setData] = useState([]); //store the API response

useEffect(() => {

	const fetchData = async () => {
		try {
		  const response = await fetch(urlOnlineShop); // Replace with your API URL
		  const result = await response.json(); // Convert response to JSON
		  console.log(result); // Log the data to check structure
		  setData(result); // Save the data in state
		} catch (error) {
		  console.error("Error fetching data:", error);
		}
	  };

	fetchData();
}, []);

    return (
        <main className="homepage">
			<Searchbar />
			<div className="products">
				<Product 
					id={data.id}
					title={data.title}
					description={data.description}
					image={data.image}
					reviews={data.reviews}
				/>
					<Product 
					id={data.id}
					title={data.title}
					description={data.description}
					image={data.image}
					reviews={data.reviews}
				/>
			</div>
        </main>
    )
};