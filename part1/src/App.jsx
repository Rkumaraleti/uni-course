const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }
    ]
  }

  const Header = (props) => {
    return (
      <h1>
        {props.course.name}
      </h1>
    )
  }

  const Part = (props) => {
    const { part, exercises } = props;
    return (
      <p>
        {part} {exercises}
      </p>
    )
  }

  const Content = (props) => {
    const { items } = props;
    return (
      items.map(item => {
        return (
          <Part part={item.name} exercises={item.exercises} />
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
      <Content items={course.parts} />
      <Total value={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  )
}

export default App