import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Usuario
Route.get('/Usuario', 'UsuariosController.index')
Route.post('/Usuario', 'UsuariosController.store')
Route.put('/Usuario/:id', 'UsuariosController.update')
Route.delete('/Usuario/:id', 'UsuariosController.destroy')

//Lembrete
Route.get('/Lembrete', 'LembretesController.index')
Route.post('/Lembrete', 'LembretesController.store')
Route.put('/Lembrete/:id', 'LembretesController.update')
Route.delete('/Lembrete/:id', 'LembretesController.destroy')