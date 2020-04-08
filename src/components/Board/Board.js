import React, { useState } from 'react';

import Keyboard from './Keyboard';
import Letters from './Letters';
import RestartButton from './RestartButton';
import Result from './Result';
import wordsList from '../../data/words.json';

const getRandomWordLetters = () => (
    wordsList.list[
        Math.floor(Math.random() * wordsList.count)
    ].toUpperCase().split('')
);

export default () => {

    const [wordLetters, setWordLetters] = useState(
        getRandomWordLetters()
    );
    const [selectedLetters, setSelectedLetters] = useState([]);

    const reStartGame = () => {
        setWordLetters(getRandomWordLetters());
        setSelectedLetters([]);
    };

    const handleKeyClick = letter => {
        setSelectedLetters(prevLetters => [...prevLetters, letter]);
    };

    return (
        <>
            <RestartButton
                onClick={reStartGame}
            />
            <Result
                letters={wordLetters}
                selectedLetters={selectedLetters}
                // onFailed={onFailed}
            />
            <Letters
                letters={wordLetters}
                selectedLetters={selectedLetters}
                // onSucceed={onSucceed}
            />
            <Keyboard
                handleKeyClick={handleKeyClick}
                selectedLetters={selectedLetters}
            />
        </>
    )

};
