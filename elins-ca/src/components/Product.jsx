export default function Product(props) 
{
	return (
			<div className="product-card">
				<img 
					className="product-image"
					src={props.image} 
					alt="product image" 
				/>
				<h2>{props.title}</h2>
				<div className="info-container">
					<p>{props.description}</p>
				</div>
				<div className="info-container">
					<button>View product</button>
				</div>
				<div className="info-container">
					<p>{props.reviews}</p>
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
