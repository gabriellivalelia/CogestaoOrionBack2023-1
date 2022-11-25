import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class LembreteValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_usuario: schema.string({ trim: true }),
    titulo: schema.string({ trim: true }),
    descricao: schema.string({ trim: true }),
  })

  public messages = {
    required: '{{ field }} is required',
    string: '{{ field }} must be a string',
  }
}
export class LembreteValidatorUpdate {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    titulo: schema.string.optional({ trim: true }),
    descricao: schema.string.optional({ trim: true }),
  })

  public messages = {
    string: '{{ field }} must be a string',
  }
}