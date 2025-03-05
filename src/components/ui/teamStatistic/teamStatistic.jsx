import UserCard from '../userCard/userCard';

import style from './teamStatistic.module.scss'

function TeamStatistic (props) {
    const { team } = props

    return (
        <div className={style.teamStatistic}>
            <ul className={style.usersWrap}>
                {team.players.map((player) => <div className={style.userWrap}><UserCard key={player.userName} user={player}/></div>)}
            </ul>
            <div className={style.pointsWrap}>
                <div className={style.statisticWrap}>
                    <p className={style.text}>Points:<span className={style.number}>{`${team.points > 0 ? '+' : ''}${team.points}`}</span></p>
                </div>
                <div className={style.statisticWrap}>
                    <p className={style.text}>Место:<span className={style.number}>{team.place}</span></p>
                </div>
                <div className={style.statisticWrap}>
                    <p className={style.text}>Всего убийств:<span className={style.number}>{team.total_kills}</span></p>
                </div>
            </div>
        </div>
    )
}

export default TeamStatistic