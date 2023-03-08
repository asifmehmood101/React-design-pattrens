import './App.css';
import ContainerListing from './components/container/ContainerListings';
import withLoader from './components/HOC/withLoader';
import {
  Kelvin,
  TemperatureConverter,
  Fahrenheit,
} from './components/Render Props Pattern/TemperatureConverter';
import './style.css';
import { FetchingContext, FetchingProvider } from './Context/Fetching';
export const ListingHOC = withLoader(
  ContainerListing,
  'https://house-lydiahallie.vercel.app/api/listings',
);

function App() {
  return (
    <FetchingProvider>
      <TemperatureConverter
        Kelvin={({ value }: any) => <Kelvin value={value} />}
        Fahrenheit={({ value }: any) => <Fahrenheit value={value} />}
      />
      <ContainerListing />
    </FetchingProvider>
  );
}

export default App;
