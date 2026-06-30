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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      <Total total={totalExercises}/>
    </div>
  )
}

export default App