import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { expCards } from '../constants';

const ExperienceSection = () => {
    return (
        <div id='education' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
            <div className='w-full h-full md:px-20 px-5'>
                <TitleHeader title = 'Education Journey' sub = 'My academic background and experiences' />
            </div>

            <div className='relative mt-32'>
                <div className='relative z-50 xl:space-y-32 space-y-20'>
                    {expCards}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;