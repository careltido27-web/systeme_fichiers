type ServicesCardProps = {
  title: string;
  image: string;
};

export default function Banner({
  title,
  image,
}: BannerProps) {
  return (
    <div
      className="
      h-[450px]
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      relative
      "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <h1
        className="
        relative
        text-white
        text-6xl
        font-bold
        z-10
        "
      >
        {title}
      </h1>
    </div>
  );
}