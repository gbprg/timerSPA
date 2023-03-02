import { FormContainer, TaskInput, MinuteAmountInput } from "./styles" 
import { useFormContext } from "react-hook-form"
import { CyclesContext } from "../../../../contexts/CyclesContext"
import { useContext } from "react"



export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <label htmlFor="">durante</label>
      <MinuteAmountInput type="number" 
        id="minutesAmount"  
        placeholder="00" 
        step={5} 
        min={1} 
        max={60} 
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="forever" />
      </datalist>

      <span>minutos.</span>
    </FormContainer>
  )
}