const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <h1>
        {props.course}
      </h1>
    )
  }

  const Content = (props) => {
    const { items } = props;
    return (
      items.map(item => {
        return (
          <p>
            {item.part} {item.exercises}
          </p>
        )
      })
    )
  }

  const Total = (props) => {
    const { value } = props;
    return (
      <p>Number of exercises {value}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content items={[{ part: part1, exercises: exercises1 }, { part: part2, exercises: exercises2 }, { part: part3, exercises: exercises3 }]} />
      <Total value={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App