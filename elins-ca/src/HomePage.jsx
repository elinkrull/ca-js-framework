import Searchbar from "./components/Searchbar"
import Product from "./components/Product"
//import image from images

export default function Homepage() {

	//API URL
const urlOnlineShop = "https://v2.api.noroff.dev/online-shop"

//API call
async function getOnlineProducts() {
    const response = await fetch(urlOnlineShop);
    const result = await response.json();
	return result;
};

console.log(getOnlineProducts());

    return (
        <main className="homepage">
			<Searchbar />
            <h1>This page should display a list of all products</h1>
			<div className="products">
				<Product 
					title="This is a title"
					description="This is a description"
					image="an image here"
					//image={}
					reviews="This is reviews"
				/>
			</div>
        </main>
    )
}