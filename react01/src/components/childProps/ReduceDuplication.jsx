import getImageUrl from "./utils2";


export default function ReduceDuplication(){
    return(
        <div>
            <h1>Notable Scientists</h1>
            <section className="profile">
                <h2>Maria John Doe</h2>
                <img 
                    className="avatar"
                    src={getImageUrl('szV5sdG')} 
                    alt="John Doe"
                    width={150}
                    height={150}
                />

                <ul>
                    <li><b>Profession </b>Physicist and Chemist</li>

                    <li><b>Awards: 4 </b>(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)</li>

                    <li><b>Discovered </b>polonium (chemical element)</li>
                </ul>
            </section>

            <section className="profile">
                <h2>Smith De frank</h2>
                <img 
                    className="avatar"
                    src={getImageUrl('YfeOqp2')} 
                    alt="smith"
                    width={150}
                    height={150}
                />

                <ul>
                    <li><b>Profession </b>Physicist and Chemist</li>

                    <li><b>Awards: 4 </b>(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)</li>

                    <li><b>Discovered </b>polonium (chemical element)</li>
                </ul>
            </section>
            
        </div>
    )
}
