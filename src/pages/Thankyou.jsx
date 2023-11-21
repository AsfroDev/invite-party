import ConfettiExplosion from 'react-confetti-explosion';

export const ThankYou = () => {
    return (
        <>


            <div className="PageInfo">
                <div className="infoBox">
                    <p className='Text'>Conclusão</p>
                    <ConfettiExplosion
                        force={0.8}
                        duration={3000}
                        particleCount={250}
                        width={1600}
                    />
                </div>
            </div>

            <div className="MidBox">
                <div className="Tittle">
                    <h1>Obrigada!</h1>
                </div>
            </div>

            <div className="MidBox">
                <p className='Text'>Estou muito feliz com sua participação neste dia lindo
                    e memorável da minha vida!</p>
            </div>


        </>
    )
}