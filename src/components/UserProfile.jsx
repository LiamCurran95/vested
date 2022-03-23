import {useContext, useState, useEffect} from "react"
import { UserContext } from "../context/userContext";

export default function UserProfile(){

    const {loggedInUser} = useContext(UserContext)



    const [userPortfolios, setUserPortfolios] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        setIsLoading(true)
        let info = []
        if(loggedInUser){
                const {portfolios} = loggedInUser
                for(let portfolio in portfolios) {
                const companyList = portfolios[portfolio]
                info.push(companyList)
            }
        }
       
        setUserPortfolios(info)
        setIsLoading(false)

    },[loggedInUser])
    

    if(!loggedInUser) return <p>No User Logged In</p>
    else return isLoading ? <p>Profile is loading</p> : (
        <main className="user-profile">
            <section className="user-banner">
            <img src={loggedInUser.avatarUrl} alt="logged in user profile"></img>
            <div className="profile-text-container">
                <h2>{loggedInUser.username}</h2>
                <ul>
                    <li>Achievement1</li>
                    <li>Achievement2</li>
                    <li>Achievement2</li>
                </ul>
            </div>
            
            </section>
            <section className="user-portfolio-list">
                {userPortfolios.map((portfolio, index) => {
                    return (
                        <li key={index}>
                            <p>{portfolio[0]}</p>
                            <p>{portfolio[1]}</p>
                            <p>{portfolio[2]}</p>
                            <p>{portfolio[3]}</p>
                            <p>{portfolio[4]}</p>
                        </li>
                    )
                })}
            </section>
        </main>
    )
    }