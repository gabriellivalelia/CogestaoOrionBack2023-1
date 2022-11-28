import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UsuarioValidatorStore { 
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.email()]), 
  })

  public messages = {
    required: '{{field}} is required',
    string: '{{field}} must be a string', 
    email: '{{field}} must be a valid email'
  }
}
export class UsuarioValidatorUpdate { 
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }, [rules.email()]),
  })

  public messages = {
    required: '{{field}} is required',
    string: '{{field}} must be a string', 
    email: '{{field}} must be a valid email'
  }
}