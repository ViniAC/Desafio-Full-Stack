import { hash } from "bcrypt";
import { MigrationInterface, QueryRunner } from "typeorm";

import User from "../../modules/accounts/entities/User";

export class CreateDefaultUser1626547047529 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const nome = "admin";
        const senha = "admin123";
        const passwordHash = await hash(senha, 8);

        const user = queryRunner.manager.create(User);
        user.nome = nome;
        user.senha = passwordHash;
        await queryRunner.manager.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.delete(User, { nome: "admin" });
    }
}
