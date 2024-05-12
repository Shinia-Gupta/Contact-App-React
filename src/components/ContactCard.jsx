import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { FaRegUserCircle, FaTrash } from "react-icons/fa";
import { MdEdit } from 'react-icons/md';
import { db } from '../config/firebaseInit';
import AddAndUpdateContact from './AddAndUpdateContact';
import UseDisclosure from '../hooks/useDisclosure';
import { toast } from 'react-toastify';

function ContactCard({contact}) {
const {isOpen,onClose,onOpen}=UseDisclosure();
  const deleteContact=async (id)=>{
try {
  await deleteDoc(doc(db,'contacts',id));
  toast.success("Contact deleted successfully!")
} catch (error) {
  console.log(error);
  
  toast.error(error)
}
  }

    return (
      <>
        <div key={contact.id} className="bg-yellow flex justify-between flex-grow rounded-lg my-3 p-2">
        <div className="flex gap-2 ">
        <FaRegUserCircle className="text-orange text-4xl"/>
        <div
        className="">
          <h2 className="font-bold">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
        </div>
        <div className="flex justify-center items-center gap-4">
        <MdEdit onClick={onOpen} className='cursor-pointer'/>
        <FaTrash onClick={()=>deleteContact(contact.id)} className="text-red-500 cursor-pointer" />

        </div>
        </div>
        <AddAndUpdateContact onClose={onClose} isOpen={isOpen} isUpdate={true} contact={contact}/>
        </>
    )
}

export default ContactCard
