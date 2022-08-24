class DocumentsController < ApplicationController
  before_action :set_document, only: %i[ show update destroy ]

  # GET /documents
  def index
    @documents = Document.all

    render json: @documents
  end

  # GET /documents/1
  def show
    render json: @document
  end

  # POST /documents
  def create
    @document = Document.create!(name:params[:name], directory_id: params[:directory_id])
    @document.attachment.attach(params[:attachment])
    render json: @document, status: :created

    # if @document.save
    #   
    # else
    #   render json: @document.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /documents/1
  def update
    if @document.update(document_params)
      render json: @document
    else
      render json: @document.errors, status: :unprocessable_entity
    end
  end

  # DELETE /documents/1
  def destroy
    @document.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_document
      @document = Document.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def document_params
      params.require(:name, :directory_id, :attachment)
    end
end
