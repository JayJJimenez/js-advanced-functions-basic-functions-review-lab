function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (location="go to the office") {
    return `This Monday, I will ${location}.`;
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
 }
 function actionApplyer (start, ray) {
     let a = start
     
     for (let i = 0; i < ray.length; i++ ){
         a = ray[i](a)
     }
     return a
 }