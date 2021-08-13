'use strict'

//call() - used to invoke (call) a method with an owner object as an argument (parameter). With call(), an object can use a method belonging to another object.

const harryPotter ={
    bookSeries: "Harry Potter",
    author: "J K Rowling",
    noOfBooks :  7,
    getInfo() {
        console.log('There are '+ this.noOfBooks + ' in ' + this.bookSeries+ ' book series and is written by '+this.author);

    },
    availability(copies, place){
        console.log(copies+ " copies of "+this.bookSeries+ " are available in "+place)
    }
};
harryPotter.getInfo()
const book = harryPotter.availability;
book.call(harryPotter,20,'India') // We are passing arguments seperated by comma

//Created another object called lordOfRings
const lordOfRings={
    bookSeries: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    noOfBooks: 6,
}

harryPotter.getInfo.call(lordOfRings);
book.call(lordOfRings,10,'England')

//apply() - This is similar to call() method but takes arguments as an array.

book.apply(harryPotter,[13,'Australia']) // Here we are sending the arguments as a array
const arr=[34,'Italy']
book.apply(lordOfRings,arr) // we can either intialize an array and send it like this.

//bind() -- This method returns a new function, when invoked, has its this sets to a specific value

const bookCopy= harryPotter.availability.bind(lordOfRings,24,"Spain");
bookCopy();
// we can either pass the arguments in the bound function or we can give it at the beggining
const bookCopy10 = harryPotter.availability.bind(harryPotter,10); // Here, we are setting the no of copies as 10, so this value will be constant and wont change whenever we call bookCopy10
bookCopy10('Malaysia');
