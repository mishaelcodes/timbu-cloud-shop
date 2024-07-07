interface Text {
  content: string;
}
const Button = (text: Text) => {
  return (
    <>
      <p className="text-sm py-2 px-8 text-center bg-timbuBlack text-timbuWhite font-regular flex w-full rounded-md self-start">
        {text.content}
      </p>
    </>
  );
};
export default Button;
