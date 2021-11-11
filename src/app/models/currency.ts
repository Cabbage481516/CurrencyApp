import { Course } from './course';

export interface Currency {
    countryCode: string;
    courses: Course[];
}
