import React from 'react'
import {Typography} from '@mui/material'

function MuiTypography() {
  return (
    <div>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3'>h3 heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 heading</Typography>
        <Typography variant='h5'>h5 heading</Typography>
        <Typography variant='h6'>h6 heading</Typography>

        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias cumque voluptas aut ad impedit omnis nihil exercitationem laudantium provident delectus perspiciatis et, tempora unde ipsum dicta perferendis neque asperiores est.</Typography>
        <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nihil ratione eius sapiente. Ullam, tempore unde voluptate aut earum repellat porro recusandae ab itaque dolore ducimus qui saepe rerum possimus.</Typography>
    </div>
  )
}

export default MuiTypography