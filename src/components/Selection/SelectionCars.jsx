const Card = ({ image, title }) => {
  return (
    <div className="mt-[144px]">
      <img src={image} alt={title} />
      <p className="text-[#5A5A5A] text-xl font-semibold mt-[14px]">{title}</p>
    </div>
  );
};
export default Card;
