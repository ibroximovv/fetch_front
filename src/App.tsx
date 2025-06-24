import Users from './modules/Users'
import Posts from './modules/Posts'
import Comments from './modules/Comments'

function App() {
  return (
    <div className='users-list border-[2px pr-[20px] mt-[20px] pt-[45px] pl-[25px] w-[350px] h-[92vh] mx-auto'>
      <div className='h-[600px] overflow-y-auto space-y-3 pr-3'>
        <Users />
        <Posts />
        <Comments />
      </div>
    </div>
  )
}

export default App
