import React, { useEffect } from 'react';

import styles from './Letters.module.scss';

export default ({ letters, onSucceed, selectedLetters }) => {

    useEffect(() => {
        const success = letters.slice(1, -1)
            .every(letter => selectedLetters.includes(letter));
        if(success) {
            onSucceed();
        }
    }, [letters, onSucceed, selectedLetters]);

    return (
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
                        {showLetter && letter}
                    </div>
                )
            })}
        </div>
    )
};
