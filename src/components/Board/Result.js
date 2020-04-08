import React from 'react';

import styles from './Result.module.scss';

const MAX_FAILS = 5;

export default ({ letters, selectedLetters }) => {

    const failedLetters = selectedLetters.filter(
        letter => !letters.includes(letter)
    );

    return (
        <div className={styles.container}>
            FAILS<br />{failedLetters.length}/{MAX_FAILS}
        </div>
    )
};
