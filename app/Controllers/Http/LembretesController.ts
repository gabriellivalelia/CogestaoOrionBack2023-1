import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lembrete from 'App/Models/Lembrete'
export default class LembretesController {
    public async index() {
        const lembrete = await Lembrete.all()

        return lembrete
    }

public async store({ request }: HttpContextContract) {
    const titulo = request.input('titulo')
    const descricao = request.input('descricao')

    const lembrete = await Lembrete.create({
        titulo,
        descricao,
    })
    
    return lembrete
}
public async update({params, request}) {

    const lembrete = await Lembrete.findOrFail(params.id)
    const data = request.only(['titulo','descricao'])

    lembrete.merge(data)
    await lembrete.save()

    return lembrete
    
}
public async destroy({ request }: HttpContextContract) {
    
    const id_lembrete = request.param('id_lembrete')
    if (!id_lembrete) return

    const lembrete = await Lembrete.findOrFail(id_lembrete)
    await lembrete.delete()

    return lembrete
}
}
