import React from "react";

const Form = ({fCompra}) => {
    

    const datosComprador = () => {
        let name = document.getElementById('first_name').value;
        let lastName = document.getElementById('last_name').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phone_number').value;
        let checkboxTerms = document.getElementById('checkboxTerms');

        if (name.length > 0 && lastName.length > 0 && email.length > 0 && phoneNumber > 0 && checkboxTerms.checked) {
            const dataComprador = {
                name: name,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber
            }
            fCompra(dataComprador);
        }
    }

    return (
        <div>
            <h3>Datos del Cliente</h3>
            <form>
                <div>
                    <div>
                        <label htmlFor="first_name">Nombre</label>
                        <input id="first_name" type="text" className="validate" required/>
                    </div>
                    <div>
                        <label htmlFor="last_name">Apellido</label>
                        <input id="last_name" type="text" className="validate" required/>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" className="validate" required/>
                    </div>
                    <div>
                        <label htmlFor="phone_number">Teléfono</label>
                        <input id="phone_number" type="number" className="validate" required/>
                    </div>
                </div>
                <div>
                <p>
                    <label>
                        <input type="checkbox" id="checkboxTerms"/>
                        <span>Acepto terminos, condiciones y tratamiento de datos personales</span>
                    </label>
                </p>
                </div>
            </form>
            <button onClick={datosComprador}>Finalizar Compra</button>
        </div>
    )
}

export default Form;


