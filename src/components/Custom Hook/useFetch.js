import React from 'react';

export const useFetch = (url) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [url]);

  if (!data) return null;

  return data;
};
