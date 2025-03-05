import './App.scss'

import { useGetMatches } from './redux/slices/matchesSlice';

function App() {

  const { data, error, isLoading } = useGetMatches();
  console.log(data, error, isLoading);

  return (
    <>
    </>
  )
}

export default App
