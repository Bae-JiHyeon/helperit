import APIManager from "./APIManager";

const user_Login = async (data: any) => {
    try{
        const result = await APIManager("로그인 서버 주소",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
};
