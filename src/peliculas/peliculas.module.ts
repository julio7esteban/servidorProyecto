import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './pelicula.entity';
import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Pelicula])],
  providers: [PeliculasService],
  controllers: [PeliculasController]
})
export class PeliculasModule {}
