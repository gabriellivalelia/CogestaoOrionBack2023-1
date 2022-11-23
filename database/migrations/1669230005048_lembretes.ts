import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'lembretes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id_lembrete').primary()
      table.string('id_usuario').references('id_usuario').inTable('usuarios').onDelete('CASCADE')
      table.string('titulo').notNullable()
      table.string('descricao').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
