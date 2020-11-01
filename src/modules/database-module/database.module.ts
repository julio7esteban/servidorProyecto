import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PeliculasModule } from  '../../peliculas/peliculas.module';
import {  ActoresModule} from  '../../actores/actores.module';

@Module({
	imports:[
		TypeOrmModule.forRoot({
			type: 'mysql',// type database  
			host:'localhost',//server  database
			port:3306, // port the database
			username:'root', //user database
			password: '', 
			database:'proyectoprueba',
			entities:["dist/**/**.entity{.ts,.js}"],
			synchronize:true
		}),
		PeliculasModule,ActoresModule
		
	]
	
})
export class DatabaseModule {
	constructor( private readonly connection:Connection){
	}
}
