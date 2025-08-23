import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextComponent = ({ 
  component, 
  isSelected, 
  onClick, 
  onUpdate, 
  onDelete,
  isPreviewMode,
  style 
}) => {
  const [isEditing, setIsEditing] = useState(false)
  
  const handleTextChange = (content) => {
    onUpdate({ content })
  }

  const handleDoubleClick = () => {
    if (!isPreviewMode) {
      setIsEditing(true)
    }
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  return (
    <div 
      className={`component text-component ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      onDoubleClick={handleDoubleClick}
      style={style}
    >
      {isEditing && !isPreviewMode ? (
        <ReactQuill
          value={component.content}
          onChange={handleTextChange}
          onBlur={handleBlur}
          modules={{
            toolbar: [
              ['bold', 'italic', 'underline'],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'color': [] }],
              [{ 'align': [] }]
            ]
          }}
        />
      ) : (
        <div 
          className="text-content"
          dangerouslySetInnerHTML={{ __html: component.content }}
        />
      )}
      
      {isSelected && !isPreviewMode && (
        <button className="delete-btn" onClick={onDelete}>×</button>
      )}
    </div>
  )
}

export default TextComponent