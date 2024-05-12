import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebaseInit";
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactCard from "./components/ContactCard";

import AddAndUpdateContact from "./components/AddAndUpdateContact";
import UseDisclosure from "./hooks/useDisclosure";
import NotFoundContact from "./components/NotFoundContact";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen}=UseDisclosure();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef,(snapshot)=>{
 // console.log(contactsSnapshot);
 const contactsList = snapshot.docs.map((doc) => {
  return { id: doc.id, ...doc.data() };
});
// console.log(contactsList);
setContacts(contactsList);
return contactsList;
        })
       
        // console.log(contacts);
      } catch (error) {
        console.log(error);
      }
    };
    
    getContacts();
  }, []);

const filterContacts=(e)=>{
  const value=e.target.value;
  const contactsRef=collection(db,"contacts");
  onSnapshot(contactsRef,(snapshot)=>{
    // console.log(contactsSnapshot);
    const contactsList = snapshot.docs.map((doc) => {
     return { id: doc.id, ...doc.data() };
   });

   const filteredContacts=contactsList.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()));
   console.log(filterContacts);
      setContacts(filteredContacts);
   return filteredContacts;
           })

}

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className='flex justify-center items-center'>
     <div className='flex items-center relative'><input type='text' onChange={filterContacts}
     className='flex-grow h-10 rounded-md border text-white pl-9 border-white bg-transparent'/><FaSearch className='text-white ml-2 text-xxl absolute'/>
     </div>
     <div><FaCirclePlus onClick={onOpen} className='text-white ml-2 text-2xl'/>
</div>
</div>
        <div className="flex flex-col gap-1">
          {contacts.length===0?<NotFoundContact/>:contacts.map((contact) => (
           <ContactCard key={contact.id} contact={contact}/>
             
                ))}
            </div>
        
        </div>

      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>

      <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Slide}
          />   
          
           </>
  );
}
