import React, { useContext } from 'react';

import { FetchingContext } from '../Context/Fetching';
export default function Input(props) {
  const { data } = useContext(FetchingContext);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <div className='flyout'>
      <input
        onFocus={toggle}
        onBlur={toggle}
        onChange={(e) => setValue(e.target.value)}
        className='flyout-input'
        value={value}
        placeholder='Enter an address, city ,or ZIP code'
        {...props}
      />
      {open && (
        <div className='flyout-list'>
          <ul>
            {data.map((listing) => (
              <li
                key={listing.id}
                onMouseDown={() => {
                  setValue(listing.name);
                }}
                className='flyout-list-item'
              >
                {listing.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
