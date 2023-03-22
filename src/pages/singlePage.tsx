import { useParams } from "react-router-dom";
import { MainPage } from "./mainPage";

const SinglePage = () => {
  const { id } = useParams();
  console.log("test");
  return;
  <div>
    {id}
    <MainPage />
  </div>;
};

export default SinglePage;
