import React from 'react'

export function Feedback() {
    let userFeedbacks = [
        {
            id: 1,
            user: "user1",
            description: "lorem imsdakfhniodsngik ni idsnig ngnsdi bnuiobsio bhiosdgi nsd nposd gin sidads sfaf fsf"
        },
        {
            id: 2,
            user: "user2",
            description: "lorem imsdakfhnsddsjnkig ngnsdi bnuiobsio bhiosdgi nsd nposd gin sidads sfaf fsf"
        },
        {
            id: 3,
            user: "user3",
            description: " poposfi idsnig ngnsdi bnuiobsio bhiosdgi nsd nposd gin sidads sfaf fsf"
        },
        {
            id: 4,
            user: "user4",
            description: "lorem jljlhgifjbojgofbjmnkjmiojmoivfgdiiiu uy bguy gvby v ppdoi o9jopdd egfghjfjgrt jk hi hjigin sidads sfaf fsf"
        },
    ]

    let elementFeedback= userFeedbacks.map((feed)=>(
        <div key={feed.id} className='task container mb-2'>
            <h6>{feed.user}</h6>
            <p>{feed.description}</p>
        </div>
    ))
    return (
        <div className='mt-5 container' id='testimonios'>
            {/* <h3>Testimonios:</h3>
            {elementFeedback} */}
        </div>
    )
}
