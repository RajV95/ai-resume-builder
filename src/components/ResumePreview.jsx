import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailsPreview from './PersonalDetailsPreview';
import SummaryPreview from './SummaryPreview';
import ExperiencePreview from './ExperiencePreview';
import EducationalPreview from './EducationalPreview';
import SkillsPreview from './SkillsPreview';

const ResumePreview = () => {

    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
        style={{
            borderColor:resumeInfo?.themeColor
        }}
    >
        {/* Personal Details */}
            <PersonalDetailsPreview resumeInfo={resumeInfo}/>
        {/* Summary */}
            <SummaryPreview resumeInfo={resumeInfo}/>
        {/* Professional Experience */}
        {resumeInfo?.experience?.length>0&& <ExperiencePreview resumeInfo={resumeInfo} />}
        {/* Educational Details */}
        {resumeInfo?.education?.length>0&&  <EducationalPreview resumeInfo={resumeInfo} />}
        {/* Skills */}
            {resumeInfo?.skills?.length>0 && <SkillsPreview resumeInfo={resumeInfo} /> }
    </div>
  )
}

export default ResumePreview