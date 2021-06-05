let indicators = [];
let methylorange = {name: "methylorange", low: 3.1, high: 4.4};
let bromthymolblue = {name: "bromthymolblue", low: 6.0, high: 7.6};
let phenophthalein = {name: "phenophthalein", low: 8.0, high: 9.0};
let litmus = {name: "litmus", low: 6.1, high: 7.1};
let bromcresolgreen = {name: "bromcresolgreen", low: 3.8, high: 5.2};
let thymolblueone = {name: "thymolblueone", low: 1.2, high: 3.8};
let thymolbluetwo = {name: "thymolbluetwo", low: 8.0, high: 9.2};
indicators.push(methylorange,bromthymolblue,phenophthalein,litmus,bromcresolgreen,thymolblueone,thymolbluetwo);
let combinations = [];
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
for (let i = 0; i < indicators.length; i++) {
    for (let j = 0; j < indicators.length; j++) {
        if(j == i){
            break;
        }
        console.log()
        let ilow = indicators[i].low;
        let ihigh = indicators[i].high;
        let jlow = indicators[j].low;
        let jhigh = indicators[j].high;
        console.log(ilow,ihigh,jlow,jhigh)
        let one = 0;
        let two = 0;
        let three = 0;
        if(ihigh<jlow){
            one = ilow;
            two = jlow-ihigh;
            three = 14-jhigh;
        }
        else if(jhigh<ilow){
            one = jlow;
            two = ilow-jhigh;
            three = 14-ihigh;
        }
        let values = [one,two,three];
        let deviations = [];
        for (let k = 0; k < values.length; k++) {
            for (let l = 0; l < values.length; l++) {
                deviations.push(Math.abs(values[k]-values[l]));
                console.log(values[k],values[l])
            }     
        }
        console.log(deviations);
        let test = {indi1:indicators[i].name,indi2:indicators[j].name,std:average(deviations)}
        combinations.push(test)
    }
}
combinations.sort((a, b) => parseFloat(a.std) - parseFloat(b.std));
console.log(combinations);