

export const Confirmation = () => {

    function ToogleButton() {
        let nome = document.querySelector('input[name=Nome]').value;
        let rg = document.querySelector('input[name=RG]').value;
        let nomeacomp = document.querySelector('input[name=NomeAcomp]').value;

        if (nome && rg && nomeacomp) {
            document.querySelector('#submit').disabled = false;
            return
        }
        document.querySelector('#submit').disabled = true;
    }



    return (
        <>

            <div className="PageInfo">
                <div className="infoBox">
                    <p className='Text'>Confirmação</p>
                </div>
            </div>

            <div className="MidBox">
                <div className="Tittle">
                    <h2>Comemore comigo!</h2>
                </div>
            </div>

            <div className="LowBox">
                <p className='Subtittle SubMargin'>Preencha os campos:</p>
            </div>

            <div className="MidBox">
                <p className='InputTittle'>Nome Completo</p>
                <input type="text" name="Nome" required onChange={ToogleButton} />

                <p className='InputTittle'>RG sem pontos</p>
                <input type="tel" name="RG" required onChange={ToogleButton} />
            </div>

            <div className="LowBox">
                <p className='Subtittle SubMargin'>Acompanhante:</p>
            </div>

            <div className="MidBox NoMargin">
                <p className='InputTittle'>Nome Completo</p>
                <input type="text" name="NomeAcomp" required onChange={ToogleButton} />

                <p className='InputTittle'>RG (se tiver)</p>
                <input className="NameNoMargin" type="tel" name="RGAcomp"/>
            </div>

            <p className='Subtittle AvisoSutil'>Ao clicar em enviar você concorda com o uso destes dados para fim único e exclusivo de acesso a portaria no dia do evento.</p>

        </>
    )
}