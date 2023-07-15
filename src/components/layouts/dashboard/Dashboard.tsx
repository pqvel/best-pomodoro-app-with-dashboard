import { FC } from "react"
import './dashboard.scss'
import SwitchTextInput from "../../switchTextInput/SwitchTextInput"

const Dashboard: FC = () => {
  return (
    <section className="dashboard h-full">
      <SwitchTextInput editTextClass="input h2 mb-5" value="Задачи" editHandler={() => { console.log('hi')}}>
        <h2 className="h2 mb-5">Задачи</h2>
      </SwitchTextInput>

      <div className="flex flex-row w-full gap-5">

        <div className="dashboard__section flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <SwitchTextInput editTextClass="input h3" value="В работе" editHandler={() => console.log('hi')}>
              <h3 className="h3">В работе</h3>
            </SwitchTextInput>
            <span>2</span>
            <button>д</button>
          </div>
          <div className="dashboard__cart">
            <h4 className="h4">сделаить вцуа</h4>
            <p className="p3">fwfwe</p>
          </div>
          <div className="dashboard__cart">
            <h4 className="h4">сделаить вцуа</h4>
            <p className="p3">fwfwe</p>
          </div>
          <div className="dashboard__cart">
            <h4 className="h4">сделаить вцуа</h4>
            <p className="p3">fwfwe</p>
          </div>
        </div>
        <AddSection/>
      </div>
    </section>
  )
}

export default Dashboard

const SectionCart: FC = () => {
  return (
    <div className="dashboard__cart">

    </div>
  )
}

const AddSection: FC = () => {
  return (
    <div className="dashboard__section flex flex-col">
      <input className="input mb-3" placeholder="Название раздела"/>
      <div className="flex gap-2">
        <button className="button button-black" disabled>Добавить раздел</button>
        <button>Отмена</button>
      </div>
    </div>
  )
}