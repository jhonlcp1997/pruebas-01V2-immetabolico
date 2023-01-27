import { FormEvent, useState } from "react";

type Values = {
  name : string,
  email : string,
  dni : string,
  telephone: string
}

export const FormContacUs = () => {

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    dni: "",
    telephone: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onSubmitFormContactUs = async ({ target }: FormEvent<HTMLFormElement>) => {

    fetch('/api/contact', {
      method: 'POST',
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(values),
    }).then((response) => {
      alert('Email enviado conm suceso')
    }).catch((error)=>{
      console.log(error)
    });
  }

  return (
    <section className="contact">
      <img className="contact__imgBackground two" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
      <section className="boxSendEmail">
        <h2 className="titlee">Separa tu cita</h2>
        <div className="contentInputs">
          <form className="contentInputsForm immetabolico"
            onSubmit={(event) => { event.preventDefault(); onSubmitFormContactUs(event) }}
          >
            <input type="text" required onChange={handleChange} id="name" name="name" placeholder="Nombre" />
            <input type="number" required onChange={handleChange} id="dni" name="dni" placeholder="DNI" />
            <input type="email" required onChange={handleChange} id="email" name="email" placeholder="Correo" />
            <input type="number" required onChange={handleChange} id="telephone" name="telephone" placeholder="Teléfono" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </section>
  )
}
