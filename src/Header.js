//ref. https://www.youtube.com/watch?v=NJ_qbsLf52w&t=1s -> video explaining
function Header() {
    const chooseName = () => {
        const names = ['Ana', 'Bianca', 'Joao', 'Maria'];
        const nameChosen = Math.floor(Math.random()*4);
        return names[nameChosen];
    }

    return (
        <header>
            <h1>
                Header: Today the luck is with {chooseName()} =)
            </h1>
        </header>
    )
}

export default Header;