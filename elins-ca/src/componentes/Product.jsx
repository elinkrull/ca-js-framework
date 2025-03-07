export default function Product() {
	return (
			<div className="product-card">
				<img 
					className="product-image"
					src="#" 
					alt="product image" 
				/>
				<h2>Product Title</h2>
				<div className="info-container">
					<p>Information about the product here</p>
				</div>
				<div className="info-container">
					<p>Price of the product</p>
				</div>
				<div className="info-container">
					<button>Button</button>
				</div>
			</div>
	)
}