import { CryptoData, NewsData } from "@/services/apiService";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AggregatedData {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("jsonb", { nullable: true, default: {} })
    crypto!: CryptoData | Record<string, never>;

    @Column("jsonb", { nullable: true, default: {} })
    latest_news!: NewsData | Record<string, never>;

    @CreateDateColumn()
    created_at!: Date;
}