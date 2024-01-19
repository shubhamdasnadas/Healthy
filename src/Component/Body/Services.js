import Data from "../../Utils/config"

const Services = () => {

    return (
        <>
            <div style={{padding:"50px", width:"100%"}}>
                <h1 style={{textAlign:"center", color:"orangered"}}>Services</h1>
                <div>
                    {
                        Data.map((value) => {
                            return (
                                <div className="p-5 d-flex mt-5" style={{border:"2px solid black"}}>
                                    <div className="w-75">
                                        <h1>{value.name}</h1>
                                        <p>{value.content}</p>
                                        <button className="p-2 text-white fw-bold" style={{width:"180px",border:"none", backgroundColor:"orange", fontSize:"20px"}}>Learn More</button>
                                    </div>
                                    <div>
                                        <img src={value.url} className="p-2" style={{width:"50%", float:"right", alignItems:"center"}}></img>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Services