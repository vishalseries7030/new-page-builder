import TextComponent from './TextComponent'
import ImageComponent from './ImageComponent'
import ButtonComponent from './ButtonComponent'

const Canvas = ({ 
  components, 
  selectedComponent, 
  setSelectedComponent, 
  updateComponent, 
  deleteComponent,
  isPreviewMode,
  canvasBgColor 
}) => {
  const handleComponentClick = (e, component) => {
    e.stopPropagation()
    setSelectedComponent(component)
  }

  const handleCanvasClick = () => {
    setSelectedComponent(null)
  }

  const renderComponent = (component) => {
    const commonProps = {
      key: component.id,
      component,
      isSelected: selectedComponent?.id === component.id,
      onClick: (e) => handleComponentClick(e, component),
      onUpdate: (updates) => updateComponent(component.id, updates),
      onDelete: () => deleteComponent(component.id),
      isPreviewMode
    }

    const style = {
      left: `${component.position?.x || 0}px`,
      top: `${component.position?.y || 0}px`,
      width: component.size?.width ? `${component.size.width}px` : 'auto',
      height: component.size?.height ? `${component.size.height}px` : 'auto',
      ...component.styles
    }

    switch (component.type) {
      case 'text':
        return <TextComponent {...commonProps} style={style} />
      case 'image':
        return <ImageComponent {...commonProps} style={style} />
      case 'button':
        return <ButtonComponent {...commonProps} style={style} />
      default:
        return null
    }
  }

  return (
    <div 
      className={`canvas ${isPreviewMode ? 'preview-mode' : ''}`}
      onClick={handleCanvasClick}
      style={{ backgroundColor: canvasBgColor }}
    >
      {components.map(renderComponent)}
      
      {components.length === 0 && !isPreviewMode && (
        <div className="canvas-empty-state">
          <h3>🚀 Start Building Your Page</h3>
          <p>Drag components from the toolbar or click the + buttons to add them</p>
          <div style={{ marginTop: '2rem', fontSize: '3rem', opacity: 0.5 }}>
            👇
          </div>
        </div>
      )}
    </div>
  )
}

export default Canvas