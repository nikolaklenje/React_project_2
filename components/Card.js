
export default function Card(){
    return(
        <div className="Card">
           <div className="CardElements">
             <div>
                <img className= "CardImage" src="https://mmimageservice.azurewebsites.net/api/image/office/039" alt=""></img> </div>
             <div className="Info">
                   <div className="InfoHeader">
                    <img className="PinImage"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZNHx99BPvlq_XyaWI7S8j0RZDPfE7JXEZQ&usqp=CAU" alt=""></img><p>Japan</p> <a href="https://www.google.com/maps">View on google maps</a>
                   </div>
                   <div className="InfoText">
                      <h1>Mount Fuji</h1>
                      <p><b>12 Jan,2021 - 20 Jan, 2022</b></p>
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