import {Column, CreateDateColumn, Entity,  OneToMany, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { Activity } from "./Activity";

@Entity("course_unit")
class CourseUnit {

    constructor(){
        if(!this.id){
           this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;
    
    @OneToMany(()=> Activity, activity => activity.course_unit)
    activities: Activity[]

    @Column()
    name: string;

    @Column()
    description: Text;

    @CreateDateColumn()
    created_at: Date;
}

export {CourseUnit}