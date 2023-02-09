import spending from '../data.json';
import './Main.css';
import Graph from './Graph.js';


function compare(a,b){
    if(a.amount < b.amount){
        return -1;
    }
    if(a.amount>b.amount){
        return 1;
    }
    return 0;
}

const arrayOfSpending = spending;
let copy_arrayOfSpending = arrayOfSpending.slice();
let max_element = copy_arrayOfSpending.sort(compare)[6];
let result_arr = new Array(7);

copy_arrayOfSpending.forEach((x)=>{
    let index;
    if(x.day==='mon'){
        index = 0;
    }
    else if(x.day==='tue'){
        index = 1;
    }
    else if(x.day==='wed'){
        index = 2;
    }else if(x.day==='thu'){
        index = 3;
    }else if(x.day==='fri'){
        index = 4;
    }else if(x.day==='sat'){
        index = 5;
    }else if(x.day==='sun'){
        index = 6;
    }
    result_arr[index]=(x.amount*80 /max_element.amount).toFixed(1);
});

console.log(result_arr);


// 제일 큰 값을 100으로 설정하고 나머지는 그 값에 따라서 비율적으로
/*
300:20 = 100:x
300x = 2000
6%
*/
function Main(){
// json 파일에서 배열 가져와서 
    return (
        <main className="Main">
            <div className="template">
                <h1 className="template-title">Spending - Last 7 days</h1>
                <ul className="l_row">
                    
                    <li className="l_col" >
                        <Graph day={arrayOfSpending[0].day}  amount={arrayOfSpending[0].amount} height = {result_arr[0]}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[1].day}  amount={arrayOfSpending[1].amount} height={result_arr[1]}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[2].day}  amount={arrayOfSpending[2].amount} height={result_arr[2]}/>
                    </li>
                    <li className="l_col">
                        <Graph  day={arrayOfSpending[3].day}  amount={arrayOfSpending[3].amount} height={result_arr[3]}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[4].day}  amount={arrayOfSpending[4].amount} height={result_arr[4]}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[5].day}  amount={arrayOfSpending[5].amount} height={result_arr[5]}/>
                    </li>
                    <li className="l_col" >
                        <Graph  day={arrayOfSpending[6].day}  amount={arrayOfSpending[6].amount} height={result_arr[6]}/>
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