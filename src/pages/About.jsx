import React from 'react'
import avatar from "../assets/avatar.jpg";
import { Icon } from '@iconify/react';

export function About() {
  return (
    <>
      <div className='bg-lightGray font-bold h-16 items-center text-center w-80 text-ivory text-3xl rounded-r-3xl mt-12 pt-3 mb-10 shadow-xl'>
        <h1>About me</h1>
      </div>
      {/* clase para dividir la pantalla en dos partes una de texto y la otra imagen */}
      <div className='flex w-full mx-auto my-12 shadow-xl overflow-hidden'>
        <div className='w-2/3 ml-8 p-8'>
          <h2 className='font-bold text-lg'>hola mucho gusto</h2>
          <p className='leading-relaxed text-lg'>
            Soy William, un apasionado ingeniero electrónico y desarrollador web con un enfoque claro en la creación de soluciones tecnológicas que impactan positivamente en la vida de las personas y las empresas. Desde que comencé mi formación en ingeniería, he tenido un gran interés por el mundo del software y la programación, lo que me llevó a especializarme en el desarrollo web usando tecnologías modernas como React, JavaScript, y Tailwind CSS.

          </p>
          <br />
          <p className='leading-relaxed text-lg'>
            Mi trayectoria profesional ha sido diversa y enriquecedora. He trabajado en proyectos de automatización, robótica, y desarrollo de aplicaciones que integran hardware y software, lo que me ha permitido adquirir habilidades sólidas en programación de microcontroladores, desarrollo IoT, y manejo de protocolos de comunicación como UART, I2C y SPI. Esta experiencia técnica, combinada con mi formación en ingeniería electrónica, me brinda una visión integral para abordar retos complejos desde múltiples perspectivas.
          </p>
          <br />
          <p className='leading-relaxed text-lg'>
            Si quieres conocer más sobre mis proyectos, habilidades o simplemente conectar, no dudes en contactarme. Estoy abierto a nuevas oportunidades, colaboraciones y desafíos que me permitan seguir aprendiendo y aportando.
          </p>      
          <br />    
          <h1 className='font-bold text-3xl'> Contacto</h1>
          <br />
          <div className='grid grid-cols-2 gap-6 '>

          <div className='flex'>
            <Icon icon={"material-symbols:attach-email-outline-sharp"} width={35} height={35} />
            <h1 className='ml-2'>william07apache@gmail.com</h1>
          </div>
                    <div className='flex'>
            <Icon icon={"entypo-social:linkedin"} width={35} height={35} />
            <h1 className='ml-2'>william07apache@gmail.com</h1>
          </div>
                    <div className='flex'>
            <Icon icon={"subway:call"} width={35} height={35} />
            <h1 className='ml-2'>3112456846</h1>
          </div>
                    <div className='flex'>
            <Icon icon={"fa-brands:github-square"} width={35} height={35} />
            <h1 className='ml-2'>william07apache@gmail.com</h1>
          </div>
          </div>

        </div>
        <div className='w-1/3 flex items-center justify-center rounded-3x pb-14'>
          <img src={avatar} alt="avatar" className="w-60 h-70 object-cover rounded-t-full border-4 border-gray-300 shadow-md" />

        </div>


      </div>

    </>
  )
}
