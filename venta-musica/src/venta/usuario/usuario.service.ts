import {Injectable} from "@nestjs/common";

import {InjectRepository} from "@nestjs/typeorm"
import {UsuarioEntity} from "./usuario.entity";
import {FindManyOptions,Repository} from "typeorm";
import {Usuario} from "../venta.controller"
@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ){

    }


    crearUsuario(usuario:Usuario):Promise<UsuarioEntity>{
        const usuarioEntity: UsuarioEntity = this._usuarioRepository.create(usuario);
        return this._usuarioRepository.save(usuarioEntity);
    }

}

