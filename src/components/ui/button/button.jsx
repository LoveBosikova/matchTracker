import loader from '../../../assets/refresh.svg'

import { useGetMatches } from '../../../redux/slices/matchesSlice';

import style from './button.module.scss';

function Button () {

    const { refetch, isLoading, isFetching} = useGetMatches();

    console.log(isLoading, isFetching);

    return (
        <button className={style.button} disabled={isFetching} onClick={() => refetch()}>
            <p className={style.text}>Обновить</p>
            <div className={style.imgWrap}>
                <img className={isFetching ? style.imgRotate : style.img} src={loader}></img>
            </div>
        </button>
    )
}

export default Button