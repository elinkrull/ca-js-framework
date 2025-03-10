export default function Product({ image, title, description, review}) {

function onAddToCartButtonClick() {
	console.log("Button Clicked");
}

	return (
			<div className="product-card">
				<img 
					className="product-image"
					src={image} 
					alt="product image" 
				/>
				<h2>{title}</h2>
				<div className="info-container">
					<p>{description}</p>
				</div>
				<div className="info-container">
					<button className="add-to-cart-button" onClick={onAddToCartButtonClick}>Add to cart</button>
				</div>
				<div className="info-container">
					<p>{review}</p>
				</div>
			</div>
	)
}

// const product = {
//     title: "#",
//     description: "Mr. Whiskerson",
//     image: "(800) 555-1234",
//     reviews: "mr.whiskaz@catnap.meow"
// }

// const {image, title} = product
// console.log(title)
