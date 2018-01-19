import { Pipe, PipeTransform } from '@angular/core';
import { UserCars } from '../userCars';

@Pipe({  
    name: 'myfilter',  
    pure: false  
})
//TODO filter displayed cars
export class TypeCarFilter implements PipeTransform {  
    transform(items: any[], filter: UserCars): any {  
        if (!items || !filter) {  
            return items;  
        }  
        return items.filter(item => item.name.indexOf(filter.firstname) !== -1);  
    }  
}
