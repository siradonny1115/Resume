import { Education, Certificate } from '../types/resume';

export const educationHistory: Education = {
  school: '충북대학교',
  major: '바이오시스템공학과',
  status: '졸업',
};

export const educationCourse: Education = {
  name: '멋쟁이 사자처럼 Front-end 1기',
  period: '2021.09 ~ 2022.02',
  status: '수료',
};

export const certificates: Certificate[] = [
  {
    name: 'SQLD (SQL 개발자)',
    issuer: '한국데이터산업진흥원',
  },
];
