import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Actor} from "../actores/actor.entity";

@Entity()
export class Pelicula {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:"40" })
    name:string;

    @Column()
    duration:number;

    @Column({length: "40"})
    gender:string;

    @Column({length: "300"})
    synopsis:string;

    @ManyToMany(type =>Actor )
    @JoinTable()
    actors: Actor[];

    

    


    

}
