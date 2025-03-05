import avatar from '../../../assets/avatar.png';

import style from './userCard.module.scss'

function UserCard (props) {

    const { user } = props

    return (
        <div className={style.userCard}>
            <div className={style.userProfileWrap}>
                <div className={style.imgWrap}>
                    <img className={style.img} src={avatar} alt={''} />
                </div>
                <p className={style.userName}>{user.username}</p>
            </div>
            <div className={style.userStatisticWrap}>
                <p className={style.text}>Убийств: <span className={style.killCount}>{user.kills}</span></p>
            </div>
        </div>
    )
}

export default UserCard