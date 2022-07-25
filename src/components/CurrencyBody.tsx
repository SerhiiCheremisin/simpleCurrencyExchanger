import '../App.css';
import React, {useEffect, useState} from 'react';
import { currencyTypes } from '../types/commonTypes';
import { getCurrencyData } from '../service/api';


const CurrencyBody = ():JSX.Element => {
    const [inputValue, setInputValue] = useState<currencyTypes>('UAH');
    const [outputValue, setOutputValue] = useState<currencyTypes>('UAH');
    const [amount, setAmount] = useState<number>(0);
    const [result, setResult] = useState<number>(0);


    const currencyArray: currencyTypes[] = ['UAH', 'USD', 'EUR'];
   
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value;
        if (Number(target) >= 0){
            setAmount(Number(target))
        }
        return
    }
    useEffect(() => {
        getCurrencyData(inputValue, outputValue, amount)
        .then(data => {
            setResult(data.data.result.toFixed(2))
        })
      
    },[amount, inputValue])

    useEffect(() => {
        getCurrencyData(outputValue, inputValue, result)
        .then(data => {
            setAmount(data.data.result.toFixed(2))
        })
    },[result, outputValue])

    return(
      <div className='app-wrapper--body'>
        <h2>Chose currency between 2 values</h2>
         <form action="#">
           <label htmlFor="input">Chose first value</label>
            <select onChange={(e:any) => setInputValue(e.target.value)} name="input" id="input">
                {currencyArray.map((el:currencyTypes, id:number) => {
                  return (
                    <option key={id} value={el}>{el}</option>
                  )
                })}
            </select>
            <input value={amount} onChange={(e:any) => setAmount(e.target.value)}  type="number" />
            <label htmlFor="output">Chose latter value</label>
            <select onChange={(e:any) => setOutputValue(e.target.value)} name="output" id="output">
            {currencyArray.map((el:currencyTypes, id:number) => {
                  return (
                    <option key={id} value={el}>{el}</option>
                  )
                })}
            </select>
            <input value={result} onChange={(e:any) => setResult(e.target.value)} type="number" />
         </form>
      </div>
    )
}
export default CurrencyBody;