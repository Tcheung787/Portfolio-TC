import { MailIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24 -mt-14'>
          {/* text */}
          <div className='flex flex-col justify-center xl:ml-12'>
            <div className='flex items-center gap-x-4 text-primary text-xl mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hi! 
            </div>
            <h1 className='h1 max-w-xl mb-5'>Want to chat?</h1>
            <p className='subtitle max-w-[400px]'>
            If anything piqued your interest, or if you simply want to chat, don’t hesitate to reach out to me :)

            </p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex max-w-md max-h-80 ml-14 bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32 -mt-36'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-10 mb-12 xl:mb-24 text-base xl:text-xl xl:ml-12'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={30} className='text-primary' />
              <div>cheungtiffany02@gmail.com</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={30} className='text-primary' />
              <div>(540) 398 1572</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
