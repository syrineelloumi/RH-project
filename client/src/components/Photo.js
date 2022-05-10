import React from 'react';
const Photo = () => {
    return(
        <body>
            <input type="file" id='image_input' accept='image/png , image/jpg'></input>
            <div id='display_image'></div>
        </body>
    );

    
}
export default Photo;