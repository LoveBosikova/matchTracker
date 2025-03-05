import style from './score.module.scss';

function Score (props) {

    const { awayScore, homeScore } = props
    return (
        <div className={style.score}>
            <p className={style.text}>{`${awayScore} : ${homeScore}`}</p>
        </div>
    )
}

export default Score