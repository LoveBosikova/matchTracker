import loader from '../../../assets/refresh.svg'

import style from './button.module.scss';

function Button (props) {
    return (
        <button className={style.button}>
                <p className={style.text}>Обновить</p>
                <div className={style.imgWrap}>
                    <img className={style.img} src={loader}></img>
                </div>
        </button>
    )
}

export default Button