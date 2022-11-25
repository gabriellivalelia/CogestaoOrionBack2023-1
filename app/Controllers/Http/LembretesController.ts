import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lembrete from 'App/Models/Lembrete'

export default class LembretesController {
    public async index() {
        const lembrete = await Lembrete.all();
        return lembrete;
      }
    
      public async store({ request }: HttpContextContract) {
        const titulo = request.input("titulo");
        const descricao = request.input("descricao");
        const id_usuario = request.input("id_usuario");
    
        const lembrete = await Lembrete.create({
          titulo,
          descricao,
          id_usuario,
        });
    
        return lembrete;
      }
    
      public async update({ params, request }) {
    
        const lembrete = await Lembrete.findOrFail(params.id_Lembrete)
        const data = request.only(['titulo', 'descricao'])
    
        lembrete.merge(data)
        await lembrete.save()
    
        return lembrete
      }
    
      public async destroy({ request }: HttpContextContract) {
        const id = request.param('id_Lembrete')
        if (!id) return
            const lembrete = await Lembrete.findOrFail(id)
        await lembrete.delete()
    
        return lembrete
      }
}
 