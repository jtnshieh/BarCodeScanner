class Api::ProductsController < ApplicationController
  def show
    @product = Product.find_by(upc_code: params[:upc_code])
    if @product
      render "api/products/show"
    else
      render json: ["Cannot find product."]
    end
  end
end
