//EASY: Write a function that would allow you to do this:

//  var run = exercise('running');
//  console.log(run()); // prints "Today's exercise: running"
//  var swim = exercise('swimming');
//  console.log(swim()); // prints "Today's exercise: swimming"

//Easy 
function exercise(input){
    if(input === 'running'){
        var statement = "Today's excercise: " + input  ; 
    }else if (input === 'swimming'){
        var statement = "Today's excercise: " + input  ; 
    }
    return  statement; 
}
function run(){
    var run = exercise('running');
    return run ; 
}
function swim(){
    var swim = exercise('swimming');
    return swim ; 
}

console.log(run());
console.log(swim());
