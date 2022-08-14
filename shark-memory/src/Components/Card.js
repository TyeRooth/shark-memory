import '../App.css';

function Card (props) {
    return (
        <div className='card'>
            <img src={props.img} alt='shark' className='card-img'></img>
            <p>{props.name}</p>
        </div>
    )
};

export default Card;