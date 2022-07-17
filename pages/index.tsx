import type { NextPage } from 'next'
import axios from 'axios'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import { Video } from "../types"

interface IProps {
  videos: Video[]
}


const Home = ({ videos }: IProps) => {
  return (
    <div className='container' >
      <h1>Hello World</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`)

  return {
    props: {
      videos: data
    }
  }
}

export default Home
