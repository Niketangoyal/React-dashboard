import  { FormEvent, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
const allletteres="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const allnumbers="0123456789"
const allsymbols="!@#$%^&*()_+="

const Coupon = () => {
  const [size,setSize]=useState<number>(8);
  const [prefix,setPrefix]=useState<string>("");
  const [includeNumbers,setIncludeNumbers]=useState<boolean>(false);
  const [includeCharacters,setIncludeCharacters]=useState<boolean>(false);
  const [includeSymbols,setIncludeSymbols]=useState<boolean>(false);
  const [isCopied,setIsCopied]=useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("fdafd")
  const copyText=async (coupon:string)=>{
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true)

  };
  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setIsCopied(false)
    if(!includeNumbers && !includeCharacters && includeSymbols){
      return alert("Please select One At least");

    }
    let result:string=prefix|| "";
    const loopLength:number=size-result.length;
    let entireString:string="";
      if(includeCharacters)entireString+=allletteres;
      if(includeNumbers)entireString+=allnumbers;
      if(includeSymbols)entireString+=allsymbols;
      for(let i=0;i<loopLength;i++){
      const randomNum:number=~~(Math.random()*entireString.length)
      result+=entireString[randomNum];
    }
    setCoupon(result);
  }
    
  return (
    <div className="adminContainer"> 
    {/* sidebar */}
    <AdminSidebar/>
    <main className="dashboard-app-container">
      <h1>Coupon</h1>
      <section>
        <form onSubmit={submitHandler} className='coupon-form'>
          <input type="text" placeholder='Text to include' value={prefix} onChange={(e)=>setPrefix(e.target.value)}
          maxLength={size} />
          <input type="number" placeholder='Coupon Length' value={size} onChange={(e)=>setSize(Number((e.target.value)))}
           min={8} max={25} />
           <fieldset>
            <legend>Include</legend>
            <input type="checkbox"  checked={includeNumbers} onChange={()=>setIncludeNumbers(!includeNumbers)}
           />
           <span>Numbers</span>
            <input type="checkbox"  checked={includeCharacters} onChange={()=>setIncludeCharacters(!includeCharacters)}
        />
           <span>Characters</span>
            <input type="checkbox"  checked={includeSymbols} onChange={()=>setIncludeSymbols(!includeSymbols)}
           />
           <span>Symbols</span>
           </fieldset>
           <button type='submit'>Generate</button>
        </form>
        {
          coupon && <code> {coupon} <span onClick={()=>copyText(coupon)}>{isCopied?"Copied":"Copy"}</span></code>
        }
      </section>

      </main>
     
      </div>
  )
}

export default Coupon