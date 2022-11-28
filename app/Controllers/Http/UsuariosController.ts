import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'
import { UsuarioValidatorStore, UsuarioValidatorUpdate } from 'App/Validators/UsuarioValidator'
import { limpaCamposNulosDeObjeto } from 'App/Utils/Utils'

export default class UsuariosController {
    public async index() {
        const usuario = await Usuario.all()
    return usuario
    }

    public async store({ request }: HttpContextContract) {
        const validateData = await request.validate(UsuarioValidatorStore)
        const {nome, email} = validateData
    
    const usuario = await Usuario.create({
      nome,
      email,
    })
    
    return usuario
    }
    
    public async update({ params, request}) {
        const id = request.param('id')
        if (!id) return
        const validateData = await request.validate(UsuarioValidatorUpdate)
        const usuario = await Usuario.findOrFail(params.id)
        usuario.merge(limpaCamposNulosDeObjeto(validateData))
        await usuario.save()
    
        return usuario
      }
    
    
    public async destroy({ request }: HttpContextContract) {
    
    const id = request.param('id')
    if (!id) return
        const usuario = await Usuario.findOrFail(id)	
        await usuario.delete()
    
    return usuario
    }
    
}




