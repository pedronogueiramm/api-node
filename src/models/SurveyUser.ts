import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("surveys_users")
class SurveyUser {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    users_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name:"users_id"})
    user: User
    
    @Column()
    surveys_id: string;

    @ManyToOne(() => Survey)
    @JoinColumn({name:"surveys_id"})
    survey: Survey

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { SurveyUser };
