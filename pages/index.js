 import {getSession} from "next-auth/react"

 function HomePage({session}){
  const {user} = session
   return (
     <div>
       {user ? (<div><img src={user.image}/>
       <h1>{user.name}</h1>
       <p>{user.email}</p> </div>) : null}
     </div>
   )
 }


 export const getServerSideProps = async(context) =>{
  
  const session = await getSession(context)

  if(!session){
    return {
      redirect: {
        destination: "/login", 
        permanent: false
      }
    }
  }

  return{
     props: {
      session: session 
     }
   }
 }

 export default HomePage