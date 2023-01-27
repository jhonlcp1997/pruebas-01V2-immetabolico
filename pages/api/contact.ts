import { NextApiResponse, NextApiRequest } from 'next';
import nodemailer from 'nodemailer';

type Fields = {
  name: string;
  dni: string;
  email: string;
  telephone: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "jhcruz.imm@gmail.com",
    pass: "vcdseosikulmeagz",
  },
});

//export const config = {
//  api: {
//    bodyParser: false,
//  },
//};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { name, email, dni, telephone } = req.body as Fields;

  if (req.method !== 'POST') {
    return res.status(404).send({ status: 'fail', error: 'Begone.' });
  }

  try {
    if (!name || !name.trim()) {
      throw new Error('Please provide a valid name.');
    }

    if (!email || !email.trim()) {
      throw new Error('Please provide a valid email address.');
    }

    if (!dni || !dni.trim()) {
      throw new Error('Please provide a valid email message.');
    }

    if (!telephone || !telephone.trim()) {
      throw new Error('Please provide a valid email message.');
    }

    let mensaje = `
    Nombre:   ${name}
    Email:    ${email} 
    DNI:      ${dni}
    Telefono: ${telephone}
    `;

    let MesassageWithHtml = `
    <b>Nombre:   ${name}</b> <br>
    <b>Email:    ${email}</b> <br>
    <b>DNI:      ${dni}</b> <br>
    <b>Telefono: ${telephone}</b>
    `;

    await transporter.sendMail({
      to: 'jhcruz.imm@gmail.com',
      from: 'immetabolico',
      subject: `Immetabolico-citas`,
      text: mensaje,
      // html: `<p>${name.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`,
      html: MesassageWithHtml
    });

    res.status(200).send({ status: 'done', message: 'message has been sent' });
  } catch (error) {
    res.status(500).send({ status: 'fail', error: `${error}` });
  }
};

export default handler;