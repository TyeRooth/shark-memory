import "../App.css";
import Scores from './Scores';
import Card from './Card';

import bull from '../images/bull.jpg';
import reef from '../images/caribbeanreef.jpg';
import cookiecutter from '../images/cookiecutter.jpg';
import goblin from '../images/goblin.jpg';
import greatWhite from '../images/greatwhite.jpg';
import greenland from '../images/greenland.jpg';
import hammerhead from '../images/hammerhead.jpg';
import lemon from '../images/lemon.jpg';
import mako from '../images/mako.JPG';
import tiger from '../images/tiger.jpg';
import whale from '../images/whale.jpeg';
import zebra from '../images/zebra.jpg';
import { useState } from "react";

function Main () {
    const [sharks, setSharks] = useState(sharksArray)
    sharks.sort(() => Math.random() - 0.5);

    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function repeatClick () {
        setCurrentScore(0);
        let updatedSharks = [];
        for (let i = 0; i < sharks.length; i++) {
            let updatedShark = sharks[i];
            updatedShark.clicked = false;
            updatedSharks.push(updatedShark);
        }
        setSharks(updatedSharks);
    };

    function newClick (name) {
        setCurrentScore(currentScore + 1);
        //Current Score is not updated during function which is why currentScore + 1 is required
        if (currentScore + 1 > bestScore) {
            setBestScore(currentScore + 1);
        };
        let updatedSharks = [];
        for (let i = 0; i < sharks.length; i++) {
            let updatedShark = sharks[i];
            if (sharks[i].name === name) {
                updatedShark.clicked = true;
            };
            updatedSharks.push(updatedShark);
        }
        setSharks(updatedSharks);
    };
    
    let sharkCards = sharks.map((shark) =>
    <Card img={shark.img} name={shark.name} key={shark.name} clicked={shark.clicked}
    goodClick={newClick} badClick={repeatClick}/>
    );

    return (
        <div className="main">
            <Scores current={currentScore} best={bestScore}/>
            <div className="cards">
                {sharkCards}
            </div>
        </div>
    )
};

let sharksArray = [
    {
        img: bull,
        name: "Bull Shark",
        clicked: false,
    },
    {
        img: reef,
        name: "Reef Shark",
        clicked: false,
    },
    {
        img: cookiecutter,
        name: "Cookiecutter Shark",
        clicked: false,
    },
    {
        img: goblin,
        name: "Goblin Shark",
        clicked: false,
    },
    {
        img: greatWhite,
        name: "Great White Shark",
        clicked: false,
    },
    {
        img: greenland,
        name: "Greenland Shark",
        clicked: false,
    },
    {
        img: hammerhead,
        name: "Hammerhead Shark",
        clicked: false,
    },
    {
        img: lemon,
        name: "Lemon Shark",
        clicked: false,
    },
    {
        img: mako,
        name: "Mako Shark",
        clicked: false,
    },
    {
        img: tiger,
        name: "Tiger Shark",
        clicked: false,
    },
    {
        img: whale,
        name: "Whale Shark",
        clicked: false,
    },
    {
        img: zebra,
        name: "Zebra Shark",
        clicked: false,
    },
]

export default Main;