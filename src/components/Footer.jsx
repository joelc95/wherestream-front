import React from 'react'
import { BsGithub } from 'react-icons/bs'
import tmdbLogo from '../assets/tmdb-blueshort.svg'

export default function Footer() {
	return (
		<div className='text-slate-100 w-full h-20 mt-4 flex justify-around align-middle'>
			<a href="https://github.com/joelc95" className="flex gap-2 items-center text-lg hover:text-green-300 font-extrabold github-link" target='_blank'><BsGithub />Built by Joel</a>
			<a href="https://themoviedb.org" className="flex tmdb-logo items-center text-slate-500" target="_blank">API provided by &nbsp;<img src={tmdbLogo} alt="The Movie DB Logo" className='w-[200px]'/></a>
		</div>
	)
}
