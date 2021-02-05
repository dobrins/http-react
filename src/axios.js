import axios from 'axios';

 const instansce = axios.create({
     baseURL: 'https://jsonplaceholder.typicode.com'
 });

 export default instansce;