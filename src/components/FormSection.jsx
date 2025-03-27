import React, { useState } from 'react'
import PersonalDetailForm from './PersonalDetailForm'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import SummaryForm from './SummaryForm'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'
import SkillsForm from './SkilsForm'
import { Link, Navigate, useParams } from 'react-router-dom'
import ViewResume from '@/my-resume/[resumeId]/view/ViewResume'
import ThemeColor from './ThemeColor'

const FormSection = () => {

  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const {resumeId} = useParams();

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <Link to={'/dashboard'}>
            <Button size="sm"><Home /></Button>
          </Link>
          <ThemeColor />
        </div>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && <Button size="sm" onClick={() => setActiveFormIndex(activeFormIndex - 1)}> <ArrowLeft /></Button>}

          <Button
            disabled={!enableNext}
            className="flex gap-2" size="sm" onClick={() => setActiveFormIndex(activeFormIndex + 1)}>
            Next<ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail */}
      {activeFormIndex == 1 ? <PersonalDetailForm enabledNext={(v) => setEnableNext(v)} /> : null}
      {/* Summary */}
      {activeFormIndex == 2 ? <SummaryForm enabledNext={(v) => setEnableNext(v)} /> : null}
      {/* Experience */}
      {activeFormIndex == 3 ? <ExperienceForm /> : null}
      {/* Educational Details */}
      {activeFormIndex == 4 ? <EducationForm /> : null}
      {/* Skills */}
      {activeFormIndex == 5 ? <SkillsForm /> : null}
      {/* View Resume */}
      {activeFormIndex==6 ? <Navigate to={'/my-resume/'+resumeId+'/view'} /> : null}
    </div>
  )
}

export default FormSection