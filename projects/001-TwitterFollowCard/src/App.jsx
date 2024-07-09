import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const users = [
    {
        userName: 'DevNhor',
        name: 'Nhor',
        initialIsFollowing: true
    },
    {
        userName: 'BillGates',
        name: 'Bill Gates',
        initialIsFollowing: false
    },
    {
        userName: 'NASA',
        name: 'NASA',
        initialIsFollowing: true
    },
    {
        userName: 'midudev',
        name: 'midudev',
        initialIsFollowing: true
    },
]

export function App () {
    return (
        
        <section className='App'>
            <div className='tw-followCard-title'>
                <h2>A quien seguir</h2>
            </div>
            {
                users.map(({userName, name, initialIsFollowing}) => (
                    <TwitterFollowCard
                    key = {userName}
                    userName={userName}
                    initialIsFollowing={initialIsFollowing}
                    >{name}
                    </TwitterFollowCard>
                ))
        }
        </section>
    )
}