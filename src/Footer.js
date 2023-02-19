import './Footer.css';
import spending from '../data.json';

let arr = spending;
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i].amount;
}

function Footer(){
    return (
        <div className="Footer">
            <div className="container">
                <div className="container-contetns">
                    <span>Total this month</span>
                    <span class="total__price">${sum}</span>
                </div>
                <div className="container-side">
                    <span class="rate">+2.4%</span>
                    <span>from last month</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;