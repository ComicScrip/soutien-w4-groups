import { useState, useEffect } from "react";

function distributeIntoGroups<T>(array: T[], numberOfGroups: number): T[][] {
  const groups: T[][] = Array.from({ length: numberOfGroups }, () => []);
  array.forEach((item, i) => {
    groups[i % numberOfGroups].push(item);
  });
  return groups;
}
import Group from "@/components/Group";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [numberOfGroups, setNumberOfGroups] = useState(2);
  const [groups, setGroups] = useState<string[][]>([]);

  const studentList = userInput
    .replaceAll("\n", ",")
    .split(",")
    .map((el) => el.trim())
    .filter((el) => !!el);

  useEffect(() => {
    setGroups(distributeIntoGroups(studentList, numberOfGroups));
  }, [studentList, numberOfGroups]);

  console.log(studentList);
  console.log(numberOfGroups);

  return (
    <div>
      <textarea
        className="text-black border "
        value={userInput}
        name=""
        id=""
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></textarea>
      <input
        className="border"
        type="number"
        onChange={(e) => {
          setNumberOfGroups(parseInt(e.target.value, 10));
        }}
      />
      <div>
        {groups.map((group, i) => {
          return <Group key={i} group={group} />;
        })}
      </div>
    </div>
  );
}
