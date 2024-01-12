// lab 2.1
// loiktpc05314 


const gameevent = new Map([
    [10,'start game'] ,
    [20,'Goal'] ,
    [30,'Yellow card'] ,
    [30,'check var'] ,
    [45,'Goal'] ,
    [58,'Red card'] ,
    [64,'substitution'] ,
    [74,'Goal'] ,
    [82,'substitution'] ,
    [91,'yello card'] 
]);

console.log('lab 2.1----------------');

//  1. 
const noOverlap = [... new Set(gameevent.values())];
console.log('câu 1:'+noOverlap); 


//  2.
const deleteeven = gameevent.delete(64) ;


//  3.
const time = [...gameevent.keys()].pop();

console.log(`câu 3: "1 sự kiện xảy ra, trung bình mỗi ${time/gameevent.size}}`);


//  4.
console.log('câu 4 -----------------');
gameevent.forEach((event,min)=>{
    const half = min <= 45 ? 'FRIST' : "SECOND"
    console.log(`[${half} HALF] ${min}: ${event} `);
})


//  lab  2.2 
// - Dưới đây là dữ liệu đầu vào cần test:
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure


document.body.append(document.createElement('textarea')) ;
document.body.append(document.createElement('button')) ;
const btn = document.querySelector('button') ;
btn.innerText = 'xác nhận'

document.querySelector('button').addEventListener('click',()=>{
    const text = document.querySelector('textarea').value

    const rows = text.split('\n');
   
   
   
    for (const [i,item] of rows.entries()) {
        const [frist,second] = item.toLocaleLowerCase()
        .trim().split('_');
        const output = `${frist}${second.replace(second[0],second[0].toLocaleUpperCase())}`

        console.log(`${output.padEnd(20)}${'✅'.repeat(1 + 
           i )}`);
        
    }
})


console.log('-----lab 2.3------------');
// 2.3 
// output :
// 🔴 Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// 🔴 Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)
const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30' ;


const rows = flights.split('+');

rows.forEach((e) => {
    const [type, form, to, time] = e.split(';');
    const output = `${type.includes('Delayed') ? '🔴' : '' } ${type.replaceAll('_', ' ')}
     from ${form.slice(0, 3).toUpperCase()} 
     to ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`;
    console.log(output.padStart(36));
    return output;
});


// lab 2.4 

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
