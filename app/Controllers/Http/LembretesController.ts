import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lembrete from 'App/Models/Lembrete'
import { LembreteValidatorStore, LembreteValidatorUpdate } from 'App/Validators/LembreteValidator'
import { limpaCamposNulosDeObjeto } from 'App/Utils/Utils'

export default class LembretesController {
    public async index() {
        const lembrete = await Lembrete.all()
    return lembrete
    }

    public async store({ request }: HttpContextContract) {
        const validateData = await request.validate(LembreteValidatorStore)
        const {titulo, descricao} = validateData
    
    const lembrete = await Lembrete.create({
      titulo,
      descricao,
    })
    
    return lembrete
    }
    
    public async update({ params, request }) {
    
        const id = request.param('id')
        if (!id) return
        const validateData = await request.validate(LembreteValidatorUpdate)
        const lembrete = await Lembrete.findOrFail(params.id)
    
        lembrete.merge(limpaCamposNulosDeObjeto(validateData))
        await lembrete.save()
    
        return lembrete
    }
    
    public async destroy({ request }: HttpContextContract) {
    
    const id = request.param('id')
    if (!id) return
        const lembrete = await Lembrete.findOrFail(id)	
        await lembrete.delete()
    
    return lembrete
    }

}



