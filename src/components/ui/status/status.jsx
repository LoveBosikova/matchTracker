import style from './status.module.scss';

import { STATUSES } from '../../../variables';

function Status (props) {

    const { status } = props

    return (
        <>
            {status.toLowerCase() === STATUSES.finished.status.toLowerCase() ? 
            <div className={style.statusFinished}>
                <p className={style.text}>{STATUSES.finished.text}</p>
            </div> : <></>}

            {status.toLowerCase() === STATUSES.ongoing.status.toLowerCase() ? 
            <div className={style.statusOngoing}>
                <p className={style.text}>{STATUSES.ongoing.text}</p>
            </div> : <></>}

            {status.toLowerCase() === STATUSES.scheduled.status.toLowerCase() ? 
            <div className={style.statusScheduled}>
                <p className={style.text}>{STATUSES.scheduled.text}</p>
            </div> : <></>}

        </>
    )
}

export default Status