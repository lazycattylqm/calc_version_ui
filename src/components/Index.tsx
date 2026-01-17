function Index() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
      }}
    >
      <header
        style={{
          height: '60px',
          background: '#001529',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          fontSize: '20px',
          fontWeight: 'bold',
          gap: '15px',
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            border: '2px solid #ffffff',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            fontSize: '12px',
            color: '#999',
          }}
        >
          LOGO
        </div>
        <span>Index Header</span>
      </header>
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px',
        }}
      >
        Body Content
      </div>
    </div>
  );
}

export default Index;
