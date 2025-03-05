import logo from '../../../assets/team.png';

// import style from './teamCard';

import style from './teamStatistic.module.scss'

function TeamStatistic (props) {
    const { team } = props

    // console.log(team);
    return (
        <div className={style.teamStatistic}>
            <ul className={style.usersWrap}>

            </ul>
            <div className={style.piontsWrap}>
                
            </div>
        </div>
    )
}

export default TeamStatistic