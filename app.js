const HandyStorage = require('handy-storage');
 
const storage = new HandyStorage({
    beautify: true
});
 
storage.connect('./information.json'); 
storage.setState({
    name: 'Alireza',
    lastname: 'Sh',
    friends: [
        'Jane',
        'John'
    ],
    visited: storage.state.visited || 0
})
 
storage.setState({
    visited: storage.state.visited + 1
})

console.log(JSON.stringify(storage.state))
