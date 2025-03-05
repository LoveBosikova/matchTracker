import avatar from '../../../assets/avatar.png';

import style from './userCard.module.scss'

function userCard (props) {
    const { team, flexReverse } = props

    // console.log(team);
    return (
        <div className={style.userCard}>
            <div className={style.imgWrap}>
                <img className={style.img} src={logo} alt={team.name} />
            </div>
            <p className={style.text}>{team.name}</p>
        </div>
    )
}

export default TeamCard