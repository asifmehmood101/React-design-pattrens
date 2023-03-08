import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
export function Listings({ listings }: any) {
  return (
    <ListingsGrid>
      {listings?.listings.map((listing: any) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
