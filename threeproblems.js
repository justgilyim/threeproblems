/**
 * Created by Gilbert on 9/21/2015.
 */
/** Problem 1 **/
var test = [1,2,3,4]
function sumFor(nums){
    var total = 0;
    for (var i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total;
}
console.log("sumFor: " + sumFor(test));

function sumWhile(nums){
    var total = 0;
    var i = 0;
    while(i<nums.length){
        total += nums[i];
        i++;
    }
    return total;
}
console.log("sumWhile: " + sumWhile(test));

function sumRecursion(nums){
    if(nums.length === 0){
        return 0;
    }
    else{
        return nums[0] + sumRecursion(nums.slice(1, nums.length));
    }
}
console.log("sumRecursion: " + sumRecursion(test));

function sumTheSimpleWay(num){
    return _.reduce(test,function(memo,num){return memo+num;},0);
}
console.log("sumTheSimpleWay: " + sumTheSimpleWay(test));


/** Problem 2 **/
var testlist1 = [1,2,3];
var testlist2 = ["a", "b", "c"];
function zipList(list1, list2){
    var result = [];
    for(var i = 0; i < list1.length; i++){
        result.push(list1[i],list2[i]);
    }
    return result;
}
console.log("zipList: " + zipList(testlist1,testlist2));

function zipListTheSimpleWay(list1, list2){
    return _.flatten(_.zip(list1, list2));
}
console.log("zipListTheSimpleWay: " + zipListTheSimpleWay(testlist1,testlist2));


/** Problem 3 **/
function fib(){
    var prev = 0;
    var current = 1
    var fibList = [prev]
    for(var i = 0; i < 99; i++){
        var temp = current;
        current = current + prev;
        prev = temp;
        fibList.push(current);
    }
    return fibList;
}
console.log("fib: " + fib());
console.log("fib length: " + fib().length)
/** time: 22:32 **/