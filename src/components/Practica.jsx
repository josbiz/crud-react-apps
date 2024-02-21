function Practica() {
  return (
    <div className="w-[40%] m-auto bg-gray-600 rounded-md p-4">
      <form className="flex flex-col ">
        <label className="m-2 text-center" htmlFor="">Username</label>
        <input className="m-2" type="text" placeholder=""/>
        <label className="m-2 text-center" htmlFor="">Password</label>
        <input className="m-2" type="password" name="" id="" />
        <button className="self-center w-auto rounded-md hover:bg-gray-600 hover:text-white transition-all m-2 p-4 bg-white text-gray-900">Login</button>
      </form>
    </div>
  )
}

export default Practica
