import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export  class UsuarioValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true}),
    email: schema.string({}, [rules.email()])
  })

  public messages: CustomMessages = {
    required: '{{ field }} is required',
    string: '{{ field }} must be a string',
    email: '{{ field }} must be a valid email',
  }

}

