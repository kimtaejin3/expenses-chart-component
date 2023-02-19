import {useState} from 'react';

function Graph({day, amount, height}){
    const className = `Spending-graph`;
    let classNameSub = 'Spending-graph-height';

    if(height=='80.0'){
        classNameSub += ' high';
    }
    const graph_height = height+'%';

    let [showAmount, setShowAmount] = useState(false);
    const mouseEventHandler = () => {
        setShowAmount((current)=>!current);
    }
    

    return(
        <>
            <div className="Spending-graph">
                    {showAmount && <span className="spending-graph-amount">${amount}</span>}

                    <div onMouseOver={mouseEventHandler} onMouseLeave={mouseEventHandler} className={classNameSub} style={{height:graph_height}} >
                    </div>
            </div>
        </>
    );
}

export default Graph;