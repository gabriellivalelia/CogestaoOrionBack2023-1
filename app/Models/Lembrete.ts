import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  beforeCreate,
  belongsTo,
  BelongsTo,
} from "@ioc:Adonis/Lucid/Orm";
import Usuario from "./Usuario";
import { v4 as uuid } from "uuid";

export default class Lembrete extends BaseModel {
  @column({ isPrimary: true })
  //o tipo da id é alterado para string
  public id_lembrete: string;

  @beforeCreate()
  public static async createUUID(model: Lembrete) {
    model.id_lembrete = uuid();
  }

  //adicionamos os colunas da tabela
  @column()
  public titulo: string;

  @column()
  public descricao: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public id_usuario: string;

  @belongsTo(() => Usuario, {
    localKey: "id_usuario",
  })
  public user: BelongsTo<typeof Usuario>;
}
