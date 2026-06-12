let products = ["Pen", "Pensil", "Bottle"];

let choise = prompt("1. Pen\n2. Pencil\n3. Bottle\n\n Enter Your Choise:- ");
let bill = 0;

switch(choise){
    case '1' : choise = Number(prompt("How many Pen you want:- "));
                if(choise <= 10){
                    bill += (10*choise);
                    alert("your Amount of " +choise+ " pens is:- " +bill+ " rupees.");
                }else{
                    bill += (10*choise - (10*choise*0.050));
                    alert("your Amount of " +choise+ " pens is:- " +bill+ " rupees.");
                }
                break;
    case '2' : choise = Number(prompt("How many Pencil you want:- "));
                if(choise <= 15){
                    bill += (5*choise);
                    alert("Your Amount of " +choise+ " pencils is:- " +bill+ " rupees.");
                }else{
                    bill += (5*choise - (5*choise*0.10));
                    alert("Your Amount of " +choise+ " pencils is:- " +bill+ " rupees.");
                }a
                break;
    case '3' : choise = Number(prompt("How many bottles you want:- "));
                if(choise <= 10){
                    bill += (40*choise);
                    alert("Your Amount of " +choise+ " Bottles is :- " +bill+ " rupees.");
                }else{
                    bill += (40*choise - (40*choise*0.020));
                    alert("Your Amount of " +choise+ " Bottles is :- " +bill+ " rupees.");
                }
                break;
    default : 
                alert("Invalid Choise...!\nThankyou for visit...!");
                break;  
}
