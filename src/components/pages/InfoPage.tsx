import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";

const InfoPage: FC = () => (
  <MainTemplate>
    <section className=" flex flex-col m-5">
      <h1 className="text-2xl font-bold mb-4">Техника Pomodoro</h1>
      <p className="mb-4">
        Десятки задач, один исполнитель и восьмичасовой рабочий день. Как всё
        успеть, не сойти с ума и ничего не забыть? В Украине наверняка хорошо
        знают ответ на этот вопрос: по данным Google Trends за - год мы искали
        «pomodoro» в 3 раза чаще, чем «тайм-менеджмент». Pomodoro — техника
        управления временем, для которой достаточно смартфона, блокнота и ручки.
        Worksection попробовал разобраться, как быть успешным с помощью
        кухонного таймера, кому Pomodoro вряд ли понравится, и что делать, если
        в офисе вас отвлекают от «помидорного» графика.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        Что такое техника планирования Помодоро и зачем она нужна?
      </h2>
      <p className="mb-4">
        Сейчас Франческо Чирилло — владелец Cirillo Consulting,
        сертифицированного проводника в систему Помодоро. А вот в 80-ые он был
        студентом и хотел тратить минимум времени на учебу. Франческо решил
        провести эксперимент — поделить работу над домашним заданием на
        одинаковые короткие временные отрезки. Для самоконтроля он взял кухонный
        таймер в виде помидора, который заводился на 10 минут. Чирилло заметил,
        что так ему легче концентрироваться на задаче, ведь он знал, что через
        десять минут сможет отдохнуть. Так Франческо создал основу техники
        тайм-менеджмента Pomodoro. Свое название техника получила от
        «помидорного» таймера: «pomodori» в переводе с итальянского означает
        «томат».
      </p>
      <p className="mb-4">
        Со временем Франческо развил Pomodoro до полноценной системы: например,
        отрезки времени работы увеличились до 25 минут. Подробнее о современной
        версии техники мы написали в разделах «6 правил Pomodoro» и «Как оценить
        эффективность работы по Pomodoro?».
      </p>
      <h2 className="text-xl font-semibold mb-4">
        В простом варианте техника Pomodoro работает так:
      </h2>
      <ol className="pl-5 flex flex-col mb-4">
        <li className="list-decimal mb-3">
          Составьте список задач, которые нужно сделать в ближайшее время
          (например, неделю). Такие задачи называются активными.
        </li>
        <li className="list-decimal mb-3">
          Из списка активных задач выберите те, которые хотите сделать сегодня.
          Добавьте их в список задач на день.
        </li>
        <li className="list-decimal mb-3">
          Расставьте задачи на день от наиболее до наименее приоритетной.
        </li>
        <li className="list-decimal mb-3">
          Включите таймер на 25 минут. Начинайте работу!
        </li>
        <li className="list-decimal mb-3">
          Прошло 25 минут - сделайте перерыв в 5 - 10 минут. Спустя 4 «помидора»
          сделайте полноценный перерыв в 15 - 20 минут.
        </li>
        <li className="list-decimal">
          Повторяйте пункты 4 - 6, пока не закроете все задачи из списка на
          день. Каждый потраченный на задачу «помидор» отмечайте напротив неё
          крестиком. Закрытые задачи вычеркивайте.
        </li>
      </ol>
      <p className="mb-4">
        Отлично, вы освоили технику Pomodoro в самом начале статьи! Если хотите
        узнать нюансы использования техники, недостатках и особенностях
        внедрения в офисную работу - читайте дальше.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        Чем хороша техника Pomodoro?
      </h2>
      <ol className="pl-5 flex flex-col mb-4">
        <li className="list-decimal mb-3">
          <b>Вы работаете над конкретной задачей.</b>&nbsp;Меньше риска
          отвлечься и попасть в режим многозадачности, потому что вы знаете -
          через 25 минут будет перерыв.
        </li>
        <li className="list-decimal mb-3">
          <b>Вы успеваете сделать больше за меньшее время.</b>&nbsp;Принцип в
          Worksection: «Делай больше, делая меньше». А в Pomodoro этот принцип
          выглядит немного по-другому: «Делай больше за меньшее время». Вы не
          отвлекаетесь на другие задачи и соцсети, а значит не перегружаете мозг
          лишней информацией
        </li>
        <li className="list-decimal mb-3">
          <b>
            Вы можете проанализировать, насколько эффективно выполнили задачу.
          </b>
          &nbsp;В отличие от простого вычеркивания выполненных задач в блокноте,
          в конце дня вы видите, сколько времени ушло на каждую задачу. К
          примеру, одна из задач могла быть слишком большой, и вы потратили на
          неё весь день. Такую большую задачу лучше разделить на несколько
          мелких (об этом написали в разделе «Правила и принципы техники»).
        </li>
        <li className="list-decimal mb-3">
          <b>
            Вы видите прямую связь между целью и задачами для её достижения.
          </b>
          &nbsp;Цель достигается небольшими шагами (задачами), и вы понимаете,
          на каком этапе пути находитесь - по количеству зачеркнутых за день
          задач.
        </li>
        <li className="list-decimal mb-3">
          <b>Вы можете настроить технику под свой ритм и потребности.</b>
          &nbsp;Например, увеличить продолжительность «помидора» или перерыва.
          Также можно переставить большой перерыв на время обеда, если
          используете Pomodoro в офисе.
        </li>
        <li className="list-decimal">
          <b>Вы учитесь грамотно планировать задачи на день.</b>&nbsp;При
          планировании дня с Помодоро вы выбираете наиболее приоритетные задачи
          и прогнозируете, сколько времени займет каждая из них.
        </li>
      </ol>
    </section>
  </MainTemplate>
);

export default InfoPage;
