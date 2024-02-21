import { useContext } from 'react';
import { HeaderFilters } from './components/HeaderFilters';
import { HeaderHero } from './components/HeaderHero';
import { PropertiesCard } from './components/PropertiesCard';
import { PropertiesContext } from './context/PropertiesContext';
export const App = () => {
	const { data } = useContext(PropertiesContext);

	return (
		<>
			<HeaderHero />
			<main className='w-full min-h-screen max-w-[1200px] py-20 mx-auto relative flex flex-col items-center'>
				<HeaderFilters />

				<section className='pt-40 sm:pt-28 lg:pt-8 w-[90%] flex flex-col gap-6'>
					<h2 className='text-2xl text-white font-medium'>Over 200 stays</h2>

					<div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 place-content-center w-full'>
						{data.map((item) => (
							<PropertiesCard
								key={item.id}
								property={item}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
};
