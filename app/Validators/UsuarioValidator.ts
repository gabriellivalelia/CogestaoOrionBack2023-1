import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export class UsuarioValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.email()]),
  })

  public messages: CustomMessages = {
    'required': 'Digite um {{field}}',
    'email': 'Insira um email válido',
  }
}

export class UsuarioValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }, [rules.email()]),
  })

  public messages = {
    'email': 'Insira um email válido',
  }
}

