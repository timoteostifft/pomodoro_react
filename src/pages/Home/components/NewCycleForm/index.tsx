import React, { useContext } from 'react';
import { FormContainer, MinutesAmount, TaskInput } from './syles';
import { CyclesContext } from '../..';
import { useFormContext } from 'react-hook-form';

const NewCycleForm: React.FC = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TaskInput
        id='task'
        placeholder='Dê um nome para seu projeto'
        list='task-suggestions'
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}

export default NewCycleForm;