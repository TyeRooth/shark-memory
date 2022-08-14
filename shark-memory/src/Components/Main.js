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

function Main () {
    let sharks = sharksArray;
    sharks.sort(() => Math.random() - 0.5);
    
    let sharkCards = sharks.map((shark) =>
    <Card img={shark.img} name={shark.name}/>
    );

    return (
        <div className="main">
            <Scores/>
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