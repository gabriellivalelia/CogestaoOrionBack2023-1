import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Usuario from "App/Models/Usuario";
import {UsuarioValidatorUpdate, UsuarioValidatorStore} from "App/Validators/UsuarioValidator";
import { limpaCamposNulosDeObjeto } from 'App/Utils/Utils'

export default class UsuariosController {
  public async index() {
    const user = await Usuario.all();
    return user;
  }

  public async store({ request }: HttpContextContract) {
    const validateData = await request.validate(UsuarioValidatorStore)

    const nome = validateData.nome
    const email = validateData.email

    const user = await Usuario.create({
      nome,
      email,
    });

    return user;
  }

  public async update({ params, request }) {
    const id = request.param('id')
    if (!id) return
    const validateData = await request.validate(UsuarioValidatorUpdate)
    const user = await Usuario.findOrFail(params.id)

    user.merge(limpaCamposNulosDeObjeto(validateData))

    await user.save()

    return user
  }

  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id_usuario')
    if (!id) return
		const user = await Usuario.findOrFail(id)
    await user.delete()

    return user
  }
}
