import React from 'react';

const SessionComponent = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', fontFamily: 'Roboto, Open Sans', padding: '40px', textAlign: 'center' ,paddingBottom:'80px'}}>
      <p className="text-3xl font-bold uppercase pb-6 text-yellow-400 mb-4">What drives Us ?</p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="/images/1img.png" alt="Image 1" style={{ width: '150px', height: '150px' }} />
          <p style={{ marginTop: '10px' }}>14 hrs Paid Interns <br /> Enabling the GIG Generation</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/images/2img.png" alt="Image 2" style={{ width: '150px', height: '150px' }} />
          <p style={{ marginTop: '10px' }}>“Find your Niche” <br /> While in Internship</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/images/3img.png" alt="Image 3" style={{ width: '150px', height: '150px' }} />
          <p style={{ marginTop: '10px' }}>Stream & Skill <br /> Agnostic Approach</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/images/4img.png" alt="Image 4" style={{ width: '150px', height: '150px' }} />
          <p style={{ marginTop: '10px' }}>Unlocking Potential <br /> to Enhance Employability</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="/images/5img.png" alt="Image 5" style={{ width: '150px', height: '150px' }} />
          <p style={{ marginTop: '10px' }}>To Start ups : Industry ready <br /> INTERNs <br />ready to work for 14 hrs / week</p>
        </div>
      </div>
    </div>
  );
}

export default SessionComponent;
