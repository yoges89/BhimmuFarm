import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class DogsService {
  getAllDogs() {
    return [
      {
        name: 'Sunny',
        age: 5,
        breed: 'Desi',
      },
      {
        name: 'Kalu',
        age: 3,
        breed: 'Khanabadosh',
      },
    ];
  }

  create(createDogDto: CreateDogDto) {
    try {
      const dogsString = readFileSync('./src/dogs/dogs.json');
      const dogsJson = JSON.parse(dogsString.toString());
      dogsJson.push(createDogDto);
      writeFileSync('./src/dogs/dogs.json', JSON.stringify(dogsJson));
    } catch (err) {
      console.log(err.message);
    }
  }
}
