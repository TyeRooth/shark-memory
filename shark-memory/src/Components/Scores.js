import '../App.css';

function Scores (props) {
    return (
        <div className='scores'>
            <div className={props.current === 12 ? "win-score shadow" : "current-score shadow"}>
                Current Score: {props.current}
            </div>
            <div className='best-score shadow'>Best Score: {props.best}</div>
        </div>
    )
};

export default Scores;