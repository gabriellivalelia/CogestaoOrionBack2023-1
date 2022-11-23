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
}
