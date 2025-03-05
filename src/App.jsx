import './App.scss'
import Header from './components/layout/header/header';
import MatchesPage from './components/pages/matchesPage/matchesPage';

import { useGetMatches } from './redux/slices/matchesSlice';

function App() {

  const { data, error, isLoading } = useGetMatches();
  console.log(data, error, isLoading);

  return (
    <>
    {error ? (
            <></>
        ) : isLoading ? (
            <></>
        ) : data ? 
        <>
          <Header /> 
          <MatchesPage matches={data.data.matches}/>
        </>
        : 
        <div></div> }
    </>
  )
}

export default App
