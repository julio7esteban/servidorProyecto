import { Controller, Post, Body, Get, Put, Delete,Param, Patch, NotFoundException} from '@nestjs/common';
import { ActoresService } from '../actores/actores.service';
import { Actor } from './actor.entity';


@Controller('actores')
export class ActoresController {
    constructor(private service: ActoresService) { }


        @Get()
        getAllPeliculas():any{
        
            return  this.service.getActores();
        }

        
        @Get(':id')
        get(@Param() params) {
          
            return  this.service.getActor(params.id);
        }

        @Post()
        create(@Body() acto: Actor) {
        return this.service.createActor(acto);
        }

        @Patch(':id')
        @Put()
        update(@Param() params ,@Body() acto: Actor) {
        return this.service.updateActor(params.id,acto);
        }

        @Delete(':id')
        deleteUser(@Param() params) {
        return this.service.deleteActor(params.id);
    }



}
