import { useState } from "react"

// eslint-disable-next-line react/prop-types, no-unused-vars
export function TwitterFollowCard({userName = 'undefined', children, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button  is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
return(
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img
        className='tw-followCard-avatar'
        alt="El avatar de DevNhor" 
        src={`https://unavatar.io/${userName}`}></img>
        <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
    </header>
    <aside>
        <button className={buttonClassName} onClick={handleClick}>
        <span className='tw-followCard-text'>{text}</span>
        <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
        
    </aside>
</article>
)
}