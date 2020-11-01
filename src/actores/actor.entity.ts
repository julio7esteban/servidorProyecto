import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:"40" })
    name:string;

    @Column()
    age:number;

    @Column({length: "200"})
    photo:string;


}
