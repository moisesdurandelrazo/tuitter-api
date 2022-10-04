import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { searchTerm, orderBy } = filterQuery;
    return this.tuitService.getTuits();
  }

  @Get(':id')
  grtTuit(@Param('id') id: string): Tuit {
    return this.tuitService.getTuit(id);
  }

  @Post()
  // SE QUITA EL REQUEST 201
  //   @HttpCode(HttpStatus.NO_CONTENT)
  //ver todo el boy solo se quita el messa y se cambia por body
  createTuit(@Body('message') message: string): void {
    return this.tuitService.createTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body('message') tuit): Tuit {
    return this.tuitService.updateTuit(id, tuit);
  }

  @Delete(':id')
  removeTuit(@Param('id') id: string): void {
    return this.tuitService.removeTuit(id);
  }
}
