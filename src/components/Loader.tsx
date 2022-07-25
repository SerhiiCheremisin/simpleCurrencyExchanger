import '../loader.css';

const Loader = ():JSX.Element => {
    return(
        <div style={{width :'100%', height: '100vh', background : 'black'}}>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;