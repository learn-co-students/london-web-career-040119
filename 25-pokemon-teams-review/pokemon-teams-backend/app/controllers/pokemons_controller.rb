class PokemonsController < ApplicationController

    def create
        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        if Trainer.find(params[:trainer_id]).pokemons.count < 6
            @pokemon = Pokemon.create(nickname: name, species: species, trainer_id: params[:trainer_id])
            render json: @pokemon
        else
            # We need to tell the render macro to respond with a Bad Request error
            # Is there a more appropriate status code? Check here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
            render json: {message: 'Too many pokemons!'}, status: 400
        end
    end

    def destroy
        @pokemon = Pokemon.find(params[:id])
        @pokemon.delete
        render json: @pokemon        
    end
end
