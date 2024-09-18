import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'address'})
export class AddressEntity {

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'user_id', nullable: false})
    userId: number;

    @Column({name: 'complemento', nullable: true})
    complemento: string;

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
}
