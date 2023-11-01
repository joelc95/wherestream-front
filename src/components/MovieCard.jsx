import React, { useState } from 'react'

export const MovieCard = ({item, index}) => {
	let [provider, setProvider] = useState('netflix')

	const OpenCardInfo = (e) => {
		let modalWrapper = document.getElementById(e.currentTarget.id).previousElementSibling
		let modal = modalWrapper.firstChild
		modalWrapper.classList.remove('hidden')
		modal.classList.remove('hidden')
		modal.classList.add('animate-openmodal')
	}

	const closeCardInfo = (e) => {
		if(e.target === e.currentTarget) {
			e.currentTarget.firstChild.classList.add('hidden')
			e.currentTarget.classList.add('hidden')
		}
		return
	}

	return (
		<>
			<div onClick={(e) => closeCardInfo(e)} className="card-modal-wrapper top-0 fixed bg-black bg-opacity-50 z-10 h-screen w-full hidden">
				<div className="card-modal fixed shadow-2xl ml-[10vw] mt-[10vh] h-[80vh] w-[80vw] z-20 bg-white hidden rounded-lg">
					<div className="modal-header flex justify-between text-slate-100 bg-slate-800 h-[10%] p-2 rounded-t-lg sm:h-[12%] md:h-[10%]">
						<div>
							<h2 className="w-fit text-lg font-bold">{item.title ? item.title : item.name} ({item.release_date ? item.release_date.slice(0,4) : item.first_air_date ? item.first_air_date.slice(0,4) : '--'})</h2>
							<h4 className="w-fit">Rating: {item.vote_average.toFixed(1)}</h4>
						</div>
						<select onChange={(e) => setProvider(e.target.value)} name="providers" id={`providers-${index}`} className="provider-list end-10 bg-slate-900 border-green-300 border-solid border-2 p-2 rounded-md text-green-300 text-lg font-bold ml-2">
							<option value="netflix">Netflix</option>
							<option value="disneyPlus">Disney+</option>
							<option value="amazonPrime">Amazon Prime</option>
							<option value="freevee">Freevee</option>
							<option value="hboMax">HBO Max</option>
							<option value="paramountPlus">Paramount Plus</option>
							<option value="appleTv">Apple TV</option>
							<option value="skyGo">Sky Go</option>
							<option value="hulu">Hulu</option>
							<option value="crunchyroll">Crunchyroll</option>
							<option value="funimationNow">Funimation Now</option>
							<option value="adultSwim">Adult Swim</option>
							<option value="channel4">Channel 4</option>
							<option value="bfiPlayer">BFI Player</option>
						</select>
					</div>
					<div className="modal-info bg-slate-800 text-slate-100 h-[90%] flex p-2 rounded-b-lg">
						<img className='sm:max-h-[450px] lg:max-h-[550px] m-4 rounded-md' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster not found :/" />
						<div className='min-w-[65%]'>
							<h2 className='text-lg font-bold m-2'>Streaming in:</h2>
							<div id={`regions-container-${index}`} className="flex gap-2 flex-row flex-wrap content-start p-4 overflow-auto bg-slate-900 m-2 rounded-md h-[90%] sm:w-[65%] lg:w-[75%] xl:w-[95%]">
								{item[`${provider}`].length > 0 ?  item[`${provider}`].map((i, index) => {
									return (
										<div key={index} className="region-div inline-flex w-[60px] max-h-[30px] m-0  items-center">
											<img
												className="region-flag max-w-[30px] h-fit"
												alt={i}
												src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${i}.svg`}
											/>
											<p className='region-iso-code m-2'>{i}</p>
										</div>
									)
								}) : <p className='text-lg text-center'>Not available on this streaming service right now... Check another service using the dropdown menu above!</p>}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div onClick={(e) => OpenCardInfo(e)} id={item.id} className="card" key={index} >
				<div className='card-overlay'></div>
					<div className="card-info">
						<h3>{item.title ? item.title : item.name}</h3>
						<p>{item.release_date ? item.release_date.slice(0,4) : item.first_air_date ? item.first_air_date.slice(0,4) : '--'}</p>
						<p>{item.vote_average.toFixed(1)}</p>
					</div>
				<img className="card-image bg-white text-center" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster not found :/" />
			</div>
		</>
	)
}
