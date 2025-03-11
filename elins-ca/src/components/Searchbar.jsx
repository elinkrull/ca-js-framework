// export default function Searchbar() {
// 	return (
// 		<>
// 			<form className="search-container" 	action="search-results.html" method="GET">
//        			<input type="text" name="query" placeholder="Search..." required></input>
//        			 <button type="submit">🔍</button>
//   			</form>
// 		</>
// 	)
// };

export default function Searchbar({ setSearchQuery }) {
	return (
	  <form className="search-container" onSubmit={(e) => e.preventDefault()}>
		<input
		  type="text"
		  name="query"
		  placeholder="Search..."
		  onChange={(e) => setSearchQuery(e.target.value)}
		/>
		<button type="submit">🔍</button>
	  </form>
	);
  }
  