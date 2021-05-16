import { getRepository } from "typeorm"
import { Activity } from "../model/Activity";

interface UserId {
    id?: string;
}

class GetActivityService {
    public async execute({id}:UserId) {
        const activityRepository = getRepository(Activity);

        const activities = activityRepository.find();

        if(!activities){
            return {
                message: 'activities not found'
            }
        }

        return activities;
    }
}

export {GetActivityService}