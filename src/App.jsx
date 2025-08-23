import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'
import PropertiesPanel from './components/PropertiesPanel'
import Header from './components/Header'
import './App.css'

function App() {
  const [components, setComponents] = useState([])
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [canvasBgColor, setCanvasBgColor] = useState('#ffffff')
  const [projectName, setProjectName] = useState('KLYNK Project')

  const handleDragEnd = (event) => {
    const { active } = event
    const type = active.id

    if (type) {
      const newComponent = {
        id: Date.now().toString(),
        type,
        content: type === 'text' ? '<p>Click to edit text</p>' : 
                type === 'button' ? 'Click Me' : 
                type === 'image' ? 'https://via.placeholder.com/300x200/3498db/ffffff?text=Upload+Image' : '',
        styles: {
          fontSize: '16px',
          color: '#000000',
          backgroundColor: type === 'button' ? '#3498db' : 'transparent',
          padding: type === 'button' ? '10px 20px' : '0',
          borderRadius: type === 'button' ? '5px' : '0',
          border: 'none',
          textAlign: 'left'
        },
        position: { x: 100, y: 100 },
        size: { width: 200, height: type === 'button' ? 40 : 'auto' }
      }
      setComponents([...components, newComponent])
    }
  }

  const updateComponent = (id, updates) => {
    setComponents(components.map(comp => 
      comp.id === id ? { ...comp, ...updates } : comp
    ))
  }

  const deleteComponent = (id) => {
    setComponents(components.filter(comp => comp.id !== id))
    if (selectedComponent?.id === id) {
      setSelectedComponent(null)
    }
  }

  const addComponent = (type) => {
    const newComponent = {
      id: Date.now().toString(),
      type,
      content: type === 'text' ? '<p>Click to edit text</p>' : 
              type === 'button' ? 'Click Me' : 
              type === 'image' ? 'https://via.placeholder.com/300x200/3498db/ffffff?text=Upload+Image' : '',
      styles: {
        fontSize: '16px',
        color: '#000000',
        backgroundColor: type === 'button' ? '#3498db' : 'transparent',
        padding: type === 'button' ? '10px 20px' : '0',
        borderRadius: type === 'button' ? '5px' : '0',
        border: 'none',
        textAlign: 'left'
      },
      position: { x: 100, y: 100 + components.length * 60 },
      size: { width: 200, height: type === 'button' ? 40 : 'auto' }
    }
    setComponents([...components, newComponent])
  }

  const saveProject = () => {
    const projectData = {
      name: projectName,
      components,
      canvasBgColor,
      createdAt: new Date().toISOString()
    }
    localStorage.setItem('klynk-project', JSON.stringify(projectData))
    alert('Project saved successfully!')
  }

  return (
    <div className="app">
      <Header 
        projectName={projectName}
        setProjectName={setProjectName}
        isPreviewMode={isPreviewMode}
        setIsPreviewMode={setIsPreviewMode}
        saveProject={saveProject}
      />
      
      <div className="builder-container">
        <DndContext onDragEnd={handleDragEnd}>
          <Toolbar addComponent={addComponent} />
        </DndContext>
        
        <div className="main-content">
          <Canvas 
            components={components}
            selectedComponent={selectedComponent}
            setSelectedComponent={setSelectedComponent}
            updateComponent={updateComponent}
            deleteComponent={deleteComponent}
            isPreviewMode={isPreviewMode}
            canvasBgColor={canvasBgColor}
          />
          
          {!isPreviewMode && (
            <PropertiesPanel 
              component={selectedComponent}
              updateComponent={updateComponent}
              canvasBgColor={canvasBgColor}
              setCanvasBgColor={setCanvasBgColor}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App