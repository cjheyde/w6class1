//ref. https://www.youtube.com/watch?v=NJ_qbsLf52w&t=1s -> video explaining
const Name = () => {
    const chooseName = () => {
        const names = ['Ana', 'Bianca', 'Joao', 'Maria'];
        const nameChosen = Math.floor(Math.random()*4);
        return names[nameChosen];
    }

    return (
        <main class='main'>
            <h2>
                Today the luck is with {chooseName()} =)
            </h2>
        </main>
    )
}

export default Name