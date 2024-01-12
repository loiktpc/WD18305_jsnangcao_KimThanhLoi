

//  lab 1 
//  Kim Thanh Loi PC05314
//  LAB1.1: 
//  (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS  AND	STRINGS	> CODING CHANLLENGE	#1)

// 1.
let players1 = ['Bayern', 'Lewandowski', 'Kimmich', 
'Alaba', 'Luka Modric','KimThanhLoi','NguyenMinhQuang',
'NgoHoangDuy','ToBangHieu','NguyenDoanQuang','HuyTuyetNhi'
];
let players2 = ['Courtois', 'Benzema', 'Modric', 'Ramos',
'TranBinhAn','NguyenBaoKhang','LeMinhNhut','ThanhMan',
'TranQuocSi','NguyenAnhThu','BuiNguyenDuy'
 ];

// 2.
let [gk1, ...fieldPlayers1] = players1;
let [gk2, ...fieldPlayers2] = players2;
console.log("1. thủ môn players1:", gk1, "Cầu thủ :", fieldPlayers1);
console.log("2. thủ môn players2:", gk2, "Cầu thủ :", fieldPlayers2);


// 3. 
let allPlayers = [...players1, ...players2];
console.log("3. Toàn bộ cầu thủ trên sân:", allPlayers);

// 4.
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log("4. Cầu thủ đội 1 sau thay người:", players1Final);

// 5. 
const gameOdds = {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5
};

let { team1, draw, team2 } = gameOdds;
console.log("5. Tỉ lệ kết quả trận đấu:", { team1, draw, team2 });

// 6.
function printGoals(...goalScorers) {
    console.log("Cầu thủ đã ghi bàn:",goalScorers);
    console.log(`Số lượng cầu thủ đã ghi bàn: ${goalScorers.length}`);
}
let scoredPlayers = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
printGoals(...scoredPlayers);

// 7. 
team1 < team2 && console.log(team1 , team2, "Team 1 có cơ hội thắng" );
team1 > team2 && console.log(team1 , team2, "Team 2 có cơ hội thắng" );


console.log('-----------------------1.2-------------------------');
const game = {
    team1 : 'KimThanhLoi',
    team2 : 'NguyenMinhQuan',
    scored: [
        'Courtois', 'Benzema', 'Modric', 'Ramos'
    ],
    teams: ["Bayern Munich", "Borrussia Dortmund"],
    results: ["win", "draw", "loss"], 
    odds: [1.33, 3.25, 6.5], 
    gameOdds : {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
  };

  
//   1. lập ra những cầu thủ thắng
console.log('----------1--------');
for (const [i,e] of game.scored.entries()) {
    console.log(`${i + 1}: n ${e}`);
}

//  2. tính tỉ lệ phần trăm thắng của odds
let odds = Object.values(game.odds)
let total  = 0 ;
for (const odd of odds) {
    total += odd ;
}
total /= odds.length;
console.log('----------2--------');
console.log(total);

//  3.
console.log('----------3--------');
for (const [i,e] of Object.entries(game.gameOdds)) {
    const teamname = i === 'x' ? 'draw' : `Tỉ lệ thắng ${game[i]}`
    console.log(`${teamname}: ${e}`);
}
