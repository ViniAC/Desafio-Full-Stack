import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("persons")
class Person {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    sexo?: string;

    @Column()
    email?: string;

    @Column("timestamp with time zone")
    dataNasc: Date;

    @Column()
    naturalidade?: string;

    @Column()
    nacionalidade?: string;

    @Column()
    cpf: string;

    @Column()
    inactive: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Person;
