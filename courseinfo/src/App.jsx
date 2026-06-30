// Header component
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Part component
const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}



// Content component
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
    </div>
  )
}

// Total component
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7
  },

  {
    name: 'State of a component',
    exercises: 14
  },
]
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <div>
      <Header course={course}/>
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
      <Total total={totalExercises}/>
    </div>
  )
}

export default App