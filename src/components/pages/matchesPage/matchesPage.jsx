import MatchCard from '../../ui/matchCard/matchCard';

import style from './matchesPage.module.scss';

function MatchesPage (props) {

    const {matches} = props 
    console.log(matches);

    return (<>
            <ul className={style.matchesPage}>
                {/* {props.map((i) => i.matches.map((match)=> <MatchCard match={match}></MatchCard> ))} */}
                { matches ? matches.map((match) => <MatchCard key={match.time} match={match}></MatchCard>) : <></>}
            </ul>
    </>)
}

export default MatchesPage