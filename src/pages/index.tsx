import { useState, useMemo } from "react";

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
  // const [groups, setGroups] = useState<string[][]>([]);

  function shuffle<T>(array: T[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const studentList = userInput
    .replaceAll("\n", ",")
    .split(",")
    .map((el) => el.trim())
    .filter((el) => !!el); // ne met pas les chaines de caractères vides

  const groups = useMemo(() => {
    return distributeIntoGroups(studentList, numberOfGroups)
  }, [studentList, numberOfGroups])

  // useEffect(() => {
  //   setGroups(distributeIntoGroups(test, numberOfGroups));
  // }, [test, numberOfGroups]);

  console.log(studentList);
  console.log(numberOfGroups);
  console.log("groups", groups)

  const handleRandomize = () => {
    console.log('ramdomize !')
    const shuffledList = shuffle([...studentList]);
    setUserInput(shuffledList.join('\n')); // Mettez à jour l'input avec la liste mélangée
  }

  return (
    <div className="app">
      <textarea
        className="text-black border input-field"
        placeholder="enter students here"
        value={userInput}
        name=""
        id=""
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></textarea>
        <div className="group_wrapper">
      <div className="btn-container">
        <p>Number of groups :</p>
      <input
        className="number-group-input"
        type="number"
        max={studentList.length}
        min="1"
        onChange={(e) => {
          setNumberOfGroups(parseInt(e.target.value, 10));
        }}
        />
      <button className="randomize-input" onClick={handleRandomize}>
        Ramdomize
      </button>
        </div>
        <div className="wrapper">
          {groups.map((group, i) => {
            return <Group key={i} group={group} />;
          })}
        </div>
      </div>
    </div>
  );
}
