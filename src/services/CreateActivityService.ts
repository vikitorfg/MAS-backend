import {getRepository} from 'typeorm';
import {Activity} from '../model/Activity';

interface ActivityData {
    name: string;
    activity_date: string;
    course_unit_id: string;
}

class CreateActivityService {
    public async execute({name,activity_date,course_unit_id}:ActivityData){
        
        const activityRepository = getRepository(Activity);

        const activity = activityRepository.create({
            name,
            activity_date,
            course_unit_id
        });

        await activityRepository.save(activity)

        return activity;
    }
}

export {CreateActivityService};