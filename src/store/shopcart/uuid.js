import { v4 as uuidv4 } from 'uuid'

export const getUUID = () => {
    //获取本地存储uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    //判断是否有uuid
    if (!uuid_token) {
        //生成游客临时token
        uuid_token = uuidv4();
        //本地存储
        localStorage.setItem('UUIDTOKEN', uuid_token)
    }
    return uuid_token;
}