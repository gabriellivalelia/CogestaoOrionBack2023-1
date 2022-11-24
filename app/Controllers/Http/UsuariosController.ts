import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async index() {
        const usuario = await Usuario.all()

        return usuario
    }

public async store({ request }: HttpContextContract) {
    const nome = request.input('nome')
    const email = request.input('email')

    const usuario = await Usuario.create({
        nome,
        email,
    })
    
    return usuario
}
public async destroy({ request }: HttpContextContract) {
    
    const id_usuario = request.param('id_usuario')
    if (!id_usuario) return

    const usuario = await Usuario.findOrFail(id_usuario)
    await usuario.delete()

    return usuario
}
}
