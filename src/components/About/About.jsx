import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="containe">
      <div className="rows">
        <div className="col-sm-4">
          <img src={require('./img/ab.jpg')} alt="" style={{width: 500, height: 500}} />
        </div>
        <div className="col-sm-6" >
          <p className='text-about'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis fugiat facilis voluptatum error itaque tempore vitae, saepe dolorem numquam dolorum alias temporibus modi nam nihil atque eos recusandae corporis eligendi?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non nam repellat quaerat optio, unde tempora. Earum, rem enim dolore eos vitae, aut, atque quasi consequatur adipisci vel non sequi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum, dolorem vero molestias et iure magni id expedita quibusdam ex assumenda! Vero, aperiam? Eveniet tempore iusto voluptates, nesciunt laboriosam temporibus!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia itaque dolore fugit natus molestiae iusto earum cupiditate porro id doloremque nam, tenetur nobis, nostrum laudantium nemo, unde beatae quaerat aliquid.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit eos omnis nobis ex sed totam optio, error debitis ad, veritatis impedit ipsam quasi, obcaecati doloremque blanditiis recusandae aperiam? Illum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium beatae aut magnam ipsa dolore quisquam! Obcaecati necessitatibus et quod libero pariatur ipsam? Consequatur possimus neque, labore repellat aut sapiente.
          </p>
        </div>
      </div>
    </div>
  )
}
