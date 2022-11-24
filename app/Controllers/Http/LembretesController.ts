import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lembrete from 'App/Models/Lembrete'
import { LembreteValidatorStore } from 'App/Validators/LembreteValidator'


export default class LembretesController {
    public async index() {

        const lembrete = await Lembrete.all()

        return lembrete
    }

    public async store({ request }: HttpContextContract) {

        const validateData = await request.validate(LembreteValidatorStore)

        // const titulo = request.input('titulo')
        // const descricao = request.input('descricao')

        const { titulo, descricao } = validateData
    
        const lembrete = await Lembrete.create({
            titulo,
            descricao,
        })

        return lembrete
    }

    public async update({ params, request }) {

        const lembrete = await Lembrete.findOrFail(params.id_lembrete)
        const data = request.only(['titulo', 'descricao'])

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
