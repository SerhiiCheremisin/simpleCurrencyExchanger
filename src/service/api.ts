import axios from "axios";

const baseURL:string = `https://api.exchangerate.host`

export const getCurrencyData = async (inputCur:string, outputCur: string, amount: number):Promise<any> => {
    try {
        const request = await axios.get(`${baseURL}/convert?from=${inputCur}&to=${outputCur}&amount=${amount}`);
        const respond = await request;
        return respond;

    } catch (error) {
        console.log(error)
    }
}

export const getActualCurrency = async (currency:string):Promise<any> => {
    try {
        const request = await axios.get(`${baseURL}/convert?from=${currency}&to=UAH`);
        const respond = await request;
        return respond;
    } catch (error) {
        console.log(error)
    }
}