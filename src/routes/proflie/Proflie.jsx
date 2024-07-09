import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import './proflie.scss'


const Proflie = () => {
  return (
    <div className='Proflie'>
        <div className="details">
            <div className="wapper">
                <div className="tittle">
                    <h1>User Imformation</h1>
                    <button>Update Proflie</button>
                </div>
                <div className="info">
                    <span>
                        Avater: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </span>
                    <span>Username: <b>Prince Ojo</b></span>
                    <span>Email: <b>princeojo@gmail.com</b></span>
                </div>
                <div className="tittle">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List/>
                <div className="tittle">
                    <h1>Saved List</h1>
                </div>
                <List/>
            </div>
        </div>

        <div className="chatcon">
            <div className="wapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default Proflie