import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
         'Client-ID dIrN34rWZYIUn_7VJK7B3DV3inpyG6XTixCyyBtz0Nw'
    }
}

)