type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        px-5
        py-4
        rounded-xl
        border
        border-slate-300
        bg-white
        text-slate-800
        shadow-sm
        outline-none
        transition-all
        duration-300
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
        placeholder:text-slate-400
      "
    />
  );
}