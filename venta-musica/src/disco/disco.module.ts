import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {DiscoEntity} from "./disco.entity";
import {DiscoController} from "./disco.controller";

@Module(
    {
        imports:[TypeOrmModule.forFeature([DiscoEntity])],
        controllers:[DiscoController],
        providers:[]
    }
)