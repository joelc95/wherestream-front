import React from 'react'
import Logo from '../logo-transparent.svg'

export default function Header() {
	return (
		<div className='flex justify-between p-5'>
			<span ><a className='flex flew-row gap-1' href="."><h1 className="text-3xl font-bold font-mono text-green-300">wherestream</h1>
			<img src={Logo} alt="logo" className='h-10'/></a></span>
		</div>
	)
}
