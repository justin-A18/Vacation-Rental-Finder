import { useContext } from 'react';
import { PropertiesContext } from '../context/PropertiesContext';

export const HeaderFilters = () => {
	const { handleLocation, handleSuperhost, handleType, location } =
		useContext(PropertiesContext);

	return (
		<header className='absolute p-8 w-[90%] top-[-3rem] bg-[#1F2739] bg-opacity-95 text-white rounded-2xl mx-auto border-2 border-[#434D5F]'>
			<nav className='flex w-full min-w-20 flex-wrap justify-center lg:justify-between gap-9 font-medium'>
				<ul className='flex flex-wrap justify-center items-center gap-6'>
					<li
						className={`hover:bg-[#4A5567] p-2 rounded-lg cursor-pointer transition-all duration-300 ${
							location === 'all' ? 'bg-[#4A5567]' : 'bg-transparent'
						}`}
						onClick={() => handleLocation('all')}>
						All Stays
					</li>
					<li
						className={`hover:bg-[#4A5567] p-2 rounded-lg cursor-pointer transition-all duration-300 ${
							location === 'Norway' ? 'bg-[#4A5567]' : 'bg-transparent'
						}`}
						onClick={() => handleLocation('Norway')}>
						Norway
					</li>
					<li
						className={`hover:bg-[#4A5567] p-2 rounded-lg cursor-pointer transition-all duration-300 ${
							location === 'Finland' ? 'bg-[#4A5567]' : 'bg-transparent'
						}`}
						onClick={() => handleLocation('Finland')}>
						Finland
					</li>
					<li
						className={`hover:bg-[#4A5567] p-2 rounded-lg cursor-pointer transition-all duration-300 ${
							location === 'Sweden' ? 'bg-[#4A5567]' : 'bg-transparent'
						}`}
						onClick={() => handleLocation('Sweden')}>
						Sweden
					</li>
					<li
						className={`hover:bg-[#4A5567] p-2 rounded-lg cursor-pointer transition-all duration-300 ${
							location === 'Switzerland' ? 'bg-[#4A5567]' : 'bg-transparent'
						}`}
						onClick={() => handleLocation('Switzerland')}>
						Switzerland
					</li>
				</ul>

				<div className='flex items-center gap-6'>
					<label className='flex items-center gap-3'>
						<div className='switch w-[4rem] h-[2.2rem] rounded-[1rem] relative'>
							<input
								type='checkbox'
								className='opacity-0 invisible'
								onChange={handleSuperhost}
							/>
							<span className='group-checkbox-span absolute w-full h-full top-0 left-0 rounded-[1rem] bg-[#c9c9c9] transition-all duration-300 before:content-[""] before:bg-white before:block before:w-[1.8rem] before:h-[1.8rem] before:rounded-full before:absolute before:top-[3px] before:left-[5px] before:transition-all before:duration-300'></span>
						</div>
						<span>Superhost</span>
					</label>

					<label>
						<select
							className='bg-transparent border-2 border-[#434D5F] rounded-lg w-40 p-3'
							onChange={handleType}>
							<option disabled>Property type</option>
							<option value='all'>All options</option>
							<option value='1'>1 Bedroom</option>
							<option value='2'>2 Bedroom</option>
						</select>
					</label>
				</div>
			</nav>
		</header>
	);
};
