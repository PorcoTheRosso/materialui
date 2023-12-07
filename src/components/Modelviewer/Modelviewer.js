import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import modelGlb from '../../assets/glb/FZV4.glb';

const Modelviewer = () => {
    const modelRef = React.useRef();
  return (

    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
    <model-viewer 
    className="model-viewer"
    alt="FZV4" 
    src={modelGlb} 
    shadow-intensity="1" 
    camera-controls
    auto-rotate
    ref={(ref) => {
        modelRef.current = ref;
      }}
      style={{ width: '100%', height: '820px', display: 'block', margin: '0 auto' }} // Adjust width as needed
      >

    </model-viewer>

    </Grid>
    

  )
}

export default Modelviewer