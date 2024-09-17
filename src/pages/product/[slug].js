import { useRouter } from 'next/router'
 
const Slugs =()=> {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}

export default Slugs