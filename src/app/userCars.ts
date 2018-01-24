export class UserCars{
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    cars:[{
        id: number;
        make: string;
        model: string;
        type: string;
        registration: string;
        seating: number;
        doors: number;
        mileage: number;
        batterycapacity: number;
        lat: number;
        lng: number;
        images: string;
        description: string;
        available: string; 
        price: string;
        paid: string;
    }]
}