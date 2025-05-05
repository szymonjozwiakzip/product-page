export default function HydrationIcon() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <img src="/images/kropla.svg" alt="kropelka" style={{ width: '18px', height: 'auto' }} />
          <img src="/images/kropla.svg" alt="kropelka" style={{ width: '18px', height: 'auto' }} />
          <img src="/images/kropla.svg" alt="kropelka" style={{ width: '18px', height: 'auto' }} />
        </div>
  
        <div style={{ width: '64px', height: '3px', backgroundColor: '#0f7f25', margin: '4px 0' }}></div>
  
        <div style={{ display: 'flex', gap: '8px' }}>
          <img src="/images/strzalka.svg" alt="strzałka" style={{ width: '18px', height: 'auto' }} />
          <img src="/images/strzalka.svg" alt="strzałka" style={{ width: '18px', height: 'auto' }} />
          <img src="/images/strzalka.svg" alt="strzałka" style={{ width: '18px', height: 'auto' }} />
        </div>
      </div>
    );
  }
  