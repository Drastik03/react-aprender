import { FollowCard } from "./components/FollowCard";
export function App() {
  const formatUser = (username) => `@${username}`

  return (
    <div className="App">
      <FollowCard formatUser={formatUser} username={"david04"} name={"David Moreno"}/>
      <FollowCard formatUser={formatUser} username={"coffee1"} name={"Coffee Veas"}/>
      <FollowCard formatUser={formatUser} username={"Drastiko03"} name={"Drastico"} />
    </div>
  )
}

export default App
