import Button from '../../ui/button/button';
import Error from '../../ui/error/error';
import Title from '../../ui/title/title';
import style from './header.module.scss';

function Header () {
    return (
        <header className={style.header}>
            <div className={style.logoWrap}>
                <Title text={'Match Tracker'}/>
            </div>
            <div className={style.errorWrap}>
                <Error />
            </div>
            <div className={style.btnWrap}>
                <Button />
            </div>
        </header>

    )
}

export default Header;