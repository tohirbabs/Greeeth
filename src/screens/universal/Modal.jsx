const UModal = ({open,show,title,children}) => {

    return (    

<div  
className={` ${!open && 'hidden'} fixed z-10 inset-0 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

 
    <div className=" inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl p-4 transform transition-all sm:my-8 w-full md:w-1/2 lg:w-1/3 " id="">
    
     
      <div className="flex mb-3 justify-between w-full border-b pb-2">
          <p className="font-bold text-lg">{title}</p>
          <span className="material-icons-outlined text-gray-700 cursor-pointer" onClick={()=>show(!open)}>
            close
            </span>
       </div> 


        

       <div className="w-full"> 
            {children}
       </div>       
      


    </div>
  </div>
</div>


 );
}

export default UModal;