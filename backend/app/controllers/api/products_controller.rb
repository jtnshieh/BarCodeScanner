class Api::ProductsController < ApplicationController
  def show
    @product = Product.find_by_id(params[:id])
    if @product
      render "api/products/show"
    else
      render json: ["Cannot find product."]
    end
  end
end
