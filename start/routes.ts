import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Usuarios
Route.get('/usuarios', 'UsuariosController.index')
Route.post('/usuarios', 'UsuariosController.store')
Route.delete('/usuarios/:id_usuario', 'UsuariosController.destroy')

//Lembretes
Route.get('/lembretes', 'LembretesController.index')
Route.get('/lembretes/:id_usuario', 'LembretesController.indexGetElementById')
Route.post('/lembretes', 'LembretesController.store')
Route.put('/lembretes/:id_lembrete', 'LembretesController.update')
Route.delete('/lembretes/:id_lembrete', 'LembretesController.destroy')
