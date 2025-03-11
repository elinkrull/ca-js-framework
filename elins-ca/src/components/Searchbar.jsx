export default function Searchbar() {
	return (
		<>
			<form className="search-container" 	action="search-results.html" method="GET">
       			<input type="text" name="query" placeholder="Search..." required></input>
       			 <button type="submit">🔍</button>
  			</form>
		</>
	)
};