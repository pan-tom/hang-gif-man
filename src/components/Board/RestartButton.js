import React from 'react';

import styles from './RestartButton.module.scss';

export default ({ onClick }) => 
    <button
        className={styles.btn}
        onClick={onClick}
    >
        RESTART GAME
    </button>
