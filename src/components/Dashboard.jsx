import React, { useState, useEffect } from 'react'
import { SearchBar } from './SearchBar';
import { CardGrid } from './CardGrid';
import { PiTelevisionBold } from 'react-icons/pi'
import { FaFilm } from 'react-icons/fa6'

export default function Dashboard() {
	const [tvOrMovie, setTvOrMovie] = useState('movie');
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [welcome, setWelcome] = useState(true);

	const tvOrMovieHandler = () => {
		if(tvOrMovie === 'movie') {
			setTvOrMovie('tv')
		} else {
			setTvOrMovie('movie')
		}
	}

	return (
		<>
			<div className='flex justify-center'>
				{/* <ModeButton tvOrMovieHandler={tvOrMovieHandler}/> */}
				<div onClick={tvOrMovieHandler} className="flex cursor-pointer bg-slate-800 text-slate-100 border-green-300 border border-r-0 h-16 w-16 sm:w-32 rounded-l-2xl hover:bg-slate-700 hover:text-green-300">{ tvOrMovie == 'movie' ? <span className='flex items-center justify-center text-[20px] w-full'><FaFilm className=' scale-110' /><p className='w-fit hidden sm:block'>&nbsp;Movies</p></span> : <span className='flex items-center justify-center text-[20px] w-full'><PiTelevisionBold className='scale-110' /><p className='w-fit hidden sm:block'>&nbsp;TV</p></span> }</div>
				<SearchBar tvOrMovie={tvOrMovie} setSearchResults={setSearchResults} setLoading={setLoading} setWelcome={setWelcome}/>
			</div>
			{ welcome && <WelcomeMessage /> }
			<CardGrid searchResults={searchResults} loading={loading} />
		</>
	)
}

// Functional slider button. Decided to remove for UI simplicity.
const ModeButton = ({ tvOrMovieHandler }) => {
	return (
		<div className='p-2 min-w-[140px]'>
			<input onClick={tvOrMovieHandler} id="checker" type="checkbox" className="input peer !absolute w-px h-px overflow-hidden" />
			<label for="checker" className='label scale-[1.2] h-[44px] w-[90px] cursor-pointer rounded-[22px] bg-white align-middle absolute leading-[44px] after:transition-all after:ease-in-out after:duration-300
									after:content-normal after:absolute after:block after:h-[40px] after:w-[40px] after:top-[2px] after:translate-x-12 after:rounded-[50%] after:bg-slate-300 after:shadow-2xl
									peer-checked:bg-slate-300 peer-checked:after:relative peer-checked:after:translate-x-[2px] peer-checked:after:bg-slate-100 peer-checked:after:shadow-2xl'></label>
		</div>
	)
}

const WelcomeMessage = () => {
	return (
		<div className='flex flex-col items-center p-14 text-slate-100'>
			<h2 className='font-bold text-lg lg:text-md'>Welcome to <i className='text-green-300'><b>wherestream</b></i>!</h2>
			<div className='text-lg lg:text-md text-center'>
				<br />
				<p>Easily find <i className='text-green-300 font-bold'>where</i> in the world you can stream your favourite movies and TV shows 🌍</p>
				<br />
				<p className='text-slate-500'>Once you have found which country a movie is streaming in, change your IP using a VPN service</p>
			</div>
		</div>
	)
}