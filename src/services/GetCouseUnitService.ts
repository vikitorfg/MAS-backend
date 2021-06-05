import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface UserId {
    id?: string;
}

class GetCourseUnitService {
    public async execute({id}:UserId) {

        const courseUnitRepository = getRepository(CourseUnit);

        const courseUnit = courseUnitRepository.find();

        if(!courseUnit){
            return {
                message: 'courseUnit not found'
            }
        }

        return courseUnit;

    }
}

export {GetCourseUnitService}