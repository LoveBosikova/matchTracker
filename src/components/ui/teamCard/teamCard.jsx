import logo from '../../../assets/team.png';

// import style from './teamCard';

import style from './teamCard.module.scss'

function TeamCard (props) {
    const { team, flexReverse } = props

    // console.log(team);
    return (
        <div className={flexReverse? style.teamCardReverse : style.teamCard}>
            <div className={style.imgWrap}>
                <img className={style.img} src={logo} alt={team.name} />
            </div>
            <p className={style.text}>{team.name}</p>
        </div>
    )
}

export default TeamCard