'use client'

import Welcome from "@/components/welcome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import axiosInstance from "@/lib/axiosInstance";
import ReactModal from "react-modal";
import NoteCard from "@/components/noteCard";



export default function Home() {
  const [allNotes, setAllNotes] = useState([])
  const [hasToken, setHasToken] = useState(false);
  const [sortOption, setSortOption] = useState("dateDesc");
  
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })

  const [openEditHistoryModal, setOpenEditHistoryModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })


  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/features/get-all-notes");
      if(response.data && response.data.allNotes){
        setAllNotes(response.data.allNotes);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  }

  const handleEdit = (noteData) => {
    setOpenAddEditModal({
      isShown: true,
      data: noteData,
      type: "edit"
    })
  }

  const handleHistory = async (noteData) => {
    const noteId = noteData._id
    try {
      const response = await axiosInstance.get("/features/get-note-by-id/" + noteId)
      setOpenEditHistoryModal({
        isShown: true,
        data: response.data.editHistory
      })
      
    } catch (error) {
      console.log("Error fetching edit history:", error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true); // Set to true if token exists
      getAllNotes();
    } else {
      setHasToken(false); // ไม่เจอ token
    }
    return () => {};
  }, []);




  return (
    <>
      <NoteCard 
        title
      
      />
     
    </>
  );
}
