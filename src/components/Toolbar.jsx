import { useDraggable } from '@dnd-kit/core'

const DraggableItem = ({ id, label, description, icon, onAdd }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  return (
    <div className="toolbar-item-container">
      <div 
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className="toolbar-item"
      >
        <div className="item-content">
          <span className="item-icon">{icon}</span>
          <div className="item-text">
            <span className="item-label">{label}</span>
            <span className="item-description">{description}</span>
          </div>
        </div>
      </div>
      <button className="quick-add-btn" onClick={() => onAdd(id)}>
        +
      </button>
    </div>
  )
}

const Toolbar = ({ addComponent }) => {
  const components = [
    { 
      id: 'text', 
      label: 'Text Box', 
      description: 'Add editable text content with formatting options',
      icon: '📝'
    },
    { 
      id: 'image', 
      label: 'Image', 
      description: 'Insert image with upload and positioning controls',
      icon: '🖼️'
    },
    { 
      id: 'button', 
      label: 'Button', 
      description: 'Interactive button with customizable styling',
      icon: '🔘'
    }
  ]

  return (
    <div className="toolbar">
      <div className="toolbar-header">
        <h3>Components</h3>
        <p>Drag components to the canvas or click the + button to add them quickly</p>
      </div>
      
      <div className="toolbar-content">
        {components.map(comp => (
          <DraggableItem 
            key={comp.id}
            id={comp.id}
            label={comp.label}
            description={comp.description}
            icon={comp.icon}
            onAdd={addComponent}
          />
        ))}
      </div>

      <div className="quick-tips">
        <h4>Quick Tips</h4>
        <ul>
          <li>Drag components onto the canvas to add them</li>
          <li>Double-click text components to edit content</li>
          <li>Click the + button for quick addition</li>
        </ul>
      </div>
    </div>
  )
}

export default Toolbar