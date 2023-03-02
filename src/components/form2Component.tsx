export default function form2Component() {
  return (
    <div className="form">
      <h2>НАПИШИТЕ НАМ</h2>
      <div className="form-block">
        <form method="GET">
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
          <button className="button">отправить</button>
        </form>
      </div>
    </div>
  );
}
