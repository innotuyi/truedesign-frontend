import React , {useState, useEffect}from 'react'
import axios from 'axios'

const Statistics = () => {


const [messages, setMessage] = useState([])

const [count, setPropertyCount] = useState()

const [messagesCount, setMessagecount] = useState()

const [forsale, setForSale] = useState()

const [forRent, setforRent] = useState()


useEffect(  ()=>{

  async function propertyCount() {
    try {

      const {data} = await axios.get("http://127.0.0.1:8000/api/property/statistics");

      if(data) {

        setPropertyCount(data[0].total)

        console.log("count", count)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  propertyCount();
  
}, [])


useEffect(  ()=>{

  async function getforsale() {
    try {

      const {data} = await axios.get("http://127.0.0.1:8000/api/property/statistics");

      if(data) {

        setForSale(data[0].total)

        console.log("ForSalae", forsale)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getforsale();
  
}, [])


useEffect(  ()=>{

  async function getforrent() {
    try {

      const {data} = await axios.get("http://127.0.0.1:8000/api/forsale/statistics");

      if(data) {

        setforRent(data[0].total)

        console.log("forrent", forRent)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getforrent();
  
}, [])



useEffect(  ()=>{

  async function getAllMessageCount() {
    try {

      const {data} = await axios.get("http://127.0.0.1:8000/api/message/statistics");

      if(data) {

        setMessagecount(data[0].total)

        console.log("Messagecount", messagesCount)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getAllMessageCount();
  
}, [])




useEffect(  ()=>{

  async function getAllMessage() {
    try {

      const response = await axios.get("http://127.0.0.1:8000/api/get-request");
      

      if(response) {

        setMessage(response.data.data)
      }
      
    } catch (error) {
    
      console.log(error)
      
    }
  }
  getAllMessage();
  
}, [])
    return (
        <>
        <div class="col-md-9 statistics">
    <div class="row">

        {/* First Part */}
        <div class="col-md-6">
            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">Properties</h6>
                        <span class="badge bg-primary">{count}</span>
                    </div>
                </div>
            </div>

            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">For Rent</h6>
                        <span class="badge bg-success">{forRent}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Second Part */}
        <div class="col-md-6">
            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">Messages</h6>
                        <span class="badge bg-info">{messagesCount}</span>
                    </div>
                </div>
            </div>

            <div class="card m-4 border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">For Sale</h6>
                        <span class="badge bg-warning">{forsale}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <h3>Messages</h3>
            <ul class="list-group">
                {messages.map((message) => (
                    <li class="list-group-item mb-1 border-0 shadow-sm">
                        <div class="media">
                            <div class="media-body">
                                <h5 class="media-heading">{message.name}</h5>
                                <h6>{message.subject}</h6>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</div>



        </>
      );
}

export default Statistics