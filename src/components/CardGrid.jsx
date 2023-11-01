import { MovieCard } from "./MovieCard"

export const CardGrid = ({ searchResults, loading }) => {
	return(
		<div className="flex flex-wrap justify-center gap-4 pt-8 min-h-[30vh]">
			{loading ? <div className=" flex loading-text text-lg font-bold text-green-300">Loading<div class="ellipsis"><p>.</p><p>.</p><p>.</p></div></div> : searchResults.map((item, index) => {
				return (
					<MovieCard item={item} key={index} />
				)
			})}
		</div>
	)
}

