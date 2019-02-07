import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DiscoEntity} from "../disco/disco.entity";

@Entity('album')

export class AlbumEntity {

    @PrimaryGeneratedColumn()
    idAlbum: number;

    @Column({
        name:"nombreAlbum",
        type:"varchar",
        length:40
    })
    nombreAlbum: string;

    @OneToMany(
        type => DiscoEntity,
        disco=> disco.album

    )

    discos: DiscoEntity[];


}