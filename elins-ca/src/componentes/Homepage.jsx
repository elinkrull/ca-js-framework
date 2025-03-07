import Searchbar from "./Searchbar"
import Product from "./Product"

export default function Homepage() {
    return (
        <main className="homepage">
			<Searchbar />
            <h1>This page should display a list of all products</h1>
			<div className="products">
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
        </main>
    )
}