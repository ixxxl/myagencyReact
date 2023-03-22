import { Button, Form, FormH2, Input } from "./StyleComponent";

export const Form2Component = () => {
  return (
    <Form>
      <FormH2>НАПИШИТЕ НАМ</FormH2>
      <div className="form-block">
        <form method="GET">
          <Input
            type="text"
            className="imput_txt"
            name="subject"
            placeholder="Тема"
          />
          <Input
            type="email"
            className="imput_txt"
            name="email"
            placeholder="Email"
          />
          <Button>отправить</Button>
        </form>
      </div>
    </Form>
  );
};
