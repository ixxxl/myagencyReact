import { Outlet } from "react-router-dom";
import { useGlobalContext } from "./mapHelpers";
import { ELanguages } from "./models/lang";
import { Content, HistoryArticle, HistoryTextH2, HistoryTextP, ImgLeft } from "./StyleComponent";

export default function MainComponent() {
  const { lang } = useGlobalContext();

  return (
    <Content>
      <HistoryArticle>
        <ImgLeft src="../tajem_2.png" alt=""></ImgLeft>
        <HistoryTextP>
          <HistoryTextH2>
            {lang === ELanguages.ru ? "НАША ИСТОРИЯ" : "Istorie noastra"}{" "}
          </HistoryTextH2>
          <Outlet />
          {/* <p>
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
          </p> */}
        </HistoryTextP>
      </HistoryArticle>

      {/* <div className="form">
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
      </div> */}
    </Content>
  );
}
