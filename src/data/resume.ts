import { ResumeData } from '../types/resume';
import { basicInfo } from './basicInfo';
import { introduction } from './introduction';
import { skills } from './skills';
import { career } from './career';
import { mainProjects } from './mainProjects';
import { otherProjects } from './otherProjects';
import { contributions } from './contributions';
import { personalProjects } from './personalProjects';
import { educationHistory, educationCourse, certificates } from './education';

export const resumeData: ResumeData = {
  basicInfo,
  introduction,
  skills,
  career,
  mainProjects,
  otherProjects,
  contributions,
  personalProjects,
  educationHistory,
  educationCourse,
  certificates,
};
