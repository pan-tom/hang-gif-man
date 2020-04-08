import React from 'react';

import styles from './Keyboard.module.scss';

const renderKeyboard = ({ handleKeyClick, selectedLetters }) => {
    let keys = [];
    for(let code = 65; code <= 90; code++) {
        const letter = String.fromCharCode(code);
        keys.push(
            <button
                key={code}
                onClick={() => handleKeyClick(letter)}
                disabled={selectedLetters.includes(letter)}
            >
                {letter}
            </button>
        );
    }
    return keys;
};

export default props => (
    <div className={styles.container}>
        {renderKeyboard(props)}
    </div>
);
