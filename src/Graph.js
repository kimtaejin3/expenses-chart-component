import {useState} from 'react';

function Graph({day, amount}){
    const className = `Spending-graph`;
    const graph_height = `${amount}%`;

    let [showAmount, setShowAmount] = useState(false);
    const mouseEventHandler = () => {
        setShowAmount((current)=>!current);
    }
    

    return(
        <>
            <div className="Spending-graph">
                    {showAmount && <span className="spending-graph-amount">${amount}</span>}

                    <div onMouseOver={mouseEventHandler} onMouseLeave={mouseEventHandler} className="Spending-graph-height" style={{height:graph_height}} >
                    </div>
            </div>
        </>
    );
}

export default Graph;