import { FC } from "react"
import './dashboard.scss'
import SwitchTextInput from "../../switchTextInput/SwitchTextInput"
import { dashboardSelector } from "../../../core/redux/slices/todosSlice"

const Dashboard: FC = () => {

  // const dashboard = dashboardSelector>()
  return (
    <section className="dashboard h-full">
      <SwitchTextInput editTextClass="input h2 mb-5" value="Задачи" editHandler={() => { console.log('hi')}}>
        <h2 className="h2 mb-5">Задачи</h2>
      </SwitchTextInput>

      <div className="flex flex-row w-full gap-5">


        <div className="dashboard__section flex flex-col gap-3">
          
          <SwitchTextInput editTextClass="input h3" value="В работе" editHandler={() => console.log('hi')}>
            <div className="flex justify-between items-center">
              <h3 className="h3 rounded-4 px-2 py-1 bg-[#dddddd]">В работе</h3>
              <span onClick={(e) => e.stopPropagation()}>2</span>
              <button onClick={(e) => e.stopPropagation()}>д</button>
            </div>
          </SwitchTextInput>
          <SectionCart 
            title={"Сделать проект в портфолио"} 
            descr="проект таймер помодоро с канбан доской"
            leftTime="19ч 29мин 21сек"
            editHanlder={() => alert('hello')}/>
          {/* <SectionCart/>
          <SectionCart/> */}
        </div>
        <AddSection/>
      </div>
    </section>
  )
}

export default Dashboard

type SectionCartProps = {
  title: string
  descr: string
  leftTime: string
  editHanlder: () => void
}

const SectionCart: FC<SectionCartProps> = ({title, descr, leftTime, editHanlder}) => {
  return (
    <div className="dashboard__cart">
      <h4 className="h4">{title}</h4>
      <p className="p3">{descr}</p>
      <span>{leftTime}</span>
      <button className="dashboard__cart-settings" onClick={editHanlder}>:</button>
    </div>
  )
}

const AddSection: FC = () => {
  return (
    <div className="dashboard__section flex flex-col">
      <input className="input mb-2" placeholder="Название раздела"/>
      <div className="flex gap-2">
        <button className="button button-black" disabled>Добавить раздел</button>
        <button>Отмена</button>
      </div>
    </div>
  )
}