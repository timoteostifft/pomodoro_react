import { Play } from 'phosphor-react';
import React from 'react';
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmount, Separator, StartCountDownButton, TaskInput } from './styles';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput id='task' placeholder='Dê um nome para seu projeto' list='task-suggestions' />

          <datalist id='task-suggestions'>
            <option value="Projeto" />
            <option value="Projeto" />
            <option value="Projeto" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmount
            type="number"
            id='minutesAmount'
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />

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