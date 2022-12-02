import React from "react";

const Test = () => {
 const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const turnMeAround = (array) => {
    let answer = [];
    let newArray = array;
    for (let y = 0; y < array.length; y++) {
      answer.push([]);
    }
    newArray.reverse();
    for (let i = 0; i < array.length; i++) {
      newArray.forEach((item, y) => {
        return answer[i].push(item[i]);
      });
    }
    return answer;
  };

  const numbers = [12, 46, 97, 32, 14, 67, 45, 97];

  const lowestNumber = (numbers) => {
    let answer = 0
    let rightNumbers = numbers.sort((a,b)=> a-b)
    for(let i= 0; i < numbers.length; i+=2){
        answer += rightNumbers[1+i]-rightNumbers[0+i]
    }
    return answer
  };

  return (
  <div>
      <div className="text-center font-bold text-3xl">{lowestNumber(numbers)}</div>
    <div className="text-center font-bold text-3xl">{turnMeAround(matrix)}</div> 
  </div>
  
  );
};

export default Test;
