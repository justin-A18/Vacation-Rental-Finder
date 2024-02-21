export const HeaderHero = () => {
	return (
		<header className='w-full h-screen relative flex items-center'>
			<div className='absolute w-full h-full bg-hero-img bg-center bg-cover z-[-1]'></div>
			<div className='px-4 sm:px-20 md:px-36 md:py-14 h-96 flex flex-col gap-5'>
				<h1 className='text-black text-5xl sm:text-6xl font-bold flex gap-3 flex-col'>
					<span>Peace, nature</span>
					<span>dream</span>
				</h1>

				<p className='text-2xl'>Find and book a great experience.</p>
			</div>
		</header>
	);
};
