import React from 'react';

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    return <Element {...props} data={data} />;
  };
}
