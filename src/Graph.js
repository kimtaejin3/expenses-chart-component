function Graph({day, amount}){
    const className = `Spending-graph`;
    const graph_height = `${amount}%`;
    return(
        <>
            <div className="Spending-graph">
                <div className="Spending-graph-height" style={{height:graph_height}} >
                </div>
            </div>
        </>
    );
}

export default Graph;