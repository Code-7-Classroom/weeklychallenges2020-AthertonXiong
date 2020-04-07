// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.

function Person(name , job , age) {
    this.name = name ; 
    this.job = job ; 
    this.age = age ;
}

// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

Person.prototype.excercise = function (){
    return "Running is fun ! - said no one ever" ; 
}

// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".

Person.prototype.fetchJob = function() {
    return this.name + 'is a '+ this.job ; 
}

// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.

function Programmer(name , job , age , languages){
    Person.call(this.name , job , age ) ; 
    this.language = [languages] ; 
    this.busy = true ; 
}

// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

Programmer.prototype.completeTask = function(){
    this.busy = false ; 
}
Programmer.prototype.acceptNewTask = function(){
    this.busy = true ; 
}

// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.

Programmer.prototype.offerNewTask = function(){
    if(this.busy){
        console.log('cant accept new tasks right now . ') ; 
    }else {
        console.log ('would love to take on a new responsibility. If the programmer is not busy ') ; 
    }
}

// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.

Programmer.prototype.listLanguage = function(){
    console.log(this.language)
}
Programmer.prototype.learnLanguage = function(program){
    return this.language.push(program) ; 
}

// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
var me = new Person ("Athey " , "RoadToHire Student" , 21 )
console.log(me.fetchJob()) ; 
var newbie = new Programmer("Atherton " ,"RoadToHire" , 21 , "HTML")
console.log(newbie ) ; 
newbie.listLanguage() ; 
newbie.learnLanguage("C++"); 
newbie.listLanguage() ; 
newbie.offerNewTask();