import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@Controller()
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @MessagePattern('createClub')
  create(@Payload() createClubDto: CreateClubDto) {
    return this.clubsService.create(createClubDto);
  }

  @MessagePattern('findAllClubs')
  findAll() {
    return this.clubsService.findAll();
    // return "hello"
  }

  @MessagePattern('findOneClub')
  findOne(@Payload() id: number) {
    return this.clubsService.findOne(id);
    // return id
  }

  @MessagePattern('updateClub')
  update(@Payload() updateClubDto: UpdateClubDto) {
    return this.clubsService.update(updateClubDto.id, updateClubDto);
  }

  @MessagePattern('removeClub')
  remove(@Payload() id: number) {
    return this.clubsService.remove(id);
  }
}
