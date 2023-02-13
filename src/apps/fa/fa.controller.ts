import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FaService } from './fa.service';
import { CreateFaDto } from './dto/create-fa.dto';
import { UpdateFaDto } from './dto/update-fa.dto';

@Controller()
export class FaController {
  constructor(private readonly faService: FaService) {}

  @MessagePattern('createFa')
  create(@Payload() createFaDto: CreateFaDto) {
    return this.faService.create(createFaDto);
  }

  @MessagePattern('findAllFa')
  findAll() {
    return this.faService.findAll();
  }

  @MessagePattern('findOneFa')
  findOne(@Payload() id: number) {
    return this.faService.findOne(id);
  }

  @MessagePattern('updateFa')
  update(@Payload() id: number, updateFaDto: UpdateFaDto) {
    return this.faService.update(id, updateFaDto);
  }

  @MessagePattern('removeFa')
  remove(@Payload() id: number) {
    return this.faService.remove(id);
  }
}
