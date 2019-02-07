import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TarjetaCreditoEntity} from "../tarjeta-credito/tarjeta-credito.entity";

@Entity('usuario')

export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({
        name:"username",
        type: "varchar",
        length: 30,    
    })
    username: string;

    @Column({
            name:"password",
            type: "varchar",
            length: 16,    
    })
    password: string;

    @Column({
        name:"nombre",
        type: "varchar",
        length: 30,    
    })
    nombre:string;

    @Column({
        name:"apellido",
        type: "varchar",
        length: 30,    
    })
    apellido:string;

    @Column({
        name: "correo",
        type: "varchar",
        length: 50
    })
    correo: string;

    @OneToMany(
        type => TarjetaCreditoEntity,
        tarjetaCredito => tarjetaCredito.usuario
    )
    //usuario tiene varias tarjetas
    tarjetasCredito: TarjetaCreditoEntity[];
}