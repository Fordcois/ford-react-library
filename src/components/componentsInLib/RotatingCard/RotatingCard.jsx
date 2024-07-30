import './RotatingCard.css'

const RotatingCard = () => {
    



return (
<div className="card-container">
<div className="thecard">

    <div className="card-front">
        <div>
            <h1>question</h1>
            <p>In which year did the RMS Titanic sink?</p>
        </div>

        <i>(Hover for Answer)</i>
    
    </div>

    <div className="card-back">
        <h1>answer</h1>
        <p>1912</p>
    </div>

</div>
</div>

);}

export default RotatingCard;

