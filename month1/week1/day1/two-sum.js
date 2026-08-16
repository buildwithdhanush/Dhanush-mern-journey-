//============================================//
// day o1 of dsa -two sum (brute force)

const nums =[2,7,11,15];
const target = 9;
function twosum(nums ,target){
     for (let i=0; i <nums.length; i++){
        for (let j=i+1; j <nums.length; j++){
            if(nums[i] +nums[j] === target){
                return[i,j]  }}}
     return("no solution")}
console.log(twosum(nums,target));