import React, { useContext, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from '../../service/GlobalApi'
import { AIChatSession } from '../../service/AIModel'
import { useParams } from 'react-router-dom'
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';

const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"

const SummaryForm = ({ enabledNext }) => {
    const params = useParams();

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const [summery, setSummery] = useState();
    const [loading, setLoading] = useState(false);
    const [aiGeneratedSummeryList, setAIGeneratedSummeryList] = useState();

    useEffect(() => {
        summery && setResumeInfo({
            ...resumeInfo,
            summery: summery
        })
    }, [summery])

    const GenerateSummeryFromAI = async () => {
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle)
        console.log(PROMPT);
        const result = await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()))
       
        setAIGeneratedSummeryList(JSON.parse(result.response.text()))
        console.log(aiGeneratedSummeryList);
        setLoading(false);
    }

    // const GenerateSummeryFromAI = async () => {
    //     setLoading(true);
    //     const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
    //     console.log("Prompt Sent:", PROMPT);
        
    //     const result = await AIChatSession.sendMessage(PROMPT);
    //     console.log("Raw Response:", result.response.text());
        
    //     try {
    //         const parsedResult = JSON.parse(result.response.text());
    //         console.log("Parsed Result:", parsedResult);
            
    //         // Correcting the data access
    //         if (Array.isArray(parsedResult?.summaries)) {
    //             setAIGeneratedSummeryList(parsedResult.summaries);
    //         } else {
    //             console.error("Unexpected data format:", parsedResult);
    //             toast("Failed to fetch AI-generated summaries. Please try again.");
    //         }
    //     } catch (error) {
    //         console.error("JSON Parsing Error:", error);
    //         toast("Error parsing AI-generated summary. Please try again.");
    //     }
    
    //     setLoading(false);
    // }
    

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: {
                summery: summery
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
            console.log("Updating Resume:", params?.resumeId, data);
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated");
        }, (error) => {
            console.log("Updating Resume:", params?.resumeId, data);
            console.log(error);
            setLoading(false);
        })
    }

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>
                    Summary Details
                </h2>
                <p>Add Summary with your Job Title</p>
                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summary</label>
                        <Button onClick={() => GenerateSummeryFromAI()} variant="outline" type="button" size="sm" className="border-primary text-primary flex gap-2">
                            <Brain className='h-4 w-4' /> Generate From AI
                        </Button>
                    </div>
                    <Textarea required
                        onChange={(e) => setSummery(e.target.value)}
                        value = {summery}
                        defaultValue={summery?summery:resumeInfo?.summery}
                        className="mt-5" />
                    <div className='mt-2 flex justify-end'>
                        <Button
                            disabled={loading}
                            type="submit">
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>
            {aiGeneratedSummeryList && <div className='my-5'>
                <h2 className='font-bold text-lg'>Suggestions</h2>
                {aiGeneratedSummeryList?.map((item, index) => (
                    <div key={index}
                        onClick={() => setSummery(item?.summary)}
                        className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                        <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
                        <p>{item?.summary}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SummaryForm