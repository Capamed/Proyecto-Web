import { Controller } from "@nestjs/common";
import {GeneroService} from "./genero.service";

@Controller('genero')

export class GeneroController{
    constructor(private readonly _generoService:GeneroService){}

}