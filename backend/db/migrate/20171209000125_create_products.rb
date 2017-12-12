class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.string :upc_code, null: false
      t.timestamps
    end
    add_index :products, :upc_code, unique: true
  end
end
