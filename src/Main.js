import spending from '../data.json';
import './Main.css';
import Graph from './Graph.js';

const arrayOfSpending = spending;
console.log(arrayOfSpending[0]);
function Main(){
// json 파일에서 배열 가져와서 
    return (
        <main className="Main">
            <div className="template">
                <h1 className="template-title">Spending - Last 7 days</h1>
                <ul className="l_row">
                    
                    <li className="l_col" >
                        <Graph day={arrayOfSpending[0].day} amount={arrayOfSpending[0].amount}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[1].day} amount={arrayOfSpending[1].amount}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[2].day} amount={arrayOfSpending[2].amount}/>
                    </li>
                    <li className="l_col">
                        <Graph  day={arrayOfSpending[3].day} amount={arrayOfSpending[3].amount}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[4].day} amount={arrayOfSpending[4].amount}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[5].day} amount={arrayOfSpending[5].amount}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[6].day} amount={arrayOfSpending[6].amount}/>
                    </li>
                </ul>

                <ul class="l_row">
                    <li className='l_col'><div class="day">mon</div></li>
                    <li className='l_col'><div class="day">tue</div></li>
                    <li className='l_col'><div class="day">wed</div></li>
                    <li className='l_col'><div class="day">thu</div></li>
                    <li className='l_col'><div class="day">fri</div></li>
                    <li className='l_col'><div class="day">sat</div></li>
                    <li className='l_col'><div class="day">sun</div></li>
                </ul>
            </div>
        </main>
    );

}

export default Main;