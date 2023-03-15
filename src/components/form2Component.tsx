export const Form2Component = () => {
  return (
    <div className="form">
      <h2>НАПИШИТЕ НАМ</h2>
      <div className="form-block">
        <form method="GET">
          <input
            type="text"
            className="imput_txt"
            name="subject"
            placeholder="Тема"
          />
          <input
            type="email"
            className="imput_txt"
            name="email"
            placeholder="Email"
          />
          <button className="button">отправить</button>
        </form>
      </div>
    </div>
  );
};
