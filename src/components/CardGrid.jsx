import { MovieCard } from "./MovieCard"

export const CardGrid = ({ searchResults, loading }) => {
	return(
		<div className="flex flex-wrap justify-center gap-4 pt-8 min-h-[30vh]">
			{loading ? <p className=" flex loading-text text-lg font-bold text-green-300">Loading<div class="ellipsis"><p>.</p><p>.</p><p>.</p></div></p> : searchResults.map((item, index) => {
				return (
					<MovieCard item={item} index={index} />
				)
			})}
		</div>
	)
}

