import Score from '../score/score';
import Status from '../status/status';
import TeamCard from '../teamCard/teamCard';
import style from './matchCard.module.scss'

function MatchCard (props) {

    const { match } = props

    console.log(match);

    return (
            <li  className={style.matchCard}>
                <div className={style.matchPreview}>
                    <div className={style.teamWrap}>
                        <TeamCard team={match.awayTeam} flexReverse={false}/>
                    </div>
                    <div className={style.mainInfo}>
                        {/*  Score */}
                        <div className={style.scoreWrap}>
                            <Score awayScore={match.awayScore} homeScore={match.homeScore}/>
                        </div>
                        {/*  Status */}
                        <div className={style.statusWrap}>
                            <Status status={match.status} />
                        </div>
                    </div>
                    <div className={style.teamWrap}>
                        <TeamCard team={match.homeTeam} flexReverse={true}/>
                    </div>
                </div>
                <div className={style.btnWrap}>
                    {/* BtnUP-Down */}
                </div>
            </li>
            )
}

export default MatchCard