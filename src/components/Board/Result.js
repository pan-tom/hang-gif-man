import React, { useEffect } from 'react';

import styles from './Result.module.scss';

const MAX_FAILS = 5;

export default ({ letters, onFailed, selectedLetters }) => {

    const failedLetters = selectedLetters
        .filter(letter => !letters.includes(letter));
    const numFails = failedLetters.length;

    useEffect(() => {
        if(numFails === MAX_FAILS) {
            onFailed();
        }
    }, [numFails, onFailed]);
    
    return (
        <div className={styles.container}>
            FAILS<br />{numFails}/{MAX_FAILS}
        </div>
    )
};
