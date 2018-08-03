import axios from 'axios';


export default class RestResource {

    getData() {
        const testObject = [
            {
                testA: 'Hello',
            },
             {
               testA: 'React',
            },
               {
               testA: 'ABC'
            }
        ];

        return testObject

    }
}
