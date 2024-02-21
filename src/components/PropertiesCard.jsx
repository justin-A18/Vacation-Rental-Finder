import PropTypes from 'prop-types';

export const PropertiesCard = ({ property }) => {
	const { people, bedroom } = property.capacity;

	return (
		<article className='relative border-2 border-[#4A5567] rounded-lg'>
			<header>
				<img
					className='w-full object-cover h-auto rounded-t-md'
					src={property.image}
					alt={property.title}
				/>
				{property.superhost ? (
					<p className='bg-[#20293A] p-2 rounded-md flex items-center gap-2 text-white absolute top-2 left-2'>
						Superhost
						<i className='bx bxs-star text-yellow-400'></i>
					</p>
				) : (
					''
				)}
			</header>
			<div className='p-4 flex flex-col gap-3 text-white'>
				<h3 className='font-medium'>{property.title}</h3>
				<p className='text-[#727D8F] text-sm'>{property.description}</p>
				<footer className='flex items-center gap-4'>
					<div className='flex items-center gap-2 text-[#727D8F]'>
						<i className='bx bxs-building-house'></i>
						<small>{bedroom} bedroom</small>
					</div>
					<div className='flex items-center gap-2 text-[#727D8F]'>
						<i className='bx bx-user'></i>
						<small>{people} guest</small>
					</div>
				</footer>
			</div>
			<footer className='p-4 flex justify-between border-t-2 border-[#4A5567] text-white text-lg'>
				<p>
					${property.price} <small className='text-[#727D8F]'>/night</small>
				</p>
				<p className='flex items-center gap-2'>
					<i className='bx bxs-star text-yellow-400'></i>
					{property.rating}
				</p>
			</footer>
		</article>
	);
};

PropertiesCard.propTypes = {
	property: PropTypes.object.isRequired,
};
