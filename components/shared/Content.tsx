export default function Content() {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 5 }).map((_, id) => {
        return <div key={id} className="h-96 w-full bg-dark-300 rounded-md" />;
      })}
    </div>
  );
}
