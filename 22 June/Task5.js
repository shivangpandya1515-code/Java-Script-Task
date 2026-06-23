// 1. Display movie details.

let movie = {
    movieName : "Cocktail 2",
    ticketPrice : "₹210",
    availableSeats : 10,
    theatreName : "Cosmoplex",

    movieInfo : function movieInfo() {
        console.log("Movie Name:" +this.movieName);
        console.log("Ticket Price:" +this.ticketPrice);
        console.log("Available Seats:" +this.availableSeats);
        console.log("Theatre Name:" +this.theatreName);
    }
};

console.log(movie);

// 2. Update the ticket price.

// movie.ticketPrice = "₹400";

// console.log(movie);

// 3. Add a property `showTime`.

// movie.showTime = "10:40 pm";

// console.log(movie);

// 5. Create a method `movieInfo()` that displays complete movie information.

// movie.movieInfo();

// 6. Use a `for...in` loop to display all properties.

// for (let key in movie)
// {
//     console.log(key + " : " + movie[key]);
// }