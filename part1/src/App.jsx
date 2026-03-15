import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const allVotes = Object.values(votes)
  const maxVotes = Math.max(allVotes)
  const maxIndex = allVotes.indexOf(maxVotes)

  const randomValue = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const voteCounter = (anecdote) => {
    setVotes({ ...votes, [anecdote]: (votes[anecdote] || 0) + 1 })
  }

  // Components:
  const StatisticLine = ({ text, value }) => {
    return (<tr><td>{text}</td><td>{value}</td></tr>)
  }

  const Statistics = ({ good, neutral, bad }) => {
    if (!good && !neutral && !bad) {
      return (
        <tbody>
          <tr><td>No feedback given</td></tr>
        </tbody>
      )
    }
    return (
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={(good || neutral || bad) ? ((good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)).toFixed(10) : 0} />
        <StatisticLine text="positive" value={(good || neutral || bad) ? ((good / (good + neutral + bad)) * 100).toFixed(10) : 0} />
      </tbody>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <h1>statistics</h1>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </table>
      <h1>Anecdotes</h1>
      <div>
        <h2>Anecdote of the day</h2>
        <p>
          {anecdotes[selected]}
        </p>
        <p>has {votes[selected] || 0} votes</p>
        <button onClick={() => voteCounter(selected)}>vote</button>
        <button onClick={() => setSelected(randomValue())}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[maxIndex]}</p>
        <p>has {maxVotes} votes</p>
      </div>
    </div>
  )
}

export default App