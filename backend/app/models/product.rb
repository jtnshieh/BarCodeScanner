class Product < ApplicationRecord
  validates :product_name, presence: true
  validates :upc_code, presence: true, uniqueness: true

end
