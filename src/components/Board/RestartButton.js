import React from 'react';

import styles from './RestartButton.module.scss';

export default ({ disabled, onClick }) => 
    <button
        className={styles.btn}
        disabled={disabled}
        onClick={onClick}
    >
        RESTART GAME
    </button>
