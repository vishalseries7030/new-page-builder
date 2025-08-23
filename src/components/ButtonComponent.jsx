import { useState } from 'react'

const ButtonComponent = ({ 
  component, 
  isSelected, 
  onClick, 
  onUpdate, 
  onDelete,
  isPreviewMode,
  style 
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [buttonText, setButtonText] = useState(component.content)

  const handleTextChange = (e) => {
    setButtonText(e.target.value)
  }

  const handleTextSubmit = () => {
    onUpdate({ content: buttonText })
    setIsEditing(false)
  }

  return (
    <div 
      className={`component button-component ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={style}
    >
      {isEditing && !isPreviewMode ? (
        <div className="button-edit-panel">
          <input 
            type="text" 
            value={buttonText} 
            onChange={handleTextChange}
            onBlur={handleTextSubmit}
            autoFocus
          />
          <button onClick={handleTextSubmit}>OK</button>
        </div>
      ) : (
        <button 
          className="preview-button"
          onDoubleClick={() => !isPreviewMode && setIsEditing(true)}
        >
          {component.content}
        </button>
      )}
      
      {isSelected && !isPreviewMode && (
        <button className="delete-btn" onClick={onDelete}>×</button>
      )}
    </div>
  )
}

export default ButtonComponent