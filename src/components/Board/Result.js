import React, { useEffect } from 'react';

import styles from './Result.module.scss';

const MAX_FAILS = 4;

export default ({
    gameResult,
    letters,
    onFailed,
    selectedLetters,
}) => {

    const failedLetters = selectedLetters
        .filter(letter => !letters.includes(letter));
    const numFails = failedLetters.length;

    const imageSrc = gameResult === 'succeed'
        ? '/media/success.webp'
        : `/media/fail${numFails}.webp`;

    useEffect(() => {
        if(numFails === MAX_FAILS) {
            onFailed();
        }
    }, [numFails, onFailed]);
    
    return (
        <div className={styles.container}>
            {imageSrc !== null && <img
                src={imageSrc}
                alt={gameResult === 'succeed' ? 'Success' : `Fails: ${numFails}`}
            />}
            {numFails > 0 && <div>FAILS: {numFails}/{MAX_FAILS}</div>}
        </div>
    )
};
