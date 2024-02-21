import { useEffect, useState } from 'react';
import { PropertiesContext } from './PropertiesContext';
import PropTypes from 'prop-types';
import getProperties from '../helpers/getProperties';

export const PropertiesProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [originalData, setOriginalData] = useState([]);
	const [superHost, setSuperHost] = useState(true);
	const [location, setLocation] = useState('all');

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await getProperties();
				setData(result);
				setOriginalData(result);
			} catch (error) {
				console.error(error);
			}
		};
		getData();
	}, []);

	const handleLocation = (loc) => {
		setLocation(loc);
		if (loc === 'all') {
			setData(originalData);
		} else {
			const locations = originalData.filter((item) => item.location === loc);
			setData(locations);
		}
	};

	const handleSuperhost = () => {
		setSuperHost(!superHost);

		if (superHost) {
			const superhost = originalData.filter(
				(item) => item.superhost === superHost
			);
			setData(superhost);
		} else {
			setData(originalData);
		}
	};

	const handleType = (e) => {
		if (e.target.value === 'all') {
			setData(originalData);
		} else {
			const types = originalData.filter(
				(item) => item.capacity.bedroom === parseInt(e.target.value)
			);
			setData(types);
		}
	};
	return (
		<PropertiesContext.Provider
			value={{ data, location, handleLocation, handleSuperhost, handleType }}>
			{children}
		</PropertiesContext.Provider>
	);
};

PropertiesProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
