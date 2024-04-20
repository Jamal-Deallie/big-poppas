import privacyItems from '../../data/privacy.json';



const PrivacyPage = () => {
  return (
    <main className='pt-nav-height bg-primary'>
      <div className='grid-inner text-secondary lg:py-20 py-16 px-4 lg:px-10 gap-y-10'>
        <div className='col-span-full pb-16'>
          <h1 className='title-lg'>Privacy Policy</h1>
          <h2 className='title-sm mt-2'>
            Date of last update: January 1, 2024
          </h2>
        </div>
        {privacyItems.map(item => {
          return (
            <div className='col-span-full lg:col-span-7' key={item.id}>
              <h3 className='title-xs'>{item.subject}</h3>
              <p className='text-base lg:text-lg mt-2'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default PrivacyPage;
