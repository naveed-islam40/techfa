type CircleCardProps = {
  label: string;
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
};

const CircleCard = ({
  label,
  title,
  desc,
  bgColor,
  textColor,
}: CircleCardProps) => {
  return (
    <div
      className={`rounded-xl ${bgColor} ${textColor} p-6 shadow-md w-full flex flex-col items-start space-y-2`}
    >
      <div className="text-xl font-bold">{label}</div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm">{desc}</div>
    </div>
  );
};

export default CircleCard;
