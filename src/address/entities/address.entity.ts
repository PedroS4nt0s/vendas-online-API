import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'address'})
export class AddressEntity {

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'user_id', nullable: false})
    userId: number;

    @Column({name: 'complement', nullable: true})
    complement: string;

    @Column({name: 'number', nullable: false})
    numberAddress: number;

    @Column({name: 'cep', nullable: false})
    cep: string;

    @Column({name: 'city_id', nullable: false})
    cityId: number;

    @CreateDateColumn({name: 'created_at'})
    createadAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    UpdatedAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.addresses)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id'})//referenciando qual a coluna dessa entity vai ser equivalente na outra entity
    user?: UserEntity;

}
