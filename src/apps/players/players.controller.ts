import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller()
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @MessagePattern('createPlayer')
  create(@Payload() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @MessagePattern('findAllPlayers')
  findAll() {
    return this.playersService.findAll();
  }

  @MessagePattern('findOnePlayer')
  findOne(@Payload() id: number) {
    return this.playersService.findOne(id);
  }

  @MessagePattern('updatePlayer')
  update(@Payload() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(updatePlayerDto.id, updatePlayerDto);
  }

  @MessagePattern('removePlayer')
  remove(@Payload() id: number) {
    return this.playersService.remove(id);
  }
}
