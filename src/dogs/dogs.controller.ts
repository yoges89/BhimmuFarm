import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  findAll() {
    return this.dogsService.getAllDogs();
  }

  @Post()
  createDog(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }
}
