import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { PropertiesProvider } from './context/PropertiesProvider.jsx';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<PropertiesProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</PropertiesProvider>
);
