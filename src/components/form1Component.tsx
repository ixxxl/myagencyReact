export const Form1Component = () => {
  return (
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
          <button className="button">отправить</button>
        </form>
      </div>
    </div>
  );
};
