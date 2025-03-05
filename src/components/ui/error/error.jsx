import errorImg from '../../../assets/alert-triangle.png';

import style from './error.module.scss';

function Error (props) {
    return (
        <div className={style.error}>
            <div className={style.imgWrap}>
                <img className={style.img} src={errorImg} alt='Error data loading' />
            </div>
            <p className={style.text}>Ошибка: не удалось загрузить информацию</p>
        </div>
    )
}

export default Error;
