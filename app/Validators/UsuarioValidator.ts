import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UsuarioValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim:true }),
    email: schema.string({}, [rules.email()]),
  })

  public messages = {
    required: '{{field}} is required',
    string: '{{nome}} must be a string',
    email: '{{email}} must be a valid email',
  }
}
