interface groupProps {
  group: string[];
}
export default function Group({ group }: groupProps) {
  return (
    <div className="group_item">
      <ul>
        {group.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
