const PropertiesPanel = ({ component, updateComponent, canvasBgColor, setCanvasBgColor }) => {
  if (!component) {
    return (
      <div className="properties-panel">
        <div className="panel-header">
          <h3>Properties Panel</h3>
          <p>Select a component to customize its properties</p>
        </div>
        
        <div className="canvas-settings">
          <h4>Canvas Settings</h4>
          <div className="form-group">
            <label>Background Color</label>
            <input 
              type="color" 
              value={canvasBgColor}
              onChange={(e) => setCanvasBgColor(e.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }

  const handleStyleChange = (property, value) => {
    const newStyles = { ...component.styles, [property]: value }
    updateComponent(component.id, { styles: newStyles })
  }

  const handlePositionChange = (axis, value) => {
    const newPosition = { ...component.position, [axis]: parseInt(value) || 0 }
    updateComponent(component.id, { position: newPosition })
  }

  const handleSizeChange = (dimension, value) => {
    const newSize = { ...component.size, [dimension]: parseInt(value) || 0 }
    updateComponent(component.id, { size: newSize })
  }

  return (
    <div className="properties-panel">
      <div className="panel-header">
        <h3>Properties Panel</h3>
        <p>Customize your component's appearance</p>
      </div>

      <div className="property-section">
        <h4>Content</h4>
        <div className="form-group">
          <label>{component.type === 'button' ? 'Button Text' : 'Content'}</label>
          <input 
            type="text" 
            value={component.content.replace(/<[^>]*>/g, '')}
            onChange={(e) => updateComponent(component.id, { content: e.target.value })}
          />
        </div>
      </div>

      <div className="property-section">
        <h4>Position & Size</h4>
        <div className="position-grid">
          <div className="form-group">
            <label>X Position</label>
            <input 
              type="number" 
              value={component.position?.x || 0}
              onChange={(e) => handlePositionChange('x', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Y Position</label>
            <input 
              type="number" 
              value={component.position?.y || 0}
              onChange={(e) => handlePositionChange('y', e.target.value)}
            />
          </div>
        </div>
        
        <div className="size-grid">
          <div className="form-group">
            <label>Width</label>
            <input 
              type="number" 
              value={component.size?.width || ''}
              onChange={(e) => handleSizeChange('width', e.target.value)}
              placeholder="Auto"
            />
          </div>
          <div className="form-group">
            <label>Height</label>
            <input 
              type="number" 
              value={component.size?.height || ''}
              onChange={(e) => handleSizeChange('height', e.target.value)}
              placeholder="Auto"
            />
          </div>
        </div>
      </div>

      <div className="property-section">
        <h4>Typography</h4>
        <div className="form-group">
          <label>Font Size</label>
          <select 
            value={component.styles.fontSize || '16px'}
            onChange={(e) => handleStyleChange('fontSize', e.target.value)}
          >
            <option value="12px">Small (12px)</option>
            <option value="14px">Medium (14px)</option>
            <option value="16px">Large (16px)</option>
            <option value="18px">X-Large (18px)</option>
            <option value="24px">XX-Large (24px)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Font Weight</label>
          <select 
            value={component.styles.fontWeight || 'normal'}
            onChange={(e) => handleStyleChange('fontWeight', e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Light</option>
          </select>
        </div>

        <div className="form-group">
          <label>Text Color</label>
          <input 
            type="color" 
            value={component.styles.color || '#000000'}
            onChange={(e) => handleStyleChange('color', e.target.value)}
          />
        </div>
      </div>

      {component.type === 'button' && (
        <div className="property-section">
          <h4>Button Styles</h4>
          <div className="form-group">
            <label>Background Color</label>
            <input 
              type="color" 
              value={component.styles.backgroundColor || '#3498db'}
              onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Border Radius</label>
            <input 
              type="range" 
              min="0" 
              max="20" 
              value={parseInt(component.styles.borderRadius) || 5}
              onChange={(e) => handleStyleChange('borderRadius', `${e.target.value}px`)}
            />
            <span>{parseInt(component.styles.borderRadius) || 5}px</span>
          </div>
        </div>
      )}

      <div className="property-section">
        <h4>Canvas Settings</h4>
        <div className="form-group">
          <label>Background Color</label>
          <input 
            type="color" 
            value={canvasBgColor}
            onChange={(e) => setCanvasBgColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default PropertiesPanel