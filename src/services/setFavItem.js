import axios from 'axios';
export default setFavItem = (item) => {
    var body = item
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