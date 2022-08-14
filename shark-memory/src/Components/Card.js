import '../App.css';
import bull from '../images/bull.jpg';

function Card () {
    return (
        <div className='card'>
            <img src={bull} alt='shark' className='card-img'></img>
            <p>Bull Shark</p>
        </div>
    )
};

export default Card;