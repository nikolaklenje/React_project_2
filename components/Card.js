
export default function Card(props){
    return(
        <div className="Card">
           <div className="CardElements">
             
                <img className= "CardImage" src={props.imageUrl} alt=""></img>
             <div className="Info">
                   <div className="InfoHeader">
                    <img className="PinImage"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZNHx99BPvlq_XyaWI7S8j0RZDPfE7JXEZQ&usqp=CAU" alt=""></img><p>{props.location}</p> <a href={props.googleMapsUrl}>View on google maps</a>
                   </div>
                   <div className="InfoText">
                      <h1>{props.title}</h1>
                      <p><b>{props.startDate} - {props.endDate}</b></p>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>

                   </div>
              
              </div>

    
            </div>
        </div>
    )
}