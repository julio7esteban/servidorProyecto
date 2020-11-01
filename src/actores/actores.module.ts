import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActoresService } from './actores.service';
import { ActoresController } from './actores.controller';
import { Actor } from './actor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Actor])],
  providers: [ActoresService],
  controllers: [ActoresController]
})
export class ActoresModule {}
