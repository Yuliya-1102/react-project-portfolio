import { FaPenRuler, FaPhotoFilm, FaFileCode, FaAlignLeft } from "react-icons/fa6";

export const services = [
    {
        icon: FaPenRuler,
        title: 'Образование',
        subtitle: 'Университет и курсы',
        description: 'Основные этапы обучения и повышения квалификации.',
        list: [
            'Бакалавр компьютерных наук',
            'Магистр программной инженерии',
            'Курсы по React и Node.js'
        ]
    },
    {
        icon: FaPhotoFilm,
        title: 'Опыт работы',
        subtitle: 'Frontend и Fullstack',
        description: 'Ключевые проекты и компании, где был получен опыт.',
        list: [
            'Frontend Developer в Tech Solutions',
            'React Developer в Startup Hub',
            'Full Stack Developer в GlobalSoft'
        ]
    },
    {
        icon: FaFileCode,
        title: 'Навыки',
        subtitle: 'Технические компетенции',
        description: 'Основные технологии и инструменты, которыми владею.',
        list: [
            'HTML, CSS, JavaScript',
            'React, TypeScript',
            'Node.js, Git'
        ]
    },
    {
        icon: FaAlignLeft,
        title: 'Проекты',
        subtitle: 'Личные и командные',
        description: 'Примеры реализованных приложений и инициатив.',
        list: [
            'Каталог автомобилей с использованием Unsplash API',
            'Система управления задачами на React',
            'REST API для e-commerce проекта'
        ]
    }
];