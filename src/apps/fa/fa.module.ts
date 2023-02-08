import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FaService } from './fa.service';
import { FaController } from './fa.controller';
import { Fa } from './entities/fa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fa])],
  controllers: [FaController],
  providers: [FaService],
  exports: [TypeOrmModule, FaService],
})
export class FaModule {}
