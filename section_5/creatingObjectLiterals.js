// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@yahoo.com',
    location:'berlin',
    blogs: ['why mac and cheese rule', '10 rules to make marmite']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['name']);

user['name'] = 'chun-li';

console.log(user['name']);

console.log(typeof user);
