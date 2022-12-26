import { rest } from 'msw';

export const handlers = [
    rest.get('/react-resume/data/dashboard.json',null),
    rest.get('/react-resume/data/commonData.json',null),
    rest.get('/react-resume/data/professionalData.json',null)
]