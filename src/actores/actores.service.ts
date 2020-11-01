import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actor } from './actor.entity';


@Injectable()
export class ActoresService {

    constructor(@InjectRepository(Actor) private actorRepository: Repository<Actor>) { }

    async getActores(): Promise<Actor[]> {
        return await this.actorRepository.find();
    }

    async getActor(_id: number): Promise<Actor[]> {
        return await this.actorRepository.find({
            select: ["name", "age", "photo"],
            where: [{ "id": _id }]
        });
    }
    async createActor(actor: Actor) {
       return await this.actorRepository.save(actor)
          
    }

    async updateActor(id:number ,actor: Actor ) {
        return await  this.actorRepository.update(id,actor)
    }

    async deleteActor(actor: Actor) {
       return await this.actorRepository.delete(actor);
    }

   





}
