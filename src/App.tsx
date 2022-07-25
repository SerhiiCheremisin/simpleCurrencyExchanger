import React, {useEffect, useState} from 'react';
import './App.css';
import { getActualCurrency } from './service/api';
import { currencyTypes, IAppState } from './types/commonTypes';

//components
import Header from './components/Header';
import CurrencyBody from './components/CurrencyBody';
import Loader from './components/Loader';

function App():JSX.Element {

  const [appState, setAppState] = useState<IAppState>({
    loading : true,
    currencyData : {
      USD: 0,
      EUR: 0
    },
  })

useEffect(() => {
  const USD = getActualCurrency('USD')
  .then(data => {
     return data.data.info.rate
  })
  const EUR = getActualCurrency('EUR')
  .then(data => {
     return data.data.info.rate
  })

  Promise.all([USD, EUR])
  .then(data => {
    setAppState({
      ...appState, currencyData : {
        USD: data[0],
        EUR: data[1]
      },
      loading : false
    })
  })
},[])

 if (appState.loading) {
  return(
    <>
    <Loader/>
    </>
  )
 }
 
  return (
    <div className="app-wrapper">
      <Header props={appState}/>
      <CurrencyBody/>
    </div>
  );
}

export default App;
