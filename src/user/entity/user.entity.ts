import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false
    })
    age: number;

    @Exclude()
    @Column({
        nullable: false
    })
    password: string;

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}