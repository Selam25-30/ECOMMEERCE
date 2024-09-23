// import React, { createContext, useReducer, useState } from 'react';

// export const DataContext = createContext();

// export const DataProvider = ({ children, reducer, initialState }) => {
// 	const [state, dispatch] = useReducer(reducer, 0);

// 	return (
// 		<DataContext.Provider value={useReducer(reducer, initialState)}>
// 			{children}
// 		</DataContext.Provider>
// 	);
// };

import React, { createContext, useReducer, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
	const [state, dispatch] = useReducer(reducer, 0);

	return (
		<DataContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</DataContext.Provider>
	);
};