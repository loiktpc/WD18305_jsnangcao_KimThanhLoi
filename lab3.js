// lab 3
// loiktpc05314

// 3.1 
const account1 = {
    owner: "user1",
    movements: [200, 450, 400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
  };
  const account2 = {
    owner: "user2",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  const account3 = {
    owner: "user3",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  const account4 = {
    owner: "user4",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];
  
  const labelWelcome = document.querySelector(".welcome");
  const labelDate = document.querySelector(".date");
  const labelBalance = document.querySelector(".balance_value");
  const labelSumIn = document.querySelector(".sumary_value--in");
  const labelSumOut = document.querySelector(".sumary_value--out");
  const labelSumInterest = document.querySelector(".sumary_value--interest");
  const labelTimer = document.querySelector(".timer");
  const containerApp = document.querySelector(".app");
  const containerMovements = document.querySelector(".movements");
  const btnLogin = document.querySelector(".login_btn");
  const btnTransfer = document.querySelector(".form_btn--transfer");
  const btnLoan = document.querySelector(".form_btn--loan");
  const btnClose = document.querySelector(".form_btn--close");
  const btnSort = document.querySelector(".btn--sort");
  const inputLoginUsername = document.querySelector(".login_input--user");
  const inputLoginPin = document.querySelector(".login_input--pinr");
  const inputTransferTo = document.querySelector(".login_input--to");
  const inputTransferAmount = document.querySelector(".login_input--amount");
  const inputLoanAmount = document.querySelector(".login_input--loan--amount");
  const inputCloseUsername = document.querySelector(".form_input--user");
  const inputClosePin = document.querySelector(".form_input--pin");
  const displayMovements = (movements)=> {
    containerMovements.innerHTML = "";
    movements.forEach(function (mov, i) {
      const type = mov > 0 ? "deposit" : "whithdrawal";
      const html = `
          <div class="movements__row">
              <div class="movements__type movements__type--${type}">
                  ${i + 1} ${type}
              </div>    
              <div class="movements__value">${mov}</div>
          <div>
          `;
  
      containerMovements.insertAdjacentHTML("afterbegin", html);
    });
  };
  displayMovements(account1.movements);




// lab 3.2 
console.log('-----------3.2------------');
const checkDogs = (dogsJulia,dogsKate) =>{
    const dogsJuliaCorrted = dogsJulia.slice() ;
    dogsJuliaCorrted.splice(0,2)
    dogsJuliaCorrted.splice(-2)
    const arrdognew = [...dogsJuliaCorrted , ...dogsKate]    
    console.log(arrdognew);

    arrdognew.map((dog,index)=>{
        const dogs = dog>= 3 ? `Chó số ${index +1} là người lớn và ${dog} tuổi`
         : `Chó số ${index + 1} vẫn là chó con 🐶` ;
         console.log(dogs);
         return dogs
    })
}
checkDogs( [3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])


console.log('-----------3.3------------');
// lab 3.3 
const calcAverageHumanAge = (ages) =>{
    const agedogforpeople = ages.map((age,index) =>{
       const agedog =  age <= 2 ? age * 2 : 16 + age * 4;
        return agedog ;
    })
    console.log(agedogforpeople);
    const dogon18 = agedogforpeople.filter((age)=> age >= 18 ) ;
    console.log(dogon18);

    const average = dogon18.reduce((acc, age , i , arr ) => {
        return acc + age /arr.length ;
      }, 0 )  ;
      return average ;
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]) ;
const avg2  = calcAverageHumanAge( [16, 6, 10, 5, 6, 1, 4])
console.log(avg1,avg2);


// lab3.4
console.log('-----------3.4------------');
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
//1
    dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight **0.75* 28)));
    console.log(dogs);
//2 
    const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
    console.log(dogSarah);
    console.log(`sara'h dog is eating too much  ${dogSarah.curFood >dogSarah.recFood ? 'much' : 'little' }`);

//3 
    const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap( dog => dog.owners);
    console.log('ownersEatTooMuch: ',ownersEatTooMuch);
    const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap( dog => dog.owners);
    console.log('ownersEatTooLittle: ',ownersEatTooLittle);

// 4
    console.log(`${ownersEatTooMuch.join(' and ')}: dog eat too much`);
    console.log(`${ownersEatTooLittle.join(' and ')}: dog eat little`);

//5
    console.log('câu 5:'+ dogs.some(dog => dog.curFood === dog.recFood)); 

//6 
    const checkEat = dog => dog.curFood > dog.recFood *0.9 && dog.curFood <dog.recFood *1.1;
    console.log('câu 6:'+dogs.some(checkEat));

//7
    console.log(dogs.filter(checkEat));

//8
    const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);
    console.log(dogsSorted);