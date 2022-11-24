import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Usuarios
Route.get('/usuarios', 'UsuariosController.index')
Route.post('/usuarios', 'UsuariosController.store')
Route.put('/usuarios/:id', 'UsuariosController.update')
Route.delete('/usuarios/:id', 'UsuariosController.destroy')

//Lembrete
Route.get('/Lembrete', 'LembreteController.index')
Route.post('/Lembrete', 'LembreteController.store')
Route.put('/Lembrete/:id', 'LembreteController.update')
Route.delete('/Lembrete/:id', 'LembreteController.destroy')