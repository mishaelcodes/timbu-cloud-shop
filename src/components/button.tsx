import arrowRight from "../assets/icon/arrow-right.png";

interface Text {
  content: string;
}
const Button = (text: Text) => {
  return (
    <>
      <p className="py-2 px-8 text-center bg-timbuBlack text-timbuWhite font-regular flex w-fit rounded-md self-start">
        {text.content} <img src={arrowRight} alt="arrow-right" />
      </p>
    </>
  );
};
export default Button;
