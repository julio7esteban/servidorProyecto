import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './pelicula.entity';
import {Actor} from '../actores/actor.entity'

@Injectable()
export class PeliculasService {

    constructor(@InjectRepository(Pelicula) private peliculaRepository: Repository<Pelicula>) { }

    async getPeliculas(): Promise<Pelicula[]> {
        return await this.peliculaRepository.find({relations:["actors"]});
    }

    async getPelicula(_id: number): Promise<Pelicula[]> {
        return await this.peliculaRepository.find({
            select: ["name", "gender", "duration","synopsis"],
            relations:["actors"] ,
            where: [{ "id": _id }]
        });
    }
    async createPelicula(pelicula: Pelicula) {
        // const a =   new Actor();
        //   a.id= 1;
        //   pelicula.actors = [a];
        //pelicula.actors=[{id:1}]as any;
       return await this.peliculaRepository.save(pelicula)
          
    }

    async updatePelicula(id:number ,pelicula: Pelicula ) {
        return await  this.peliculaRepository.update(id,pelicula)
    }

    async deletePelicula(pelicula: Pelicula) {
       return await this.peliculaRepository.delete(pelicula);
    }

   



}
