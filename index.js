const object = {
    firstname: 'Elena',
    hobby: 'Lire'
};
console.log(object.name)

const { firstname, hobby } = object;

console.log(firstname, hobby)

const addition = (...nombres) => {
    return nombres.reduce((accumulateur, valeurActuelle) => accumulateur + valeurActuelle, 0)
}

console.log(addition(1,2,3,4))

const users = [
    {id: 1, username: 'coucou'},
    {id: 2, username: 'hibou'}
]

const newUsers = users.filter((user) => user.id !== 1 )

const displayUsers = users.map((user) => (
    <p>{user.username} - {user.id}</p>
))
