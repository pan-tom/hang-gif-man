import React from 'react';

import styles from './Letters.module.scss';

export default ({ letters, selectedLetters }) => (
    <div className={styles.container}>
        {letters.map((letter, index) => {
            const showLetter = selectedLetters.includes(letter)
                || index === 0
                || index === letters.length - 1;
            return (
                <div
                    key={index}
                    className={styles.letter}
                >
                    {showLetter ? letter : ' '}
                </div>
            )
        })}
    </div>
);
