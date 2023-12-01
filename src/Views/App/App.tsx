

const App = (props: any) => {
    return(
        <button onClick={() => {
            props.logout();
        }}>Wyloguj {localStorage.getItem('username')}</button>
    )

}

export default App;