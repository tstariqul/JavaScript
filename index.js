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
  year: 1998,
  occupation: "student",
  friends: ["Tanvir", "Eran", "Shawon"],
  hasDriverLicense: true,
  age: function(date) {
    return 2021 - date;
  },
  ageYear: function() {
    console.log(this);
    this.birthday = 2021 - this.year;
    return this.birthday;
  },
  license: function() {
    return `${this.firstName} is a ${this.ageYear()} years old and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driving license`;
  }
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
console.log(profile.age(1998));
console.log(profile["age"](1998));
console.log(profile.ageYear());
console.log(profile.birthday);
console.log(profile.license());
