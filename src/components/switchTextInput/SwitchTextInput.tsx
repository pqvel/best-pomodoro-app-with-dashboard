import  { FC, useEffect, useRef, useState } from 'react'

type Props = {
  children: string | JSX.Element | JSX.Element[],
  editTextClass: string,
  value: string
  editHandler: () => void
}
// нужно хранить пред состояние текста
const SwitchTextInput: FC<Props> = ({ children, editTextClass, value, editHandler}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const editInput = useRef<HTMLInputElement>(null)

  const toggleEditText = () => {
    setIsEdit(isEdit => !isEdit)
  }

  const confirmChanges = () => {
    const value = editInput.current?.value
    editHandler()
    toggleEditText()
  }

  useEffect(() => {
    if (isEdit) {
      editInput.current?.focus()
    }
  }, [isEdit])
       
  if (isEdit) {
    return (
      <div>
        <input ref={editInput} className={editTextClass} defaultValue={value}/>
        <div className='flex gap-2'>
          <button className='button button-black' onClick={confirmChanges}>Сохранить</button>
          <button className='button' onClick={toggleEditText}>Отмена</button>
        </div>
      </div>
    )
  }

  return <div onClick={toggleEditText}>{children}</div>
}
  

export default SwitchTextInput