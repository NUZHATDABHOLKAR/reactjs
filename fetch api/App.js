import React from 'react'

class App extends React.Component {
    constructor(){
        super();
        this.state={
          users:null
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>
            //console.warn(result)
            this.setState({users:result.data})
            )
        })
    }
  render(){
    return(
        <div>
            <h1  className='text-center text-sky-500 text-3xl'>FETCH API DATA </h1>
            {
                this.state.users ?
                this.state.users.map((item,i)=>
                <div className='flex p-4'>
                    <p className='image.pngml-20'>{i}</p>
                    <div ><p className='ml-20'>First name: {item.first_name}</p></div>
                    <div ><p className='ml-20'>Last name: {item.last_name}</p></div>
                    <div ><p className='ml-20'>Email:  {item.email}</p></div>
                    <div ><p className='ml-20'>AvtAR: {item.avatar}</p></div>

                     
                </div>
                )
                :
                null
            }
        </div>
    );
  }
}
export default App
