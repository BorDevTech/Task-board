export default function Date({ date }: { date: Date }) {
  return (
    <div className="text-sm text-gray-500">
      {date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  );
}
