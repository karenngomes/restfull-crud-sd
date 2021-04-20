import { IsDefined, IsNumber, IsString, Min, MinLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(2, { always: true })
    name: string;

    @Column()
    @IsNumber()
    @Min(0, { always: true })
    cost: number;

}
