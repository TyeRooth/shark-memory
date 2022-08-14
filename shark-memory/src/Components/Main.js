import "../App.css";
import Scores from './Scores';
import Card from './Card';

function Main () {
    return (
        <div className="main">
            <Scores/>
            <div className="cards">
                <Card/>
            </div>
        </div>
    )
};

export default Main;