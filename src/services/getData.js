import axios from 'axios';
export default getdata = (data) => {
    var body = data
    const config = {
        url: '/',
        method: 'post',
        data: body
    };

    return axios.request(config)
        .then(res=>res.data)
        .then(result=>{
            return result;
        })
}