import Score from '../score/score';
import Status from '../status/status';
import TeamCard from '../teamCard/teamCard';

import arrow from '../../../assets/arrow.svg';

import style from './matchCard.module.scss';
import { useState } from 'react';
import TeamStatistic from '../teamStatistic/teamStatistic';

function MatchCard (props) {

    const { match } = props

    console.log(match);

    const { isOpen, setIsOpen } = useState(true)

    return (
            <li  className={style.matchCard}>
                <div className={style.matchPreview}>
                    <div className={style.matchInfoWrap}>
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
                    <button className={style.btnWrap}>
                        {/* BtnUP-Down */}
                        <img className={style.img} src={arrow} alt={'Open/Closw match info'} />
                    </button>
                </div>
                <div className={isOpen ? style.cardFooterWrap : style.cardFooterWrapClosed}>
                    <div className={style.statisticWrap}>
                        <TeamStatistic team={match.awayTeam} />
                    </div>

                    <div className={style.statisticWrap}>
                        <TeamStatistic team={match.homeTeam} />
                    </div>
                </div>
            </li>
            )
}

export default MatchCard