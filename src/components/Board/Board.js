import React, { useState } from 'react';

import Keyboard from './Keyboard';
import Letters from './Letters';
import RestartButton from './RestartButton';
import Result from './Result';
import wordsList from '../../data/words.json';

const getRandomWordLetters = () => (
    wordsList[
        Math.floor(Math.random() * wordsList.length)
    ].toUpperCase().split('')
);

export default () => {

    const [wordLetters, setWordLetters] = useState(
        getRandomWordLetters()
    );
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [gameResult, setGameResult] = useState(null);

    const reStartGame = () => {
        setWordLetters(getRandomWordLetters());
        setSelectedLetters([]);
        setGameResult(null);
    };

    const handleKeyClick = letter => {
        setSelectedLetters(prevLetters => [...prevLetters, letter]);
    };

    const onFailed = () => {
        setGameResult('failed');
    };

    const onSucceed = () => {
        setGameResult('succeed');
    };

    // WHY renders 2 times?
    console.log(wordLetters);

    return (
        <>
            <RestartButton
                onClick={reStartGame}
            />
            <Result
                letters={wordLetters}
                selectedLetters={selectedLetters}
                onFailed={onFailed}
            />
            <Letters
                letters={wordLetters}
                selectedLetters={selectedLetters}
                onSucceed={onSucceed}
            />
            <Keyboard
                handleKeyClick={handleKeyClick}
                selectedLetters={selectedLetters}
                disabled={gameResult !== null}
            />
        </>
    )

};
