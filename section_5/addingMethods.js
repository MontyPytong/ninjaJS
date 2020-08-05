let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@yahoo.com',
    location:'berlin',
    blogs: ['why mac and cheese rule', '10 rules to make marmite'],
    login:function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    }
};

user.login();
user.logout();