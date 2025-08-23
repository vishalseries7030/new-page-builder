const StyleToolbar = ({ component, updateComponent }) => {
  const [styles, setStyles] = useState(component.styles || {})

  const handleStyleChange = (property, value) => {
    const newStyles = { ...styles, [property]: value }
    setStyles(newStyles)
    updateComponent({ styles: newStyles })
  }

  return (
    <div className="style-toolbar">
      <h3>Style Options</h3>
      
      <div className="style-group">
        <label>Font Size:</label>
        <select 
          value={styles.fontSize || '16px'} 
          onChange={(e) => handleStyleChange('fontSize', e.target.value)}
        >
          <option value="12px">Small</option>
          <option value="16px">Medium</option>
          <option value="24px">Large</option>
          <option value="32px">X-Large</option>
        </select>
      </div>

      <div className="style-group">
        <label>Text Color:</label>
        <input 
          type="color" 
          value={styles.color || '#000000'} 
          onChange={(e) => handleStyleChange('color', e.target.value)}
        />
      </div>

      <div className="style-group">
        <label>Background Color:</label>
        <input 
          type="color" 
          value={styles.backgroundColor || 'transparent'} 
          onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
        />
      </div>

      <div className="style-group">
        <label>Text Align:</label>
        <select 
          value={styles.textAlign || 'left'} 
          onChange={(e) => handleStyleChange('textAlign', e.target.value)}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      {component.type === 'button' && (
        <>
          <div className="style-group">
            <label>Padding:</label>
            <input 
              type="range" 
              min="5" 
              max="30" 
              value={parseInt(styles.padding?.replace('px', '') || '10')} 
              onChange={(e) => handleStyleChange('padding', `${e.target.value}px`)}
            />
          </div>

          <div className="style-group">
            <label>Border Radius:</label>
            <input 
              type="range" 
              min="0" 
              max="50" 
              value={parseInt(styles.borderRadius?.replace('px', '') || '5')} 
              onChange={(e) => handleStyleChange('borderRadius', `${e.target.value}px`)}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default StyleToolbar