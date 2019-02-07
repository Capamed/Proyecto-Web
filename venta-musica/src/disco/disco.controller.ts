import {Controller} from "@nestjs/common";
import {DiscoService} from "./disco.service";

@Controller('disco')

export class DiscoController {
    constructor(private readonly _discoService:DiscoService){}

}