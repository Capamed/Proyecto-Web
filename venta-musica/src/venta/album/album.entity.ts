import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('album')

export class AlbumEntity {

    @PrimaryGeneratedColumn()
    idAlbum: number;

    @Column()
    nombreAlbum: string;

}