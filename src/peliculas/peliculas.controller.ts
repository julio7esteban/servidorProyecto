import { Controller, Post, Body, Get, Put, Delete,Param, Patch, NotFoundException} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from './pelicula.entity';

@Controller('peliculas')
export class PeliculasController {

        constructor(private service: PeliculasService) { }


        @Get()
        getAllPeliculas():any{
        
            return  this.service.getPeliculas();
        }

        
        @Get(':id')
        get(@Param() params) {
          
            return  this.service.getPelicula(params.id);
        }

        @Post()
        create(@Body() peli: Pelicula) {
         // const d =   new Pelicula();
          
        return this.service.createPelicula(peli);
        }

        @Patch(':id')
        update(@Param() params ,@Body() peli: Pelicula) {
        return this.service.updatePelicula(params.id,peli);
        }

        @Delete(':id')
        deleteUser(@Param() params) {
        return this.service.deletePelicula(params.id);
    }

   
}
