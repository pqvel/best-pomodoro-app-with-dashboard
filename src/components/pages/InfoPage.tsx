import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";
import { Typography } from "../ui";

const InfoPage: FC = () => (
  <MainTemplate>
    <section className="flex flex-col m-5 max-w-5xl mx-auto bg-white rounded-lg p-5">
      <Typography.H1>Техника Pomodoro</Typography.H1>
      <Typography.P>
        Десятки задач, один исполнитель и восьмичасовой рабочий день. Как всё
        успеть, не сойти с ума и ничего не забыть? В Украине наверняка хорошо
        знают ответ на этот вопрос: по данным Google Trends за - год мы искали
        «pomodoro» в 3 раза чаще, чем «тайм-менеджмент». Pomodoro — техника
        управления временем, для которой достаточно смартфона, блокнота и ручки.
        Worksection попробовал разобраться, как быть успешным с помощью
        кухонного таймера, кому Pomodoro вряд ли понравится, и что делать, если
        в офисе вас отвлекают от «помидорного» графика.
      </Typography.P>
      <Typography.H2>
        Что такое техника планирования Помодоро и зачем она нужна?
      </Typography.H2>
      <Typography.P>
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
      </Typography.P>
      <Typography.P>
        Со временем Франческо развил Pomodoro до полноценной системы: например,
        отрезки времени работы увеличились до 25 минут. Подробнее о современной
        версии техники мы написали в разделах «6 правил Pomodoro» и «Как оценить
        эффективность работы по Pomodoro?».
      </Typography.P>
      <Typography.H2>
        В простом варианте техника Pomodoro работает так:
      </Typography.H2>
      <Typography.Ol>
        <Typography.Li>
          Составьте список задач, которые нужно сделать в ближайшее время
          (например, неделю). Такие задачи называются активными.
        </Typography.Li>
        <Typography.Li>
          Из списка активных задач выберите те, которые хотите сделать сегодня.
          Добавьте их в список задач на день.
        </Typography.Li>
        <Typography.Li>
          Расставьте задачи на день от наиболее до наименее приоритетной.
        </Typography.Li>
        <Typography.Li>
          Включите таймер на 25 минут. Начинайте работу!
        </Typography.Li>
        <Typography.Li>
          Прошло 25 минут - сделайте перерыв в 5 - 10 минут. Спустя 4 «помидора»
          сделайте полноценный перерыв в 15 - 20 минут.
        </Typography.Li>
        <Typography.Li>
          Повторяйте пункты 4 - 6, пока не закроете все задачи из списка на
          день. Каждый потраченный на задачу «помидор» отмечайте напротив неё
          крестиком. Закрытые задачи вычеркивайте.
        </Typography.Li>
      </Typography.Ol>
      <Typography.P>
        Отлично, вы освоили технику Pomodoro в самом начале статьи! Если хотите
        узнать нюансы использования техники, недостатках и особенностях
        внедрения в офисную работу - читайте дальше.
      </Typography.P>
      <Typography.H2>Чем хороша техника Pomodoro?</Typography.H2>
      <Typography.Ol>
        <Typography.Li>
          <b>Вы работаете над конкретной задачей.</b>&nbsp;Меньше риска
          отвлечься и попасть в режим многозадачности, потому что вы знаете -
          через 25 минут будет перерыв.
        </Typography.Li>
        <Typography.Li>
          <b>Вы успеваете сделать больше за меньшее время.</b>&nbsp;Принцип в
          Worksection: «Делай больше, делая меньше». А в Pomodoro этот принцип
          выглядит немного по-другому: «Делай больше за меньшее время». Вы не
          отвлекаетесь на другие задачи и соцсети, а значит не перегружаете мозг
          лишней информацией
        </Typography.Li>
        <Typography.Li>
          <b>
            Вы можете проанализировать, насколько эффективно выполнили задачу.
          </b>
          &nbsp;В отличие от простого вычеркивания выполненных задач в блокноте,
          в конце дня вы видите, сколько времени ушло на каждую задачу. К
          примеру, одна из задач могла быть слишком большой, и вы потратили на
          неё весь день. Такую большую задачу лучше разделить на несколько
          мелких (об этом написали в разделе «Правила и принципы техники»).
        </Typography.Li>
        <Typography.Li>
          <b>
            Вы видите прямую связь между целью и задачами для её достижения.
          </b>
          &nbsp;Цель достигается небольшими шагами (задачами), и вы понимаете,
          на каком этапе пути находитесь - по количеству зачеркнутых за день
          задач.
        </Typography.Li>
        <Typography.Li>
          <b>Вы можете настроить технику под свой ритм и потребности.</b>
          &nbsp;Например, увеличить продолжительность «помидора» или перерыва.
          Также можно переставить большой перерыв на время обеда, если
          используете Pomodoro в офисе.
        </Typography.Li>
        <Typography.Li>
          <b>Вы учитесь грамотно планировать задачи на день.</b>&nbsp;При
          планировании дня с Помодоро вы выбираете наиболее приоритетные задачи
          и прогнозируете, сколько времени займет каждая из них.
        </Typography.Li>
      </Typography.Ol>
    </section>
  </MainTemplate>
);

export default InfoPage;