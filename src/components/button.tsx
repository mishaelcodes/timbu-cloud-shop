interface Text {
  content: string;
}
const Button = (text: Text) => {
  return (
    <button className="text-sm py-2 px-8 text-center bg-timbuBlack text-timbuWhite font-regular w-full rounded-md">
      {text.content}
    </button>
  );
};
export default Button;
