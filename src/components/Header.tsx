import '../App.css';
import { IHeaderProps } from '../types/commonTypes';

const Header = ( {props}:IHeaderProps ):JSX.Element => {
    return(
      <header>
        <span>{`For current date ${new Date().toDateString()} `}</span> <br />
        <span>{` One USA Dollar costs ${props.currencyData.USD.toFixed(2)} UAH`}</span> <br />
        <span> {`One Euro costs ${props.currencyData.EUR.toFixed(2)} UAH`} </span>
      </header>
    )
}
export default Header;