// "Q2:"
let personNam:string = "anas";
console.log("hello",personNam,"would you like to learn some typescript today")
//"Q3:"
let personName ="anas";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
console.log("anas\nANAS\nAnas");
// Q4:
console.log("Audery Hypburn once said",'"word IMPOSSIBLE itself says I AM POSSIBLE"');
// Q5;
let famousperson="Audrey Hypburn";
let massage ="once said,'word IMPOSSIBLE itself says I AM POSSIBLE'";
console.log(famousperson,massage);
// Q6;
let whitespace ="\n\t Anas shakil\t\n";
console.log(whitespace);
let withoutwhiteSpace=whitespace.trim();
console.log(withoutwhiteSpace);
// Q7;
console.log(4+4);
console.log(10-2);
console.log(2*4);
console.log(16/2);
// Q9;
let favouriteNumber: number = 4;
console.log ("My farvourite number is" , favouriteNumber);
// Q 10;
//date: 4-March-24
let whiteSpace = "\n\t Anas shakil\t\n";
console.log(whiteSpace);
let withoutwhitespace = whiteSpace.trim();
console.log(withoutwhiteSpace);
// Q11;
let friendsName =["Anas", "Sharjeel", "Hassan", "Shaheer"];
console.log(friendsName[0])
console.log(friendsName[1])
console.log(friendsName[2])
console.log(friendsName[3])
//Q12;
let friendsNam =["Anas","Sharjeel","Hassan","Shaheer"];
let message= "subcribe to my channel"
console.log("Hello",friendsName[0],message)
console.log("Hello",friendsName[1],message)
console.log("Hello",friendsName[2],message)
console.log("Hello",friendsName[3],message)
//Q 13;
let transpotation : string [] = ["honda motocyle","Audi","Honda city"];
transpotation.forEach(items => console.log( `I would like to own a ${items}`));
//Q 14;
let guestList = ["Sharjeel","Anas","shaheer","hamza",];
guestList.forEach(oneGuest => console.log(`salam ${oneGuest}, would you like to dinner with me?`));
//Q 15;
let guestLis = ["Hamza","Anas","Shaheer","Hassan",];
let dontCome = guestList[0];
console.log(dontCome,"Nahi asekhta");
guestList.splice(0,1, "Naseebullah");
guestList.forEach(guest => console.log(`Salam ${guest},would u like to dinner with me ?`));
//Q 16;
let guetList = ["Hamza","Usman","Ayesha","Areeba"];
let dontome = guestList[0];
console.log(dontCome, "Nahi asekhte han");
guestList.splice(0,1,"Amair");
console.log("Good News ! we have found a bigger table for dinner,");
guestList.unshift("Ali");
guestList.push("Zain");
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex,0,"osama");
console.log("Update list of our Guest");
guestList.forEach(oneguest => console.log (`Salam ${oneguest}, would you like to dinner with me`));
//Q 17;
let guestLst = ["Hamza","Usman","Ayesha","Areeba"];
let dontcome = guestList[0];
console.log(dontCome, "Nahi asekhte han");
guestList.splice(0,1,"Amair");
console.log("Good News ! we have found a bigger table for dinner,");
guestList.unshift("Ali");
guestList.push("Zain");
let midleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex,0,"osama");
console.log("Update list of our Guest");
guestList.forEach(oneGuest => console.log (`Salam ${oneGuest}, would you like to dinner with me`));
console.log("unfortunately, the new dinner table wont arrive on time,so I can only invite two guests two dinner with me ");
while(guestList.length > 2) {
let removedGuest = guestList.pop();
console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}
console.log("Invitation to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));
guestList.pop();
guestList.pop();
console.log("Empty list:",guestList);
// Q18;
let placesToVisit: string[] = ["Tokyo", "Pakistan", "America","China", "Japan"];
console.log ("original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("original order after sorting:", placesToVisit);
console.log("Revers alphabetical order:", [...placesToVisit].sort().reverse());
console.log("original order after reverse sorting:",placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placesToVisit);
// Q19;
let invitations : string [] = ["ali","bilal"];
let  count_invitations : number = invitations.length
console.log(`${count_invitations} peopls will come to the dinner`);
//Q20;
let country: string [] = ["Pakistan","India","Newyork","Japan","China"];
console.log("list of country:");
console.log(country);
//Q21;
let person: {name: string,fname: string , age: number} = {name:"Anas", fname:"male" , age: 20}
console.log(person)
//Q22;
const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log(days[7])
console.log(days[6])
//Q 23;
let five = 5;
let tens = 10;
console.log("Test 1: five is equal to 5?");
console.log(five == 5);
console.log ("Test  2: ten is equal to 10?");
console.log(tens == 10);
console.log("Test 3: is not equal to 10");
console.log(five != tens);
console.log("Test 4: 10 is greater than 5");
console.log(tens > 5);
console.log("Test 5: 5 is smaller than 10");
console.log(five < tens);
console.log("Test 6: 10 is smaller than 5");
console.log(tens < 5);
console.log("Test 7: 5 to 10");
console.log(five == tens);
console.log("Test 8: 10 is equal to ten");
console.log(tens != tens);
console.log("Test 9: 5 is greater than 10");
console.log(five > tens);
console.log("Test 10: 100 is smaller than 50");
console.log(100 < 50);
// Q24;
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("Is apple is not equal to apple");
console.log(apple != "apple");
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
console.log("Is ten is equal to twenty?");
console.log(ten == twenty);
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);
console.log("Is ten is greater than zero?");
console.log(ten > 0);   
console.log("Is twenty is less than 10"); 
console.log(twenty < 10);  
console.log("Is ten is greater than or equal to 5?");
console.log(ten >= 5);    
console.log("twenty is less than or equal to 10");   
console.log(twenty <= 10);    
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);    
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);   
console.log("20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20); 
console.log("Is orange include in my fruits array");
console.log(fruits.includes("orange"));   
console.log("Is orange not includes in my fruits array");
console.log(!fruits.includes("orange"));
// Q25;
let alienColor = "white";
if (alienColor === "black"){
console.log("player just earned 5 points.");
}
if (alienColor === "white"){
console.log("Alien color is white");
}
//Q26;
let alienolor = "green";
if (alienColor === "green"){
console.log("player just earned 5 points for shooting the alien.")
}
else{
    console.log("player just earned 10 points.");
}
if (alienColor === "red"){
console.log("I am come from If Statement.");
}
else{
    console.log("I am come from Else Statement.");
}
//Q 27;
let aliencolor = "green";
if(aliencolor === "green"){
   console.log("you shot down green alien you have earned 5 points");
}
else if(aliencolor  === "yellow"){
   console.log("you shot down yellow alien you have earned 10 points");
}
else if(aliencolor === "red"){
console.log("you shot down red alien you have earned 15 points");
}
let aliencolor2 = "yellow";
if(aliencolor2 === "green"){
   console.log("you shot down green alien you have earned 5 points");
}
else if(aliencolor2 === "yellow"){
   console.log("you show down yellow alien you earned 10 points");
}
else if(aliencolor2 ==="red"){
   console.log("you shot down red alien you have earned 15 points");
}
let aliencolor3 = "red";
if(aliencolor3 === "green"){
console.log("you shot down yellow alien you have earned 5 points");
}
else if(aliencolor3 === "yellow"){
console.log("you shot down yellow alien you have earned 10 points");
}
else if(aliencolor3 === "red"){
   console.log("you shot down red alien you have earned 15 points");
}
// Q 28;
let age = 100;
if (age < 2){
   console.log("you are a baby.");
}
else if (age >= 2 && age < 4){
   console.log("you are a Toddler.");
}
else if (age >= 2 && age < 13){
   console.log("you are a kid.");
}
else if (age >= 13 && age < 20){
   console.log("you are a teenagers.");
}
else if (age >= 20 && age < 65){
   console.log("you are an Adults.");
}
else if (age >= 65){
   console.log("you are elders.");
}
// Q29;
let favorite_fruits = ["mango","strawberry","orange"]

if (favorite_fruits.includes("mango")){
   console.log("I really like mango");
}
if (favorite_fruits.includes("strawbbery")) {
   console.log("I really like strawberry");
}
if (favorite_fruits.includes("apple")) {
   console.log("I really like apple");
}
if (favorite_fruits.includes("orange")) {
   console.log("I really like orange");
}
if (favorite_fruits.includes("banana")) {
   console.log("I really like banana");
}
// Q30;
let userNames = ["Mahad","Ali","zeeshan","Admin","Usman"];
userNames.forEach(oneUser =>{
if (oneUser === "Admin"){
console.log(`Hello ${oneUser}, would you like to see a status reports? `)
}else{
   console.log(`Hello ${oneUser},thank you for logging in again`);
}
})
//Q 31;
let userName = ["Mahad","ali","Zeeshan","Admin","Usman"]
if (userNames.length === 0){
console.log("your array in empty we need to find some users!")
}else{
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thanks you for logging in again.`)
    }
})
}
// Q32;
let current_users = ["Usman","ali","Areeba","Zain","Osama"]
let new_users = ["Hamza","Ayesha","Ali","Mahad","Areeba"]
new_users.forEach(new_one_user =>{
 let our_condition = current_users.some  (current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()) 
  if(our_condition){
   console.log(`sorry ${new_one_user} is already taken!`)
   }else{
   console.log(`This userName ${new_one_user} is avaliable`)
  }
})
// Q33;
let numbers = [1,2,3,4,5,6,7,8,9];
for (let oneNumber of numbers){
    let ordinalEnding: string;
    if (oneNumber === 1){
   ordinalEnding = "st"
}
   else  if(oneNumber === 2){
     ordinalEnding = "nd"
    }
    else if (oneNumber === 3)
ordinalEnding = "rd"
   else{
       ordinalEnding = "th" 
   }
   console.log(`${oneNumber}${ordinalEnding}`);    
   }    
 // Q 34;
 let pizza = ["Chicken Tikka", "Malai cheese","Fajita"]
 for (let onePizza of pizza){
 console.log (`I like ${onePizza} pizza`);
}
console.log("Pizza is Love")
console.log("I eat pizza")
 // Q35;
 let petAnimals = ["Cat","Dog","Rabbit"]
for (let onePet of petAnimals){
   console.log(`A ${onePet} would make a great pet.`)
}
console.log("Any of these animals would make a great pet!")
//Q 36;
function make_shirt (size: string, printMessage: string){
  console.log(`you selected ${size} size shirt with ${printMessage} print on shirt`) 
}
make_Shirt("Medium","code with Anas")
//Q 37;
function make_Shirt(size: string = "Large", printMessage: string = "I love typescript" ){
  console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
}
make_Shirt();
make_Shirt("Medium")
make_Shirt("small","I Love Javascript")
//Q 38;
function describe_city (city: string, country: string = "Pakistan"){
   console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city(" Berlin", "Germany");
//Q 39;
function city_country(city: string, country: string) : string{
   return `${city} , ${country}`;
}

console.log(city_country("Karachi", "Pakistan"))

console.log(city_country("tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));
//Q 40;
function make_album(artist_name: string, album_title: string, tracks?: number){
let album: {artist: string, title: string, tracks?: number} = {
   artist: artist_name,
   title: album_title,
};
if (tracks !== undefined){
   album.tracks = tracks;
}
return album;

}
let album1 = make_album("Anas", "Album title 1");

let album2 =  make_album("usman", "Album title 2");

let album3 = make_album("ali", "Album title 3",10);
console.log(album1);
console.log(album2);
console.log(album3);
// Q41;
function show_magician(magician: string []){
   magician.forEach(name => console.log(name));
}
let magician_name = ["Harry poter", "Anas","usman"]
show_magicians(magician_name);
// Q42;
function show_magicians(magicians: string[]){
   magicians.forEach(name => console.log(name));
}
function make_Great(magicians: string[]){
  return  magicians.map(name =>`The Great ${name}`);
}
let magicians_names = ["harry poter","Anas","usman"]
let great_magicians = make_great(magician_name);
console.log(great_magicians)
show_magicians(great_magicians) 
//Q 43;
function show_magicianS(magicians: string[]){
   magicians.forEach(name => console.log(name));
}
function make_great(magicians: string[]){
  return  magicians.map(name =>`The Great ${name}`);
}
let magician_names = ["harry poter","Anas","usman"];
let copy_magician_names = magician_names.slice();
let  copy_great_names = make_great(copy_magician_names);
show_magicians(magician_names);
show_magicians(copy_great_names);
// Q44;
function makeSandwich(...items: string[]){
 console.log("\nMaking a sandwich with the following items: \n");
 items.forEach(singleitem => console.log (singleitem));
  console.log("\nNow Enjoy sandwich");
}
makeSandwich("Chicken","Cheese","Mayo","Egg");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Lettuce","Tomota");
// Q45;
function storecarInfo(manufacturer: string, modelName: string, ...extraoption: { [key : string]: any } []): object {
  const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraoption)
  }
return carInfo;
};
let answare = storecarInfo("Honda","Civic", {color:'black'}, {features: ['Navigation', 'Power window']})
console.log(answare);
























    
    
















































