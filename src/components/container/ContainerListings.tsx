import React, { useContext } from 'react';
import { FetchingContext } from '../../Context/Fetching';
import { Listings } from '../presentational/Listings';

export default function ListingsContainerComponent() {
  const data = useContext(FetchingContext);
  console.table(data);
  return <Listings listings={data} />;
}
