

type ButtonProps = {
  titre: string;
  type: string;
};

export default function Button({
  titre,
  type ,
}: ButtonProps) {
  return (
    <button
      type={type}
      className="
        w-[100xl]
        py-4
        rounded-xl
        bg-blue-600
        text-white
        font-semibold
        text-lg
        shadow-lg
        transition-all
        duration-300
        hover:bg-blue-700
        hover:shadow-xl
        hover:-translate-y-1
        cursor-pointer
      "
    >
      {titre}
    </button>
  );
}