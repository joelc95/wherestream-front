import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi"

export const SearchBar = ({ tvOrMovie, setSearchResults, setLoading, setWelcome }) => {
	const [input, setInput] = useState('');
	
	const inputHandler = (e) => {
		setInput(e.target.value)
	}
	// Search for TV or Movies based on input
	// let url = `https://api.themoviedb.org/3/search/${tvOrMovie}?query=${input}&include_adult=false&language=en-US&page=1`;
	const searchMovie = async () => {
		// If no input return
		if(!input){return}
		setWelcome(false)
		setLoading(true)
		try {
			// Send request to my back end private API call
			let res = await fetch(`https://wherestream.onrender.com/${tvOrMovie}/${input}`)
			let json = await res.json()
			setSearchResults(json.results)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		searchMovie()
	}, [tvOrMovie])
	return (
		<div className="flex">
			<input onKeyDown={(e) => {
				if(e.key==='Enter') {
					searchMovie()
				}
			}} 
			onChange={inputHandler}
			placeholder="search"
			className="text-slate-100 border-green-300 border-l-slate-700 border-r-slate-700 border bg-slate-800 focus:bg-slate-700 focus:outline-none p-3 lg:w-[250px]"></input>
			<button className="flex items-center justify-center h-16 w-20 bg-slate-800 text-slate-100 border-green-300 border border-l-0 rounded-r-2xl text-[32px] hover:bg-slate-700 hover:text-green-300" onClick={searchMovie}><BiSearch /></button>
		</div>
	)
}