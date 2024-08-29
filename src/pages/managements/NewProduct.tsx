import { ChangeEvent, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const NewProduct = () => {
    const [name,setName]=useState<string>("")
    const [price,setPrice]=useState<number>()
    const [stock,setStock]=useState<number>()
    const [photo,setPhoto]=useState<string>()
const changeImageHanlder=(e:ChangeEvent<HTMLInputElement>)=>{//iska system dekhna hai
    const file:File |undefined=e.target.files?.[0];
const reader:FileReader = new FileReader();
if(file){
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        if(typeof reader.result==="string"){
            setPhoto(reader.result);
        }
        else{setPhoto("")}
    }
}

}
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar/>
      <main className="product-management">
    <article>
        <form >
            <h2>New Product</h2>
            <div>
                <label >
                    Name
                </label>
                <input type="text" 
                required placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div>
                <label >
                    Price
                </label>
                <input type="number" 
                required placeholder='Price' value={price} onChange={(e)=>{setPrice(Number(e.target.value))}} />
            </div> 
            <div>
                <label >
                    Stock
                </label>
                <input type="number" 
                required placeholder='Stock' value={stock} onChange={(e)=>{setStock(Number(e.target.value))}} />
            </div> 
            <div>
                <label >
                    Photo
                </label>
                <input type="file" 
                required onChange={changeImageHanlder} />
            </div> 
            {
                photo && <img src={photo} alt="New Image" />
                
            }
            <button type='submit'>Create</button>
        </form>
    </article>

      </main>
      </div>
  )
}

export default NewProduct