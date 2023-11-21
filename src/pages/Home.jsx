import { Countdown } from '../Countdown.jsx'

export const Home = () => {
    return (
        <>

            <div className="PageInfo">
                <div className="infoBox">
                    <p className='Text'>Home</p>
                </div>
            </div>

            <div className="MidBox">
                <div className="Tittle">
                    <h1>Pietra</h1>
                    <h1>Faz 3 anos</h1>
                </div>
            </div>

            <div className="MidBox">
                <p className='Subtittle'>Restam</p>
                < Countdown />
            </div>

            <div className="MidBox">
                <p className='Subtittle'>Estou contando os dias!</p>
                <p className='Text'>Com a sua presença, a minha festa de aniversário ficará ainda mais incrível e inesquecível!</p>
            </div>

        </>
    )
}