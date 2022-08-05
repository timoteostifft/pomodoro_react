import React from 'react';

import { Play } from 'phosphor-react';
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmount, Separator, StartCountDownButton, TaskInput } from './styles';

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const formValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type formData = zod.infer<typeof formValidationSchema>

const Home: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<formData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  function handleCreateNewFormCycle(data: formData) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewFormCycle)}>
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id='task'
            placeholder='Dê um nome para seu projeto'
            list='task-suggestions'
            {...register('task')}
          />

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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountDownButton type='submit' disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}

export default Home;