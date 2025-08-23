const Header = ({ projectName, setProjectName, isPreviewMode, setIsPreviewMode, saveProject }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="logo">
          <span className="logo-icon">🛠️</span>
          KLYNK
        </h1>
        <span className="tagline">Professional Page Builder</span>
      </div>
      
      <div className="header-center">
        <input 
          type="text" 
          value={projectName} 
          onChange={(e) => setProjectName(e.target.value)}
          className="project-name-input"
          placeholder="Project Name"
        />
      </div>
      
      <div className="header-right">
        <button 
          onClick={() => setIsPreviewMode(!isPreviewMode)}
          className={`preview-btn ${isPreviewMode ? 'preview-active' : ''}`}
        >
          {isPreviewMode ? (
            <>
              <span className="btn-icon">✏️</span>
              Design Mode
            </>
          ) : (
            <>
              <span className="btn-icon">👁️</span>
              Preview Mode
            </>
          )}
        </button>
        
        <button onClick={saveProject} className="save-btn">
          <span className="btn-icon">💾</span>
          Save Project
        </button>
      </div>
    </header>
  )
}

export default Header