import { FormEvent, useState } from "react";

type Values = {
  name: string,
  email: string,
  dni: string,
  telephone: string
}

export const FormContacUs = () => {

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    dni: "",
    telephone: ""
  });

  const [classActiveSended, setClassActiveSended] = useState('');
  const [classActiveWarn, setclassActiveWarn] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onSubmitFormContactUs = async (event: FormEvent<HTMLFormElement>) => {

    const target = event.target as HTMLFormElement;

    if(Object.values(values).includes('')) {
    
      setclassActiveWarn('active');

      setTimeout(()=>{
        setclassActiveWarn('')
      }, 2000)
      return
    }

    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      }).then((response) => {
        if(response.ok){
          setClassActiveSended('active');
  
          setTimeout(() => {
            setClassActiveSended('');
            target.reset();
          }, 2000);
        } 
      }).catch((error) => {
        console.log("error")
      }); 
    } catch (error) {
      console.log("error")
    }
  }
  
  
  return (
    <section className="contact">
      <img className="contact__imgBackground two" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
      <section className="boxSendEmail">
        <h2 className="titlee">Separa tu cita</h2>
        <div className="contentInputs">
          <form
            className="contentInputsForm immetabolico"
            onSubmit={(event) => { event.preventDefault(); onSubmitFormContactUs(event) }}
          >
            <input type="text" required onChange={handleChange} id="name" name="name" placeholder="Nombre" />
            <input type="number" required onChange={handleChange} id="dni" name="dni" placeholder="DNI" />
            <input type="email" required onChange={handleChange} id="email" name="email" placeholder="Correo" />
            <input type="number" required onChange={handleChange} id="telephone" name="telephone" placeholder="Teléfono" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
        <span className={`spanSended ${classActiveSended}`}>Enviado</span>
        <span className={`spanWarn ${classActiveWarn}`}>Rellene Correctamente</span>
      </section>
    </section>
  )
}
