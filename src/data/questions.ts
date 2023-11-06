import { Question } from "@/types/Questions";

export const questions: Question[] = [
    {
        question: 'What is the correct command to create a new React project?',
        options: [
            'npx crate-next-app',
            'npm create-react-app',
            'npm create-react-app myReactApp',
            'npx create-react-app MyReactApp'
        ],
        answer: 0
    },
    {
        question: 'React is mainly used for building ___.',
        options: [
            'Database',
            'Connectivity',
            'User interface',
            'Design Platform'
        ],
        answer: 2
    }
];