import style from './title.module.scss';

function Title (props) {
    const { text } = props;
    return (
        <h1 className={style.title}>{text}</h1>
    )
}

export default Title;
