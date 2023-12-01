interface groupProps {
  group: string[];
}
export default function Group({ group }: groupProps) {
  return (
    <div className="border border-black p-2">
      <ul>
        {group.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
