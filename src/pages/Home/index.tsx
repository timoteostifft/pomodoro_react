import { Play } from 'phosphor-react';
import React from 'react';
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton } from './styles';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <input id='task' />

          <label htmlFor="">durante</label>
          <input type="number" id='minutesAmount' />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type='submit' disabled>
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}

export default Home;