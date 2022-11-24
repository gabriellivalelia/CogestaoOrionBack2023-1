import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Usuario from "App/Models/Usuario";

export default class UsuariosController {
  public async index() {
    const user = await Usuario.all();
    return user;
  }

  public async store({ request }: HttpContextContract) {
    const nome = request.input("nome");
    const email = request.input("email");

    const user = await Usuario.create({
      nome,
      email,
    });

    return user;
  }

  public async update({ params, request }) {

    const user = await Usuario.findOrFail(params.id_usuario)
    const data = request.only(['nome', 'email'])

    user.merge(data)
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
