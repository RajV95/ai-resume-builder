import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import { Input } from './ui/input';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from '../../service/GlobalApi';
import { useNavigate } from 'react-router-dom';

const AddResume = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();
    const {user} = useUser();
    const [loading,setLoading] = useState(false);
    const navigation = useNavigate();

    const onCreate=async()=>{
        setLoading(true)
        const uuid = uuidv4();
        console.log(resumeTitle,uuid);
        const data={
            data:{
                title:resumeTitle,
                resumeId:uuid,
                userEmail:user?.primaryEmailAddress?.emailAddress,
                userName:user?.fullName
            }
        }
        GlobalApi.CreateNewResume(data).then(resp=>{
            console.log(resp.data.data.documetId);
            if(resp)
            {
                setLoading(false);
                navigation('/resume/'+resp.data.data.documetId+'/edit');
            }
        },(error)=>{
            setLoading(false);
        })
    }

    return (
        <div>
            <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed
        ' onClick={()=>setOpenDialog(true)}>
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add Title for you new Resume</p>
                            <Input className="my-2" placeholder="Ex. Full Stack Resume"
                            onChange={(e)=>setResumeTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button 
                            disabled={!resumeTitle || loading}
                            onClick={()=>onCreate()}>
                                {loading?
                                <Loader2 className='animate-spin' /> : 'Create'}

                            </Button>
                            <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddResume