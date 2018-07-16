const users = [ 
    {'id': 123,
     'name': 'Usuario 1',
     'apellido': 'Serio',
     'email': 'usuario1@test.com',
     'activo': true,
     'pais': 'Argentina',
     'NIF': '1234'},
    {'id': 223,
     'name': 'Usuario 2',
     'apellido': 'Serio',
     'email': 'usuario2@test.com',
     'activo': true,
     'pais': 'México',
     'NIF': '2234'},
    {'id': 323,
     'name': 'Usuario 3',
     'apellido': 'Serio',
     'email': 'usuario3@test.com',
     'activo': false,
     'pais': 'Ecuador',
     'NIF': '3234'},
    {'id': 423,
     'name': 'Usuario 4',
     'apellido': 'Serio',
     'email': 'usuario4@test.com',
     'activo': false,
     'pais': 'Ecuador',
     'NIF': '4234'},
    {'id': 523,
     'name': 'Usuario 5',
     'apellido': 'Serio',
     'email': 'usuario5@test.com',
     'activo': false,
     'pais': 'Argentina',
     'NIF': '5234'},
    {'id': 623,
     'name': 'Usuario 6',
     'apellido': 'Serio',
     'email': 'usuario6@test.com',
     'activo': true,
     'pais': 'México',
     'NIF': '6234'},
    {'id': 723,
     'name': 'Usuario 7',
     'apellido': 'Serio',
     'email': 'usuario7@test.com',
     'activo': false,
     'pais': 'Argentina',
     'NIF': '7234'},
    {'id': 823,
     'name': 'Usuario 8',
     'apellido': 'Serio',
     'email': 'usuario8@test.com',
     'activo': true,
     'pais': 'Argentina',
     'NIF': '8234'},
    {'id': 923,
     'name': 'Usuario 9',
     'apellido': 'Serio',
     'email': 'usuario9@test.com',
     'activo': false,
     'pais': 'México',
     'NIF': '9234'},
    {'id': 1023,
     'name': 'Usuario 10',
     'apellido': 'Serio',
     'email': 'usuario10@test.com',
     'activo': true,
     'pais': 'Ecuador',
     'NIF': '10234'}  
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
        user.activo = data.estado;
    }
}