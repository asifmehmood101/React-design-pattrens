import React from 'react';
import { useFetch } from '../components/Custom Hook/useFetch';
export const FetchingContext = React.createContext([]);

export const FetchingProvider = ({ children }) => {
  const data = useFetch('https://house-lydiahallie.vercel.app/api/listings');
  return (
    <FetchingContext.Provider value={data}>{children}</FetchingContext.Provider>
  );
};
