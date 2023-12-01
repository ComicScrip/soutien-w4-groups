interface groupProps {
  group: string[];
  index: number;
  displayGroups: number;
}
export default function Group({ group, index, displayGroups }: groupProps) {
  const showGroups = group.length >= 1;
  return (
    <>
      {showGroups && (
        <div className="group_item">
          <h2 className="group-class">Groupe {index + 1}</h2>
          <ul>
            {group.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
