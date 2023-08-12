import React from 'react'
import EmailForm from './EmailForm'

export default function Main() {
  return (
    <>
      <EmailForm />
      <article style={{marginBlock: '1rem'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam facilisis dolor sagittis libero sodales, nec 
        ultricies turpis volutpat. Morbi a bibendum mauris.
        Phasellus lacinia varius condimentum. Etiam eu dapibus 
        nisl, id iaculis dui. Nulla commodo vestibulum commodo.
        Integer tristique et ipsum sed bibendum. Cras.
      </article>
      <EmailForm />
    </>
  )
}
