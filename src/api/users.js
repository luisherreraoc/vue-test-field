const users = [ 
    {'id': 123,
     'name': 'Usuario 1',
     'apellido': 'Testing',
     'email': 'usuario1@test.com',
     'activo': true,
     'pais': 'Argentina',
     'NIF': '1234'},
    {'id': 223,
     'name': 'Usuario 2',
     'apellido': 'Tester',
     'email': 'usuario2@test.com',
     'activo': true,
     'pais': 'México',
     'NIF': '2234'},
    {'id': 323,
     'name': 'Usuario 3',
     'apellido': 'Tester',
     'email': 'usuario3@test.com',
     'activo': false,
     'pais': 'Ecuador',
     'NIF': '3234'},
    {'id': 423,
     'name': 'Usuario 4',
     'apellido': 'Testing',
     'email': 'usuario4@test.com',
     'activo': false,
     'pais': 'Ecuador',
     'NIF': '4234'},
    {'id': 523,
     'name': 'Usuario 5',
     'apellido': 'Testing',
     'email': 'usuario5@test.com',
     'activo': false,
     'pais': 'Argentina',
     'NIF': '5234'},
    {'id': 623,
     'name': 'Usuario 6',
     'apellido': 'Tester',
     'email': 'usuario6@test.com',
     'activo': true,
     'pais': 'México',
     'NIF': '6234'},
    {'id': 723,
     'name': 'Usuario 7',
     'apellido': 'Testing',
     'email': 'usuario7@test.com',
     'activo': false,
     'pais': 'Argentina',
     'NIF': '7234'},
    {'id': 823,
     'name': 'Usuario 8',
     'apellido': 'Tester',
     'email': 'usuario8@test.com',
     'activo': true,
     'pais': 'Argentina',
     'NIF': '8234'},
    {'id': 923,
     'name': 'Usuario 9',
     'apellido': 'Tester',
     'email': 'usuario9@test.com',
     'activo': false,
     'pais': 'México',
     'NIF': '9234'},
    {'id': 1023,
     'name': 'Usuario 10',
     'apellido': 'Testing',
     'email': 'usuario10@test.com',
     'activo': true,
     'pais': 'Ecuador',
     'NIF': '10234'},
     {'id': 1123,
     'name': 'Usuario 11',
     'apellido': 'Testing',
     'email': 'usuario11@test.com',
     'activo': true,
     'pais': 'Argentina',
     'NIF': '11234'},
    {'id': 1223,
     'name': 'Usuario 12',
     'apellido': 'Testing',
     'email': 'usuario12@test.com',
     'activo': true,
     'pais': 'México',
     'NIF': '12234'},
    {'id': 1323,
     'name': 'Usuario 13',
     'apellido': 'Testing',
     'email': 'usuario3@test.com',
     'activo': false,
     'pais': 'Ecuador',
     'NIF': '13234'},
    {'id': 1423,
     'name': 'Usuario 14',
     'apellido': 'Testing',
     'email': 'usuario14@test.com',
     'activo': false,
     'pais': 'Ecuador',
     'NIF': '14234'},
    {'id': 1523,
     'name': 'Usuario 15',
     'apellido': 'Testing',
     'email': 'usuario15@test.com',
     'activo': false,
     'pais': 'Argentina',
     'NIF': '15234'},
    {'id': 1623,
     'name': 'Usuario 16',
     'apellido': 'Testing',
     'email': 'usuario16@test.com',
     'activo': true,
     'pais': 'México',
     'NIF': '16234'},
    {'id': 1723,
     'name': 'Usuario 17',
     'apellido': 'Testing',
     'email': 'usuario17@test.com',
     'activo': false,
     'pais': 'Argentina',
     'NIF': '17234'},
    {'id': 1823,
     'name': 'Usuario 18',
     'apellido': 'Tester',
     'email': 'usuario18@test.com',
     'activo': true,
     'pais': 'Argentina',
     'NIF': '18234'},
    {'id': 1923,
     'name': 'Usuario 19',
     'apellido': 'Testing',
     'email': 'usuario19@test.com',
     'activo': false,
     'pais': 'México',
     'NIF': '19234'},
    {'id': 2023,
     'name': 'Usuario 20',
     'apellido': 'Tester',
     'email': 'usuario20@test.com',
     'activo': true,
     'pais': 'Ecuador',
     'NIF': '20234'}    
]

export default {
    getUsers (cb) {
        setTimeout(()=> cb(users), 100)
    },
    getSingleUser (id) {
        return users.find(user => user.id === id)
    },
    updateUser (id, data) {
        let user = this.getSingleUser(id);

        user.name = data.name;
        user.apellido = data.apellido;
    },
    archiveUser (id) {
        let currentUser = users.find(user =>user.id === id);
        for (let user of users) {
            if (user == currentUser) {
                users.splice(user, 1);
            }
        }
        return users;
    }
}