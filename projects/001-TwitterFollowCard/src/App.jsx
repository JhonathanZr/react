import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="DevNhor" name="Nhor" initialIsFollowing/>
            <TwitterFollowCard userName="BillGates" name="Bill Gates" initialIsFollowing={false}/>
            <TwitterFollowCard userName="NASA" name="NASA" initialIsFollowing={false}/>
        </section>
    )
}