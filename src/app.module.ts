import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasModule } from './peliculas/peliculas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './modules/database-module/database.module';
import { ActoresModule } from './actores/actores.module';

@Module({
  imports: [DatabaseModule, ActoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
