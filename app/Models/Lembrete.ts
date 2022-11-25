import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import {v4 as uuid} from 'uuid'
import Usuario from './Usuario'

export default class Lembrete extends BaseModel {

  @column({ isPrimary: true })
  public id_lembrete: string

  @beforeCreate()
  public static async createUUID(model:Lembrete){
    model.id_lembrete = uuid()
  }

  @column()
  public titulo: string

  @column()
  public descricao: string

  @column()
  public id_usuario: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Usuario, {
    localKey: 'id_usuario'
  })
  public usuario: BelongsTo<typeof Usuario>
}
