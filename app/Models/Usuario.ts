import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  hasMany,
  HasMany,
  beforeCreate,
  belongsTo,
  BelongsTo,
} from "@ioc:Adonis/Lucid/Orm";
import Lembrete from "./Lembrete";
import { v4 as uuid } from "uuid";

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  //o tipo da id é alterado para string
  public id_usuario: string;

  @beforeCreate()
  public static async createUUID(model: Usuario) {
    model.id_usuario = uuid();
  }

  //adicionamos os colunas da tabela
  @column()
  public nome: string;

  @column()
  public email: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Lembrete, {
    foreignKey: "id_usuario",
  })
  public lembrete: HasMany<typeof Lembrete>;

  @belongsTo(() => Usuario, {
    localKey: "id_usuario",
  })
  public user: BelongsTo<typeof Usuario>;
}
