import backButton from "../assets/icon/back-button.png";
import { useNavigate } from "react-router-dom";

interface Text {
  context: string;
}
const BackButton = (text: Text) => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <p
      className="font-semiboold flex text-base mb-7 ml-3 lg:text-2xl cursor-pointer"
      onClick={goToPreviousPage}
    >
      <img src={backButton} alt="" className="mr-2" />
      {text.context}
    </p>
  );
};
export default BackButton;
