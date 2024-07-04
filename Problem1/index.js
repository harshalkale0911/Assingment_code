// **Question - 1**

// - Create a function called `codingScoreCheck` that will take `an array of marks`, `cut off score`, and return a promise that will either `resolve` or `reject` after `2 seconds` based on the following conditions.
// - if the average score of all the evaluations is greater or equal to the cutoff resolve the promise with the average score.
// - else reject with the following message `Sorry you haven’t cleared the coding round.`

function codingScoreCheck(marks , cutoff){
   return Promise = new Promise((resolve , reject )=>{
    setTimeout(() => {
         let totalMarks = marks.reduce((acc , ele) => acc + ele  , 0 ) ;
         let average = totalMarks / marks.length ;

         if(average >= cutoff){
            resolve(average) 
         }else {
            reject(`Sorry you haven’t cleared the coding round.`) ;
         }
    }, 2000);
   })
}
let marks2 = [50 ,80 , 60 , 89 , 45 ]  // n = 4
let cutoff2 = 50 ; 

codingScoreCheck(marks , cutoff)
.then(average => console.log(average)) 
.catch(err => console.log(err))


// **Question - 2**

// - Create a function called `HUKUMUScoreCheck` that will take `an array of marks`, `cut off score`, and return a promise that will either `resolve` or `reject` after `2 seconds` based on the following conditions.
// - if the average score of all the HUKUMU interviews is greater or equal to the cutoff resolve the promise with the average score.
// - else reject with the following message `Sorry you haven’t cleared the HUKUMU round.`

function HUKUMUScoreCheck(marks , cutoff){
    return Promise = new Promise((resolve , reject )=>{
     setTimeout(() => {
        let totalMarks = marks.reduce((acc , ele)=> acc + ele , 0 )
        let average = totalMarks / marks.length ;

        if(average >= cutoff){
            resolve(average) ;
        }else{
            reject(`Sorry you haven’t cleared the coding round.`) ;
        }
     }, 2000);  
    })
}

let marks1 = [45 ,12,45,36,78] ;
let cutoff1 =80; 

HUKUMUScoreCheck(marks , cutoff)
.then(average => console.log(average)) 
.catch(err => console.log(err))

// **Question - 3**

// - Create a function called `unitMovementCheck` that will take `averageCodingScore`, `averageHukumuScore`, `cut off Score,` and return a promise that will either `resolve` or `reject` after `2 seconds` based on the following conditions.
// - if the average of hukumu and coding score is greater or equal to the cutoff resolve the promise with the average score.
// - else reject with the following message `Sorry you haven’t cleared the final cutoff.`


function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const average = (averageCodingScore + averageHukumuScore) / 2;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry you haven’t cleared the final cutoff.");
            }
        }, 2000);
    });
}

const averageCodingScore = 85;
const averageHukumuScore = 75;
const cutoff = 80;

unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff)
    .then(average => console.log(`Final average score: ${average}`))
    .catch(error => console.log(error));
