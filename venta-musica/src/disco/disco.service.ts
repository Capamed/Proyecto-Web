import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()

export class DiscoService {
    constructor(
        @InjectRepository())

}