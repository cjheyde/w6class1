//ref. https://www.youtube.com/watch?v=NJ_qbsLf52w&t=1s -> video explaining
function Name() {
    const chooseName = () => {
        const names = ['Ana', 'Bianca', 'Joao', 'Maria'];
        const nameChosen = Math.floor(Math.random()*4);
        return names[nameChosen];
    }

    return (
        <div class='name'>
            <h2>
                Today the luck is with {chooseName()} =)
            </h2>
        </div>
    )
}

export default Name;