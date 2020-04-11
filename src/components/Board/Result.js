import React, { useEffect } from 'react';

import ResultImage from './ResultImage';
import styles from './Result.module.scss';

const MAX_FAILS = 6;

export default ({
    gameResult,
    letters,
    onFailed,
    selectedLetters,
}) => {

    const failedLetters = selectedLetters
        .filter(letter => !letters.includes(letter));
    const numFails = failedLetters.length;
    
    useEffect(() => {
        if(numFails === MAX_FAILS) {
            navigator.vibrate(300);
            onFailed();
        } else {
            navigator.vibrate(100,100);
        }
    }, [numFails, onFailed]);
    
    return (
        <div className={styles.container}>
            <ResultImage
                gameResult={gameResult}
                numFails={numFails}
            />
            <div>FAILS: {numFails}/{MAX_FAILS}</div>
        </div>
    )
};
