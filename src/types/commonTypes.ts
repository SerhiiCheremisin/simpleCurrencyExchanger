
export type currencyTypes = 'UAH' | 'USD' | 'EUR'

export interface ICurrencyData {
    USD: number,
    EUR: number
}

export interface IAppState {
    loading :boolean,
    currencyData : ICurrencyData,
}

export interface IHeaderProps {
    props : IAppState
}
