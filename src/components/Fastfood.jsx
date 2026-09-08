import { LuAlarmClock } from "react-icons/lu";
import { TbChartPieFilled } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { List, Image, Stats, Active } from "./Fastfood.styled";
function Fastfood({ fastfood }) {
  return (
    <List>
      {fastfood.map(
        ({ id, name, image, time, servings, calories, difficulty }) => {
          return (
            <li key={id}>
              <Image src={image} alt={name} />
              <h2>{name}</h2>

              <Stats>
                <p>
                  <LuAlarmClock />    {time}
                </p>
                <p>
                  <TbChartPieFilled />    
                  {servings}
                </p>
                <p>
                  <SiSimpleanalytics />   
                  {calories}
                </p>
              </Stats>
              <h3>Difficulty</h3>
              <Stats>
                
               {difficulty === "Easy" ? (
  <Active>Easy</Active>
) : (
  <p>Easy</p>
)}

{difficulty === "Medium" ? (
  <Active>Medium</Active>
) : (
  <p>Medium</p>
)}

{difficulty === "Hard" ? (
  <Active>Hard</Active>
) : (
  <p>Hard</p>
)}

        </Stats>
            </li>
          );
        },
      )}
    </List>
  );
}
export default Fastfood;
