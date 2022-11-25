import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class LembreteValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    titulo: schema.string({ trim: true }),
    descricao: schema.string({ trim: true }),
    id_usuario: schema.string({ trim: true })
  })

  public messages: CustomMessages = {
    'required': 'Digite um {{field}}',
  }
}

export class LembreteValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    titulo: schema.string.optional({ trim: true }),
    descricao: schema.string.optional({ trim: true }),
    id_usuario: schema.string.optional({ trim: true })
  })

  public messages: CustomMessages = {}
}
