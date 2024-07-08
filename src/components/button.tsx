interface Text {
  content: string,
  width: string,
  padding?: string
}
const Button = (text: Text) => {
  return (
    <button className={`text-sm ${text.padding ? text.padding : "py-2 px-8"} text-center bg-timbuBlack text-timbuWhite font-regular ${text.width} rounded-md`}>
      {text.content}
    </button>
  );
};
export default Button;
