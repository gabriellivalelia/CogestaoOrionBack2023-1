import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class LembreteValidatorStore {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    titulo: schema.string({ trim:true }),
    descricao: schema.string({ trim:true }),
    id_usuario: schema.string({ trim:true }),
  })

  public messages = {
    required: '{{field}} is required',
    string: '{{titulo, descricao}} must be a string',
  }
}