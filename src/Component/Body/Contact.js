

const Contact = () =>{
   
    
    return(
        <>
        <div className="d-flex p-5 contactMain" >
            <div className="p-2 w-50">
                <div className="">
                    <h2 className="text-center">Get in touch</h2>
                </div>
                <form> 
                    <div className="d-flex align-items-center justify-content-around mt-4">
                    <input type="text"  placeholder="Name" className="p-2 fs-5 rounded" style={{width:"37%"}}></input>
                    <input type="email" placeholder="Email" className="p-2 fs-5 rounded" style={{width:"37%"}}></input>
                    </div>
                    <div className="p-4 mt-1" style={{marginLeft:"12px"}}>
                    <input type="text" placeholder="Subject" className="p-2 fs-5 rounded" style={{width:"98%"}}></input>
                    <textarea type="text" placeholder="Message" rows={5} className="p-2 fs-5 mt-3 rounded" style={{width:"98%"}}></textarea>

                    </div>    
                    <button className="p-3 rounded text-black fs-6" style={{margin:"2% 5%", border:"none"}}>Send Message</button>
                </form>
            </div>
            <div className="w-50 p-2 text-center">
                <h2 className="mt-2">Contact US</h2>
<div className="m-3">
                <div className="d-flex p-3 align-items-center fs-3 m-auto" style={{width:"70%", gap:"10px"}}>
                <i class="fa-solid fa-location-dot fa-sm" style={{color: "#fcfcfd"}}></i>
                <h5 className="fs-5">Address :  198 West 21th Street, Suite 721 New York NY 10016</h5>    
                </div>

                <div className="d-flex p-3 align-items-center fs-3 m-auto" style={{width:"70%", gap:"10px"}}>
                <i class="fa-light fa-mobile fa-xl" style={{color: "#fcfcfd"}}></i>
                <h5 className="fs-5 mx-3">Phone : 834656846 </h5>    
                </div>


                <div className="d-flex p-3 align-items-center fs-3 m-auto" style={{width:"70%", gap:"10px"}}>
                <i class="fa-solid fa-paper-plane fa-sm" style={{color: "#fcfcfd"}}></i>
                <h5 className="fs-5 mx-3">Email : info@yoursite.com</h5>    
                </div>

                <div className="d-flex p-3 align-items-center fs-3 m-auto" style={{width:"70%", gap:"10px"}}>
                <i class="fa-solid fa-globe fa-sm" style={{color: "#fcfcfd"}}></i>
                <h5 className="fs-5 mx-3">Website : yoursite.com </h5>    
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Contact;