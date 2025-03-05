import { useState } from 'react';

import Score from '../score/score';
import Status from '../status/status';
import TeamCard from '../teamCard/teamCard';
import TeamStatistic from '../teamStatistic/teamStatistic';

import arrow from '../../../assets/arrow.svg';

import style from './matchCard.module.scss';

function MatchCard (props) {

    const { match } = props

    const [isOpen, setIsOpen ] = useState(false)

    function handleIsOpen () {
        setIsOpen(!isOpen)
    }

    return (
            <li  className={style.matchCard}>
                <div className={style.matchPreview} onClick={handleIsOpen}>
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
                    <button className={isOpen? style.btnWrap : style.btnWrapUp}>
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