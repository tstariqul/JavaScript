// const tip = function(bill){
//   return bill>1 && bill<300? bill*2: bill*1.5;
// }

const tip = bill => (bill > 1 && bill < 300 ? bill * 2 : bill * 1.5);
const bills = [100, 400, 22];
const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, bills, total);

const profile = {
  firstName: "Tariqul",
  lastName: "Islam",
  age: 2021 - 1998,
  occupation: "student",
  friends: ["Tanvir", "Eran", "Shawon"]
};
console.log(profile);
console.log(profile.firstName);
console.log(profile["firstName"]);
const name = "Name";
console.log(profile["first" + name]);
console.log(profile["last" + name]);

profile.location = "Bd";
profile["fb"] = "@tistariqul";
console.log(profile);

console.log(
  `${profile.firstName} has ${
    profile.friends.length
  } friends but best friend is ${profile.friends[1]}`
);
