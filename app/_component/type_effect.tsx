export const TypingEffect = ({ text }: { text: string }) => {
  return (
    <div className="w-max">
      <div
        className="overflow-hidden border-r-2 border-gray-900 h-12 m-5 flex items-center whitespace-nowrap"
        style={{
          animation: `typing 3.5s steps(40, end), blink-caret .75s step-end infinite`,
          width: "fit-content",
          borderColor: "transparent",
        }}
      >
        {text}
      </div>
    </div>
  );
};
