import { useGlobalContext } from "./mapHelpers";


export default function MainComponent() {
  const { lang } = useGlobalContext();

  return (
    <main className="content">
      <article className="history">
        <img src="../tajem_2.png" className="imgleft" alt=""></img>
        <div className="history-text">
          <h2>{lang === "RU" ? "НАША ИСТОРИЯ" : "Istorie noastra"} </h2>

          <p>
            Разрабатываем коммуникационные стратегии, которые позволяют бизнесу
            устойчиво развиваться. Разрабатываем нестандартные решения для
            бизнеса, которые обязательно решают клиентскую задачу.
          </p>
          <p>
            Внедряем передовые, проверенные и работающие технологии, которые
            реально работают. Создаем и настраиваем отдел продаж, который
            приносит прибыль и не требует ежедневного контроля
          </p>
          <p>
            <a href="#" className="linkButton">
              Подробнее
            </a>
          </p>
        </div>
      </article>
      <div className="form">
        <h2>НАПИШИТЕ НАМ</h2>
        <div className="form-block">
          <form method="GET">
            <input
              type="text"
              className="imput_txt"
              name="name"
              placeholder="Имя"
            />
            <input
              type="email"
              className="imput_txt"
              name="email"
              placeholder="Email"
            />
            <input
              type="text"
              className="imput_txt"
              name="subject"
              placeholder="Тема"
            />
            <textarea
              name="message"
              className="textarea__text"
              placeholder="Сообщение"
              defaultValue={""}
            />
            <button className="button">отправить</button>
          </form>
        </div>
      </div>
    </main>
  );
}
